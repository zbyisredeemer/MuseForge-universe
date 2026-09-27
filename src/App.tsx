import { MouseEvent, PointerEvent, WheelEvent, useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { galaxies, getGalaxyById, styles } from './data/styles';
import type { MuseImage, MuseStyle } from './data/styles';

type View = { kind: 'universe' } | { kind: 'style'; style: MuseStyle };
type WorldTransitionPhase = 'entering' | 'arriving' | 'returning' | 'settling';
type WorldTransition = { phase: WorldTransitionPhase; style: MuseStyle } | null;

function getSpherePlacement(index: number, total: number) {
  if (total <= 1) return [0, 0] as const;
  const goldenAngle = 137.508;
  const y = 1 - (2 * (index + 0.5)) / total;
  const pitch = Math.asin(y) * (180 / Math.PI) * 0.58;
  const yaw = (index * goldenAngle) % 360;
  return [pitch, yaw] as const;
}

function App() {
  const [view, setView] = useState<View>({ kind: 'universe' });
  const [selected, setSelected] = useState<MuseImage | null>(null);
  const [worldTransition, setWorldTransition] = useState<WorldTransition>(null);
  const transitionTimers = useRef<number[]>([]);

  const queueTransition = (callback: () => void, delay: number) => {
    const timer = window.setTimeout(() => {
      transitionTimers.current = transitionTimers.current.filter((item) => item !== timer);
      callback();
    }, delay);
    transitionTimers.current.push(timer);
  };

  useEffect(() => {
    return () => {
      transitionTimers.current.forEach((timer) => window.clearTimeout(timer));
      transitionTimers.current = [];
    };
  }, []);

  const openStyle = (style: MuseStyle) => {
    if (worldTransition) return;

    setSelected(null);
    setWorldTransition({ phase: 'entering', style });

    queueTransition(() => {
      setView({ kind: 'style', style });
      setWorldTransition({ phase: 'arriving', style });
      window.scrollTo({ top: 0, left: 0 });

      queueTransition(() => {
        setWorldTransition(null);
      }, 520);
    }, 680);
  };

  const goUniverse = () => {
    setSelected(null);

    if (view.kind === 'universe') {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    if (worldTransition) return;

    const style = view.style;
    setWorldTransition({ phase: 'returning', style });

    queueTransition(() => {
      setView({ kind: 'universe' });
      setWorldTransition({ phase: 'settling', style });
      window.scrollTo({ top: 0, left: 0 });

      queueTransition(() => {
        setWorldTransition(null);
      }, 560);
    }, 520);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      if (selected) {
        setSelected(null);
        return;
      }

      if (view.kind === 'style') {
        goUniverse();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected, view, worldTransition]);

  const transitionClass = worldTransition ? ` transition-${worldTransition.phase}` : '';
  const universeTransitionStyleId =
    view.kind === 'universe' && worldTransition ? worldTransition.style.id : null;
  const initialFocusedGalaxy =
    view.kind === 'universe' && worldTransition?.phase === 'settling'
      ? worldTransition.style.galaxyId
      : null;

  return (
    <main className={`app-shell view-${view.kind}${transitionClass}`}>
      <UniverseBackdrop />
      <header className="topbar">
        <button type="button" className="brand" onClick={goUniverse} aria-label="返回 MuseForge 宇宙首页">
          <span className="brand-mark">✦</span>
          <span className="brand-copy">
            <span>MuseForge</span>
            <b>UNIVERSE</b>
          </span>
        </button>
        <div className="topbar-meta">
          <span>CURATED AI PORTRAITS</span>
          <i />
          <span>{styles.length} WORLDS</span>
        </div>
      </header>

      {view.kind === 'universe' ? (
        <Universe
          onOpen={openStyle}
          transitionStyleId={universeTransitionStyleId}
          transitionPhase={worldTransition?.phase ?? null}
          initialFocusedGalaxy={initialFocusedGalaxy}
        />
      ) : (
        <StyleWorld style={view.style} onBack={goUniverse} onSelect={setSelected} />
      )}

      {worldTransition && <WorldFlightOverlay transition={worldTransition} />}
      {selected && <ImageViewer image={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}

function WorldFlightOverlay({ transition }: { transition: Exclude<WorldTransition, null> }) {
  const galaxy = getGalaxyById(transition.style.galaxyId);
  const isEntering = transition.phase === 'entering' || transition.phase === 'arriving';

  return (
    <div className={`world-flight-overlay world-flight-overlay-${transition.phase}`} aria-hidden="true">
      <div className="world-flight-vignette" />
      <div className="world-flight-object">
        <i className="world-flight-ring world-flight-ring-a" />
        <i className="world-flight-ring world-flight-ring-b" />
        <i className="world-flight-core" />
      </div>
      <div className="world-flight-caption">
        <span>{isEntering ? 'ENTERING WORLD' : 'RETURNING TO UNIVERSE'}</span>
        <strong>{transition.style.name}</strong>
        <small>{galaxy?.name ?? transition.style.subtitle}</small>
      </div>
    </div>
  );
}

function UniverseBackdrop() {
  const stars = useMemo(() => {
    let seed = 731;
    const rand = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    return Array.from({ length: 144 }, (_, index) => ({
      id: index,
      depth: index % 3,
      left: `${rand() * 100}%`,
      top: `${rand() * 100}%`,
      size: 0.55 + rand() * 2.35,
      opacity: 0.18 + rand() * 0.78,
      delay: `${rand() * 8}s`,
      duration: `${4.5 + rand() * 7}s`
    }));
  }, []);

  return (
    <div className="universe-bg" aria-hidden="true">
      <div className="cosmic-vignette" />
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />
      <div className="nebula nebula-c" />

      <div className="galaxy-system">
        <div className="galaxy-halo" />
        <div className="galaxy-disc" />
        <div className="galaxy-ring galaxy-ring-a" />
        <div className="galaxy-ring galaxy-ring-b" />
        <div className="galaxy-core" />
      </div>

      <div className="galaxy-band" />

      {[0, 1, 2].map((depth) => (
        <div key={depth} className={`star-layer star-layer-${depth}`}>
          {stars.filter((star) => star.depth === depth).map((star) => (
            <i
              key={star.id}
              className="dust-star"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                animationDelay: star.delay,
                animationDuration: star.duration
              }}
            />
          ))}
        </div>
      ))}

      <i className="shooting-star shooting-star-a" />
      <i className="shooting-star shooting-star-b" />
    </div>
  );
}
const GALAXY_ANCHORS: Record<string, { x: number; y: number }> = {
  nature: { x: 71, y: 31 },
  urban: { x: 43, y: 43 },
  eastern: { x: 70, y: 67 },
  fashion: { x: 50, y: 24 },
  lifestyle: { x: 29, y: 65 },
  fantasy: { x: 82, y: 49 },
  future: { x: 54, y: 54 },
  photography: { x: 42, y: 76 }
};

const GALAXY_DEPTH: Record<string, { z: number; scale: number; opacity: number }> = {
  nature: { z: 72, scale: 1.05, opacity: .96 },
  urban: { z: -72, scale: .91, opacity: .76 },
  eastern: { z: 22, scale: 1, opacity: .88 },
  fashion: { z: -118, scale: .86, opacity: .66 },
  lifestyle: { z: -36, scale: .94, opacity: .80 },
  fantasy: { z: 112, scale: 1.10, opacity: 1 },
  future: { z: 48, scale: 1.03, opacity: .92 },
  photography: { z: -88, scale: .90, opacity: .72 }
};

const GALAXY_ROUTES = [
  ['nature', 'fashion'],
  ['nature', 'fantasy'],
  ['nature', 'future'],
  ['fashion', 'urban'],
  ['urban', 'future'],
  ['urban', 'lifestyle'],
  ['future', 'eastern'],
  ['future', 'photography'],
  ['eastern', 'fantasy'],
  ['eastern', 'photography'],
  ['lifestyle', 'photography']
] as const;

function getGalaxyAnchor(galaxyId: string) {
  return GALAXY_ANCHORS[galaxyId] ?? { x: 50, y: 50 };
}

function getGalaxyDepth(galaxyId: string) {
  return GALAXY_DEPTH[galaxyId] ?? { z: 0, scale: 1, opacity: .86 };
}

function getUniverseStarPlacement(style: MuseStyle, index: number, total: number) {
  const anchor = getGalaxyAnchor(style.galaxyId);
  if (total <= 1) return anchor;

  const angle = ((index / total) * 360 - 90 + (style.sequence % 2) * 16) * (Math.PI / 180);
  const shell = Math.floor(index / 7);
  const radiusX = 7.5 + shell * 4.5;
  const radiusY = 6.2 + shell * 3.8;

  return {
    x: Math.max(7, Math.min(93, anchor.x + Math.cos(angle) * radiusX)),
    y: Math.max(10, Math.min(90, anchor.y + Math.sin(angle) * radiusY))
  };
}

function getFocusedStarPlacement(style: MuseStyle, index: number, total: number) {
  const center = { x: 64, y: 49 };
  if (total <= 1) return center;

  const angle = ((index / total) * 360 - 90 + (style.sequence % 2) * 12) * (Math.PI / 180);
  const shell = Math.floor(index / 8);
  const radiusX = 15 + shell * 7;
  const radiusY = 12 + shell * 5.5;

  return {
    x: Math.max(25, Math.min(92, center.x + Math.cos(angle) * radiusX)),
    y: Math.max(13, Math.min(87, center.y + Math.sin(angle) * radiusY))
  };
}

function getUniverseStarSize(style: MuseStyle) {
  return Math.min(24, Math.max(13, 11 + Math.sqrt(style.images.length) * 1.8));
}

function getCompletionRatio(style: MuseStyle) {
  if (!style.images.length) return 0;
  const generated = style.images.filter((image) => image.dna.generation.assetType === 'generated').length;
  return generated / style.images.length;
}

function getCompletionTier(ratio: number) {
  if (ratio >= 0.85) return 'high';
  if (ratio >= 0.45) return 'mid';
  return 'low';
}

function getPreviewImages(style: MuseStyle) {
  const generated = style.images.filter((image) => image.dna.generation.assetType === 'generated');
  const placeholders = style.images.filter((image) => image.dna.generation.assetType !== 'generated');
  return [...generated, ...placeholders].slice(0, 3);
}

type MaturityStage = 'explore' | 'building' | 'mature' | 'complete';

function getMaturityState(style: MuseStyle): { stage: MaturityStage; label: string; ratio: number } {
  const ratio = getCompletionRatio(style);

  if (ratio >= 1) return { stage: 'complete', label: 'COMPLETE', ratio };
  if (ratio >= 0.7) return { stage: 'mature', label: 'MATURE', ratio };
  if (ratio >= 0.25) return { stage: 'building', label: 'BUILDING', ratio };
  return { stage: 'explore', label: 'EXPLORE', ratio };
}

type UniverseDensityFilter = 'all' | 'complete' | 'rich';

function Universe({
  onOpen,
  transitionStyleId = null,
  transitionPhase = null,
  initialFocusedGalaxy = null
}: {
  onOpen: (style: MuseStyle) => void;
  transitionStyleId?: string | null;
  transitionPhase?: WorldTransitionPhase | null;
  initialFocusedGalaxy?: string | null;
}) {
  const [densityFilter, setDensityFilter] = useState<UniverseDensityFilter>('all');
  const [galaxyFilter, setGalaxyFilter] = useState<string>('all');
  const [focusedGalaxy, setFocusedGalaxy] = useState<string | null>(initialFocusedGalaxy);
  const [routeGalaxy, setRouteGalaxy] = useState<string | null>(null);
  const [previewStyleId, setPreviewStyleId] = useState<string | null>(null);
  const constellationRef = useRef<HTMLDivElement>(null);

  const transitionStyle = transitionStyleId ? styles.find((style) => style.id === transitionStyleId) : undefined;
  const transitionGalaxyId = transitionStyle?.galaxyId ?? null;
  const effectiveGalaxyFilter = focusedGalaxy ?? galaxyFilter;

  const filteredStyles = styles.filter((style) => {
    const galaxyMatches = effectiveGalaxyFilter === 'all' || style.galaxyId === effectiveGalaxyFilter;
    if (!galaxyMatches) return false;

    if (densityFilter === 'complete') {
      return getCompletionRatio(style) >= 0.85;
    }

    if (densityFilter === 'rich') {
      return style.images.length >= 10;
    }

    return true;
  });

  const visibleStyleIds = new Set(filteredStyles.map((style) => style.id));
  const visibleGalaxyIds = new Set(filteredStyles.map((style) => style.galaxyId));
  const focusedGalaxyData = focusedGalaxy ? getGalaxyById(focusedGalaxy) : undefined;
  const focusedGalaxyStyles = focusedGalaxy ? styles.filter((style) => style.galaxyId === focusedGalaxy) : [];
  const focusedImageCount = focusedGalaxyStyles.reduce((total, style) => total + style.images.length, 0);

  const parallaxFrame = useRef<number | null>(null);
  const parallaxTarget = useRef({ x: 0, y: 0 });
  const parallaxCurrent = useRef({ x: 0, y: 0 });

  const applyParallax = (x: number, y: number) => {
    const root = document.documentElement;
    root.style.setProperty('--parallax-bg-x', `${x * -7}px`);
    root.style.setProperty('--parallax-bg-y', `${y * -5}px`);
    root.style.setProperty('--parallax-field-x', `${x * 11}px`);
    root.style.setProperty('--parallax-field-y', `${y * 8}px`);
    root.style.setProperty('--parallax-copy-x', `${x * 2.5}px`);
    root.style.setProperty('--parallax-copy-y', `${y * 2}px`);
  };

  const scheduleParallax = (x: number, y: number) => {
    parallaxTarget.current = { x, y };
    if (parallaxFrame.current !== null) return;

    const tick = () => {
      const current = parallaxCurrent.current;
      const target = parallaxTarget.current;
      const nextX = current.x + (target.x - current.x) * 0.16;
      const nextY = current.y + (target.y - current.y) * 0.16;
      parallaxCurrent.current = { x: nextX, y: nextY };
      applyParallax(nextX, nextY);

      if (Math.abs(target.x - nextX) > 0.004 || Math.abs(target.y - nextY) > 0.004) {
        parallaxFrame.current = window.requestAnimationFrame(tick);
      } else {
        parallaxCurrent.current = target;
        applyParallax(target.x, target.y);
        parallaxFrame.current = null;
      }
    };

    parallaxFrame.current = window.requestAnimationFrame(tick);
  };

  const onUniversePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    scheduleParallax(Math.max(-1, Math.min(1, x)), Math.max(-1, Math.min(1, y)));

    if (focusedGalaxy) {
      if (routeGalaxy !== null) setRouteGalaxy(null);
      return;
    }

    const constellation = constellationRef.current;
    if (!constellation) return;

    const mapRect = constellation.getBoundingClientRect();
    const px = ((event.clientX - mapRect.left) / mapRect.width) * 100;
    const py = ((event.clientY - mapRect.top) / mapRect.height) * 100;

    let nearest: string | null = null;
    let nearestDistance = 17;

    for (const galaxy of galaxies) {
      const anchor = getGalaxyAnchor(galaxy.id);
      const dx = (px - anchor.x) * 0.82;
      const dy = py - anchor.y;
      const distance = Math.hypot(dx, dy);

      if (distance < nearestDistance) {
        nearest = galaxy.id;
        nearestDistance = distance;
      }
    }

    if (nearest !== routeGalaxy) setRouteGalaxy(nearest);
  };

  const resetParallax = () => {
    scheduleParallax(0, 0);
    setRouteGalaxy(null);
  };

  useEffect(() => {
    return () => {
      if (parallaxFrame.current !== null) {
        window.cancelAnimationFrame(parallaxFrame.current);
      }
      applyParallax(0, 0);
    };
  }, []);

  const handleGalaxyFilter = (galaxyId: string) => {
    setFocusedGalaxy(null);
    setRouteGalaxy(null);
    setGalaxyFilter(galaxyId);
  };

  const focusGalaxy = (galaxyId: string) => {
    const hasStyles = styles.some((style) => style.galaxyId === galaxyId);
    if (!hasStyles) return;
    setGalaxyFilter('all');
    setRouteGalaxy(null);
    setFocusedGalaxy(galaxyId);
  };

  const leaveGalaxyFocus = () => {
    setFocusedGalaxy(null);
    setRouteGalaxy(null);
    setGalaxyFilter('all');
  };

  return (
    <section
      className={[
        'universe-view',
        focusedGalaxy ? 'focus-mode' : '',
        transitionStyleId ? 'world-flight-active' : '',
        transitionPhase ? `world-flight-${transitionPhase}` : ''
      ].filter(Boolean).join(' ')}
      onPointerMove={onUniversePointerMove}
      onPointerLeave={resetParallax}
    >
      <div className="hero-copy">
        <div className="hero-kicker">
          <span className="hero-kicker-line" />
          <span>THE MUSE CONSTELLATION</span>
        </div>
        <h1>
          <span>让美，</span>
          <em>拥有自己的星轨。</em>
        </h1>
        <p className="hero-lead">一个持续生长的视觉宇宙。每颗星代表一种影像审美，每个星球收藏一组独立的人物、场景与 Prompt DNA。</p>

        <div className="hero-signals" aria-label="宇宙概览">
          <span><b>{styles.length}</b><small>风格星球</small></span>
          <i />
          <span><b>{styles.reduce((total, style) => total + style.images.length, 0)}</b><small>精选影像</small></span>
          <i />
          <span><b>{galaxies.length}</b><small>视觉星系</small></span>
        </div>

      </div>

      <div className="universe-controls" aria-label="宇宙筛选">
        <div className="control-row control-density">
          <span className="control-label">探索</span>
          {([
            ['all', '全部星球'],
            ['complete', '精选完成'],
            ['rich', '影像丰富']
          ] as const).map(([value, label]) => (
            <button
              key={value}
              className={densityFilter === value ? 'active' : ''}
              onClick={() => setDensityFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="control-row galaxy-filter-row">
          <span className="control-label">星域</span>
          <button
            className={galaxyFilter === 'all' && !focusedGalaxy ? 'active' : ''}
            onClick={() => handleGalaxyFilter('all')}
          >
            全部
          </button>
          {galaxies.map((galaxy) => (
            <button
              key={galaxy.id}
              data-galaxy={galaxy.id}
              className={effectiveGalaxyFilter === galaxy.id ? 'active' : ''}
              onClick={() => handleGalaxyFilter(galaxy.id)}
            >
              {galaxy.name.replace('星系', '')}
            </button>
          ))}
        </div>

        <div className="universe-legend">
          <span>悬浮预览</span>
          <i />
          <span>点击星系聚焦</span>
          <i />
          <span>进入星球浏览完整作品</span>
        </div>
      </div>

      <div
        ref={constellationRef}
        className={`constellation${focusedGalaxy ? ' is-focused' : ''}`}
        data-route-galaxy={routeGalaxy ?? undefined}
        aria-label="风格星图"
      >
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />

        <svg
          className={`galaxy-routes${focusedGalaxy ? ' hidden' : ''}`}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="route-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(133, 205, 196, .10)" />
              <stop offset="48%" stopColor="rgba(190, 211, 229, .18)" />
              <stop offset="100%" stopColor="rgba(165, 137, 225, .10)" />
            </linearGradient>
          </defs>
          {GALAXY_ROUTES.map(([from, to]) => {
            const start = getGalaxyAnchor(from);
            const end = getGalaxyAnchor(to);
            const isRouteActive = routeGalaxy === from || routeGalaxy === to;

            return (
              <g
                key={`${from}-${to}`}
                className={`galaxy-route${isRouteActive ? ' active' : ''}`}
                data-from={from}
                data-to={to}
              >
                <line
                  className="galaxy-route-glow"
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                />
                <line
                  className="galaxy-route-line"
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                />
                <circle
                  className="galaxy-route-node"
                  cx={(start.x + end.x) / 2}
                  cy={(start.y + end.y) / 2}
                  r="0.34"
                />
              </g>
            );
          })}
        </svg>

        {focusedGalaxy && focusedGalaxyData && (
          <div className="galaxy-focus-panel">
            <button onClick={leaveGalaxyFocus}>← 返回全宇宙</button>
            <div className="eyebrow">{focusedGalaxyData.subtitle} GALAXY</div>
            <strong>{focusedGalaxyData.name}</strong>
            <p>{focusedGalaxyData.description}</p>
            <small>{focusedGalaxyStyles.length} 个风格星球 · {focusedImageCount} 张照片</small>
          </div>
        )}

        {galaxies.map((galaxy) => {
          const baseAnchor = getGalaxyAnchor(galaxy.id);
          const anchor = focusedGalaxy === galaxy.id ? { x: 64, y: 49 } : baseAnchor;
          const depth = getGalaxyDepth(galaxy.id);
          const galaxyStyles = styles.filter((style) => style.galaxyId === galaxy.id);
          const imageCount = galaxyStyles.reduce((total, style) => total + style.images.length, 0);
          const generatedCount = galaxyStyles.reduce(
            (total, style) => total + style.images.filter((image) => image.dna.generation.assetType === 'generated').length,
            0
          );
          const completionRatio = imageCount ? generatedCount / imageCount : 0;
          const isDormant = galaxyStyles.length === 0;
          const isFocused = focusedGalaxy === galaxy.id;
          const isReceded = Boolean(focusedGalaxy) && !isFocused;
          const isFilteredOut = !focusedGalaxy && galaxyFilter !== 'all' && galaxyFilter !== galaxy.id;
          const hasVisibleStyles = visibleGalaxyIds.has(galaxy.id);

          return (
            <button
              key={galaxy.id}
              type="button"
              className={[
                'galaxy-zone',
                isDormant ? 'dormant' : '',
                isFocused ? 'focused' : '',
                isReceded ? 'receded' : '',
                isFilteredOut ? 'filtered-out' : '',
                !isDormant && !hasVisibleStyles ? 'empty-result' : '',
                !isDormant ? `completion-${getCompletionTier(completionRatio)}` : '',
                transitionGalaxyId === galaxy.id ? 'world-target-galaxy' : '',
                transitionStyleId && transitionGalaxyId !== galaxy.id ? 'world-flight-receding' : ''
              ].filter(Boolean).join(' ')}
              data-galaxy={galaxy.id}
              style={{
                left: `${anchor.x}%`,
                top: `${anchor.y}%`,
                '--galaxy-z': `${depth.z}px`,
                '--galaxy-depth-scale': depth.scale,
                '--galaxy-depth-opacity': depth.opacity
              } as CSSProperties}
              onClick={() => focusGalaxy(galaxy.id)}
              onPointerEnter={() => !focusedGalaxy && setRouteGalaxy(galaxy.id)}
              onPointerLeave={() => !focusedGalaxy && setRouteGalaxy(null)}
              disabled={isDormant}
              aria-label={isDormant ? `${galaxy.name}待开发` : `聚焦${galaxy.name}`}
            >
              <i className="galaxy-zone-mist" />
              <i className="galaxy-zone-ring galaxy-zone-ring-a" />
              <i className="galaxy-zone-ring galaxy-zone-ring-b" />
              <i className="galaxy-zone-core" />

              <span>{galaxy.name}</span>
              <small>
                {isDormant
                  ? '待开发'
                  : `${galaxyStyles.length} 颗星 · ${imageCount} 张 · ${Math.round(completionRatio * 100)}%`}
              </small>
            </button>
          );
        })}

        {styles.map((style) => {
          const galaxyStyles = styles.filter((item) => item.galaxyId === style.galaxyId);
          const index = galaxyStyles.findIndex((item) => item.id === style.id);
          const position = focusedGalaxy === style.galaxyId
            ? getFocusedStarPlacement(style, index, galaxyStyles.length)
            : getUniverseStarPlacement(style, index, galaxyStyles.length);
          const baseStarSize = getUniverseStarSize(style);
          const starSize = focusedGalaxy === style.galaxyId ? Math.min(30, baseStarSize * 1.22) : baseStarSize;
          const galaxy = getGalaxyById(style.galaxyId);
          const depth = getGalaxyDepth(style.galaxyId);
          const completionRatio = getCompletionRatio(style);
          const isVisible = visibleStyleIds.has(style.id);
          const previewImages = getPreviewImages(style);
          const tooltipDirection = position.x > 72 ? 'tooltip-left' : 'tooltip-right';
          const maturity = getMaturityState(style);
          const starStyle = {
            left: `${position.x}%`,
            top: `${position.y}%`,
            width: starSize,
            height: starSize,
            '--maturity-progress': `${Math.max(8, maturity.ratio * 100)}%`,
            '--star-z': `${depth.z * .82}px`,
            '--star-depth-scale': depth.scale,
            '--star-depth-opacity': Math.min(1, depth.opacity + .06)
          } as CSSProperties;

          return (
            <button
              key={style.id}
              className={[
                'style-star',
                `completion-${getCompletionTier(completionRatio)}`,
                `maturity-${maturity.stage}`,
                focusedGalaxy === style.galaxyId ? 'focus-star' : '',
                tooltipDirection,
                isVisible ? '' : 'filtered-out',
                transitionStyleId === style.id ? 'world-target' : '',
                transitionStyleId && transitionStyleId !== style.id ? 'world-flight-receding' : ''
              ].filter(Boolean).join(' ')}
              data-galaxy={style.galaxyId}
              aria-hidden={!isVisible}
              tabIndex={isVisible ? 0 : -1}
              aria-label={`打开${style.name}，共${style.images.length}张照片，状态${maturity.label}`}
              style={starStyle}
              onClick={() => isVisible && !transitionStyleId && onOpen(style)}
              onPointerEnter={() => {
                if (!focusedGalaxy) setRouteGalaxy(style.galaxyId);
                setPreviewStyleId(style.id);
              }}
              onPointerLeave={() => {
                if (!focusedGalaxy) setRouteGalaxy(null);
                setPreviewStyleId((current) => current === style.id ? null : current);
              }}
              onFocus={() => setPreviewStyleId(style.id)}
              onBlur={() => setPreviewStyleId((current) => current === style.id ? null : current)}
            >
              <span className="star-maturity-track" />
              <span className="star-maturity-ring" />
              <span className="star-core" />
              <span className="star-pulse" />
              <span className="star-tooltip">
                <span className="star-preview-strip" aria-hidden="true">
                  {previewStyleId === style.id && previewImages.map((image) => (
                    <span key={image.id} className="star-preview-thumb">
                      <img src={image.image} alt="" loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="star-tooltip-copy">
                  <span className={`maturity-badge maturity-badge-${maturity.stage}`}>{maturity.label}</span>
                  <b>{style.name}</b>
                  <small>{galaxy?.name ?? style.subtitle} · {style.subtitle}</small>
                  <em>
                    {style.images.length} 张照片 · 完成度 {Math.round(completionRatio * 100)}%
                  </em>
                </span>
              </span>
            </button>
          );
        })}

        <div className="hint-line">
          <span />
          {focusedGalaxy
            ? `${filteredStyles.length} 个世界正在等待探索`
            : 'SELECT A STAR · ENTER A WORLD'}
        </div>
      </div>

      <div className="universe-footer">
        <span>MUSEFORGE / VISUAL ARCHIVE</span>
        <span>{new Set(styles.map((style) => style.galaxyId)).size} ACTIVE GALAXIES</span>
        <span>PROMPT DNA · IDENTITY · IMAGE</span>
      </div>
    </section>
  );
}

function StyleWorld({ style, onBack, onSelect }: { style: MuseStyle; onBack: () => void; onSelect: (image: MuseImage) => void }) {
  const galaxy = getGalaxyById(style.galaxyId);
  const generatedCount = style.images.filter((image) => image.dna.generation.assetType === 'generated').length;
  const placeholderCount = style.images.length - generatedCount;
  const maturity = getMaturityState(style);
  const orderedImages = useMemo(
    () => [...style.images].sort((a, b) => Number(b.dna.generation.assetType === 'generated') - Number(a.dna.generation.assetType === 'generated')),
    [style.images]
  );
  const [isDragging, setIsDragging] = useState(false);
  const sphereRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const frontCardRef = useRef<HTMLElement | null>(null);
  const rotation = useRef({ x: -8, y: 0 });
  const zoom = useRef(1);
  const velocity = useRef({ x: 0, y: 0 });
  const viewTarget = useRef<{ x: number; y: number; zoom: number; mode: 'snap' | 'reset' } | null>(null);
  const snapArmed = useRef(false);
  const snapPauseUntil = useRef(0);
  const lastInteraction = useRef(0);
  const drag = useRef({
    active: false,
    pointerId: null as number | null,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    lastTime: 0,
    moved: false
  });
  const suppressClick = useRef(false);

  const nearestEquivalentAngle = (target: number, current: number) => {
    const delta = ((target - current + 540) % 360) - 180;
    return current + delta;
  };

  const getCardDepth = (pitchDegrees: number, yawDegrees: number) => {
    const rx = rotation.current.x * (Math.PI / 180);
    const ry = rotation.current.y * (Math.PI / 180);
    const pitch = pitchDegrees * (Math.PI / 180);
    const yaw = yawDegrees * (Math.PI / 180);

    return (
      -Math.sin(rx) * Math.sin(pitch) +
      Math.cos(rx) * Math.cos(pitch) * Math.cos(yaw + ry)
    );
  };

  const getNearestFrontTarget = () => {
    const sphere = sphereRef.current;
    if (!sphere) return null;

    let best: { pitch: number; yaw: number; depth: number } | null = null;
    const cards = sphere.querySelectorAll<HTMLElement>('.sphere-card');

    for (let index = 0; index < cards.length; index += 1) {
      const card = cards[index];
      const pitch = Number(card.dataset.pitch ?? 0);
      const yaw = Number(card.dataset.yaw ?? 0);
      const depth = getCardDepth(pitch, yaw);

      if (!best || depth > best.depth) {
        best = { pitch, yaw, depth };
      }
    }

    if (!best) return null;
    return {
      x: Math.max(-65, Math.min(65, -best.pitch)),
      y: nearestEquivalentAngle(-best.yaw, rotation.current.y)
    };
  };

  const applySphereRotation = () => {
    const sphere = sphereRef.current;
    if (!sphere) return;

    sphere.style.transform =
      `rotateX(${rotation.current.x}deg) rotateY(${rotation.current.y}deg)`;

    if (sceneRef.current) {
      sceneRef.current.style.transform = `scale(${zoom.current})`;
      sceneRef.current.style.setProperty('--planet-zoom', zoom.current.toFixed(3));
    }

    const cards = sphere.querySelectorAll<HTMLElement>('.sphere-card');
    let frontCard: HTMLElement | null = null;
    let frontDepth = -Infinity;

    for (let index = 0; index < cards.length; index += 1) {
      const card = cards[index];
      const pitch = Number(card.dataset.pitch ?? 0);
      const yaw = Number(card.dataset.yaw ?? 0);
      const normalizedDepth = getCardDepth(pitch, yaw);
      const frontness = Math.max(0, Math.min(1, (normalizedDepth + 1) / 2));
      const focus = Math.pow(frontness, .72);
      const scale = .76 + focus * .30;
      const opacity = .14 + focus * .86;
      const blur = Math.max(0, (1 - focus) * 2.7);
      const brightness = .54 + focus * .60;
      const saturation = .58 + focus * .50;

      card.style.setProperty('--card-depth-scale', scale.toFixed(3));
      card.style.setProperty('--card-depth-opacity', opacity.toFixed(3));
      card.style.setProperty('--card-depth-blur', `${blur.toFixed(2)}px`);
      card.style.setProperty('--card-depth-brightness', brightness.toFixed(3));
      card.style.setProperty('--card-depth-saturation', saturation.toFixed(3));
      card.style.zIndex = String(10 + Math.round(frontness * 90));

      if (normalizedDepth > frontDepth) {
        frontDepth = normalizedDepth;
        frontCard = card;
      }
    }

    if (frontCardRef.current !== frontCard) {
      frontCardRef.current?.classList.remove('is-front');
      frontCard?.classList.add('is-front');
      frontCardRef.current = frontCard;
    }
  };

  useEffect(() => {
    rotation.current = { x: -8, y: 0 };
    zoom.current = 1;
    velocity.current = { x: 0, y: 0 };
    viewTarget.current = null;
    snapArmed.current = false;
    snapPauseUntil.current = 0;
    applySphereRotation();

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let lastFrame = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(34, Math.max(0, now - lastFrame));
      lastFrame = now;

      if (!drag.current.active && !media.matches) {
        const target = viewTarget.current;

        if (target) {
          const ease = 1 - Math.pow(.80, dt / 16.667);
          rotation.current.x += (target.x - rotation.current.x) * ease;
          rotation.current.y += (target.y - rotation.current.y) * ease;
          zoom.current += (target.zoom - zoom.current) * ease;

          const settled =
            Math.abs(target.x - rotation.current.x) < .035 &&
            Math.abs(target.y - rotation.current.y) < .045 &&
            Math.abs(target.zoom - zoom.current) < .0015;

          if (settled) {
            rotation.current.x = target.x;
            rotation.current.y = target.y;
            zoom.current = target.zoom;
            viewTarget.current = null;
            snapArmed.current = false;
            snapPauseUntil.current = now + (target.mode === 'snap' ? 1050 : 1400);
          }
        } else {
          const damping = Math.pow(0.925, dt / 16.667);
          velocity.current.x *= damping;
          velocity.current.y *= damping;

          rotation.current.x = Math.max(
            -65,
            Math.min(65, rotation.current.x + velocity.current.x * dt)
          );
          rotation.current.y += velocity.current.y * dt;

          const speed = Math.hypot(velocity.current.x, velocity.current.y);
          const canSnap =
            snapArmed.current &&
            speed < .0028 &&
            now - lastInteraction.current > 260;

          if (canSnap) {
            const snap = getNearestFrontTarget();
            if (snap) {
              viewTarget.current = { ...snap, zoom: zoom.current, mode: 'snap' };
            } else {
              snapArmed.current = false;
            }
          } else if (now >= snapPauseUntil.current) {
            rotation.current.y += .0042 * dt;
          }
        }

        applySphereRotation();
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      frontCardRef.current?.classList.remove('is-front');
      frontCardRef.current = null;
    };
  }, [style.id]);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || event.button !== 0) return;

    viewTarget.current = null;
    snapArmed.current = false;
    drag.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
      lastTime: performance.now(),
      moved: false
    };
    velocity.current = { x: 0, y: 0 };
    suppressClick.current = false;
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || drag.current.pointerId !== event.pointerId) return;

    const now = performance.now();
    const dx = event.clientX - drag.current.lastX;
    const dy = event.clientY - drag.current.lastY;
    const totalDx = event.clientX - drag.current.startX;
    const totalDy = event.clientY - drag.current.startY;
    const dt = Math.max(8, now - drag.current.lastTime);

    if (!drag.current.moved && (Math.abs(totalDx) > 4 || Math.abs(totalDy) > 4)) {
      drag.current.moved = true;
      suppressClick.current = true;
      setIsDragging(true);

      if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.setPointerCapture(event.pointerId);
      }
    }

    if (!drag.current.moved) return;

    event.preventDefault();
    rotation.current.x = Math.max(-65, Math.min(65, rotation.current.x - dy * 0.18));
    rotation.current.y += dx * 0.22;

    velocity.current = {
      x: Math.max(-0.12, Math.min(0.12, (-dy * 0.18) / dt)),
      y: Math.max(-0.16, Math.min(0.16, (dx * 0.22) / dt))
    };

    drag.current.lastX = event.clientX;
    drag.current.lastY = event.clientY;
    drag.current.lastTime = now;
    lastInteraction.current = now;
    applySphereRotation();
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || drag.current.pointerId !== event.pointerId) return;

    const moved = drag.current.moved;
    drag.current.active = false;
    drag.current.pointerId = null;
    setIsDragging(false);
    lastInteraction.current = performance.now();
    snapArmed.current = moved;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (moved) {
      window.setTimeout(() => {
        suppressClick.current = false;
      }, 0);
    }
  };

  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const nextZoom = Math.max(.72, Math.min(1.34, zoom.current - event.deltaY * .00075));
    zoom.current = nextZoom;
    viewTarget.current = null;
    snapArmed.current = false;
    snapPauseUntil.current = performance.now() + 420;
    lastInteraction.current = performance.now();
    applySphereRotation();
  };

  const resetView = () => {
    velocity.current = { x: 0, y: 0 };
    snapArmed.current = false;
    viewTarget.current = {
      x: -8,
      y: nearestEquivalentAngle(0, rotation.current.y),
      zoom: 1,
      mode: 'reset'
    };
  };

  const onDoubleClick = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('.sphere-card')) return;
    event.preventDefault();
    resetView();
  };

  return (
    <section className="style-view">
      <div className="style-copy">
        <button type="button" className="back-button" onClick={onBack} aria-label="返回宇宙星图">← <span>返回宇宙</span></button>
        <div className="eyebrow">{galaxy?.subtitle ?? 'UNIVERSE'} GALAXY · PLANET {String(style.sequence).padStart(3, '0')}</div>
        <h2>{style.name}</h2>
        <p>{style.description}</p>
        <div className="style-stats">
          <b>{style.images.length}</b> 张作品 · {generatedCount} 张生成图{placeholderCount > 0 ? ' · ' + placeholderCount + ' 张占位图' : ''}
          <span className={`style-maturity maturity-badge maturity-badge-${maturity.stage}`}>{maturity.label} · {Math.round(maturity.ratio * 100)}%</span>
        </div>
        <div className="drag-hint"><span>DRAG TO ORBIT</span><i />拖动旋转 · 惯性吸附 · 滚轮缩放 · 双击空白复位</div>
      </div>

      <div
        className={`sphere-stage${isDragging ? ' is-dragging' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={onWheel}
        onDoubleClick={onDoubleClick}
      >
        <div ref={sceneRef} className="planet-scene">
          <div className="planet-body" aria-hidden="true">
            <i className="planet-atmosphere" />
            <i className="planet-surface" />
            <i className="planet-terminator" />
            <i className="planet-latitude planet-latitude-a" />
            <i className="planet-latitude planet-latitude-b" />
          </div>
          <div className="sphere-glow" />
          <div ref={sphereRef} className="sphere">
            {orderedImages.map((image, index) => {
              const [pitch, yaw] = getSpherePlacement(index, orderedImages.length);
              return (
                <button
                  key={image.id}
                  type="button"
                  className={`sphere-card ${image.dna.generation.assetType === 'generated' ? 'generated' : 'placeholder'}`}
                  data-pitch={pitch}
                  data-yaw={yaw}
                  style={{
                    transform: `rotateY(${yaw}deg) rotateX(${pitch}deg) translateZ(330px) scale(var(--card-depth-scale, 1))`
                  }}
                  aria-label={`查看作品：${image.title}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    if (suppressClick.current) return;
                    onSelect(image);
                  }}
                >
                  <img src={image.image} alt={image.title} draggable={false} loading="lazy" decoding="async" />
                  <span>{image.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageViewer({ image, onClose }: { image: MuseImage; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const copyPrompt = async () => {
    if (!image.prompt) return;

    try {
      await navigator.clipboard.writeText(image.prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return createPortal(
    <div
      className="viewer quick-viewer"
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
      onClick={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <figure className="quick-viewer-card">
        <button type="button" className="viewer-close" onClick={onClose} aria-label="关闭预览">×</button>

        <div className="quick-viewer-image">
          <img src={image.image} alt={image.title} decoding="async" />
        </div>

        <figcaption className="quick-viewer-info">
          <div className="quick-viewer-title-row">
            <strong>{image.title}</strong>
            <button
              type="button"
              className="quick-copy-button"
              onClick={copyPrompt}
              disabled={!image.prompt}
            >
              {copied ? '已复制 ✓' : '复制提示词'}
            </button>
          </div>
          <div className="quick-prompt-label">PROMPT</div>
          <p className="quick-prompt-text">{image.prompt || '未配置 Prompt'}</p>
        </figcaption>
      </figure>
    </div>,
    document.body
  );
}

export default App;
