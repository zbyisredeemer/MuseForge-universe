import { MouseEvent as ReactMouseEvent, PointerEvent, useEffect, useMemo, useRef, useState } from 'react';
import { galaxies, getGalaxyById, styles } from './data/styles';
import type { MuseImage, MuseStyle } from './data/styles';

type View = { kind: 'universe' } | { kind: 'style'; style: MuseStyle };

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

  return (
    <main className="app-shell">
      <UniverseBackdrop />
      <header className="topbar">
        <button className="brand" onClick={() => { setView({ kind: 'universe' }); setSelected(null); }}>
          <span className="brand-mark">✦</span>
          <span>MuseForge <b>Universe</b></span>
        </button>
        <div className="topbar-meta">PROMPT CONSTELLATION · v0.5</div>
      </header>

      {view.kind === 'universe' ? (
        <Universe onOpen={(style) => setView({ kind: 'style', style })} />
      ) : (
        <StyleWorld style={view.style} onBack={() => setView({ kind: 'universe' })} onSelect={setSelected} />
      )}

      {selected && <ImageViewer image={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}

function UniverseBackdrop() {
  const stars = useMemo(() => {
    let seed = 731;
    const rand = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    return Array.from({ length: 420 }, (_, index) => ({
      id: index,
      depth: index % 4,
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

      {[0, 1, 2, 3].map((depth) => (
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

type UniverseDensityFilter = 'all' | 'complete' | 'rich';

function Universe({ onOpen }: { onOpen: (style: MuseStyle) => void }) {
  const [densityFilter, setDensityFilter] = useState<UniverseDensityFilter>('all');
  const [galaxyFilter, setGalaxyFilter] = useState<string>('all');
  const [focusedGalaxy, setFocusedGalaxy] = useState<string | null>(null);
  const [routeGalaxy, setRouteGalaxy] = useState<string | null>(null);
  const constellationRef = useRef<HTMLDivElement>(null);

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
    parallaxFrame.current = window.requestAnimationFrame(() => {
      parallaxFrame.current = null;
      applyParallax(parallaxTarget.current.x, parallaxTarget.current.y);
    });
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
      className={`universe-view${focusedGalaxy ? ' focus-mode' : ''}`}
      onPointerMove={onUniversePointerMove}
      onPointerLeave={resetParallax}
    >
      <div className="hero-copy">
        <div className="eyebrow">EXPLORE VISUAL STYLES AS STARS</div>
        <h1>每一颗星，<br />都是一种美女影像风格。</h1>
        <p>按星系探索不同风格。悬浮查看照片数量，点击星系聚焦，再进入具体风格星球浏览高清影像与 Prompt DNA。</p>

        <div className="universe-controls" aria-label="宇宙筛选">
          <div className="control-row control-density">
            <span className="control-label">显示</span>
            {([
              ['all', '全部'],
              ['complete', '高完成度'],
              ['rich', '10+ 照片']
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
            <span className="control-label">星系</span>
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
            <span><i className="legend-dot legend-color" />颜色 = 星系</span>
            <span><i className="legend-dot legend-size" />大小 = 照片数</span>
            <span><i className="legend-dot legend-bright" />亮度 = 完成度</span>
          </div>
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
                !isDormant ? `completion-${getCompletionTier(completionRatio)}` : ''
              ].filter(Boolean).join(' ')}
              data-galaxy={galaxy.id}
              style={{ left: `${anchor.x}%`, top: `${anchor.y}%` }}
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
          const completionRatio = getCompletionRatio(style);
          const isVisible = visibleStyleIds.has(style.id);
          const previewImages = getPreviewImages(style);
          const tooltipDirection = position.x > 72 ? 'tooltip-left' : 'tooltip-right';

          return (
            <button
              key={style.id}
              className={[
                'style-star',
                `completion-${getCompletionTier(completionRatio)}`,
                focusedGalaxy === style.galaxyId ? 'focus-star' : '',
                tooltipDirection,
                isVisible ? '' : 'filtered-out'
              ].filter(Boolean).join(' ')}
              data-galaxy={style.galaxyId}
              aria-hidden={!isVisible}
              tabIndex={isVisible ? 0 : -1}
              aria-label={`打开${style.name}，共${style.images.length}张照片`}
              style={{ left: `${position.x}%`, top: `${position.y}%`, width: starSize, height: starSize }}
              onClick={() => isVisible && onOpen(style)}
              onPointerEnter={() => !focusedGalaxy && setRouteGalaxy(style.galaxyId)}
              onPointerLeave={() => !focusedGalaxy && setRouteGalaxy(null)}
            >
              <span className="star-core" />
              <span className="star-pulse" />
              <span className="star-tooltip">
                <span className="star-preview-strip" aria-hidden="true">
                  {previewImages.map((image) => (
                    <span key={image.id} className="star-preview-thumb">
                      <img src={image.image} alt="" loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="star-tooltip-copy">
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
            ? `${filteredStyles.length} 颗风格星球 · 点击进入`
            : `${filteredStyles.length} / ${styles.length} 颗星可见 · 靠近星系查看航线`}
        </div>
      </div>

      <div className="universe-footer">
        <span>{galaxies.length} GALAXY · {new Set(styles.map((style) => style.galaxyId)).size} ACTIVE</span>
        <span>{styles.length} PLANET ONLINE</span>
        <span>{styles.reduce((total, style) => total + style.images.length, 0)} MUSES · PROMPT DNA</span>
      </div>
    </section>
  );
}

function StyleWorld({ style, onBack, onSelect }: { style: MuseStyle; onBack: () => void; onSelect: (image: MuseImage) => void }) {
  const galaxy = getGalaxyById(style.galaxyId);
  const generatedCount = style.images.filter((image) => image.dna.generation.assetType === 'generated').length;
  const placeholderCount = style.images.length - generatedCount;
  const orderedImages = useMemo(
    () => [...style.images].sort((a, b) => Number(b.dna.generation.assetType === 'generated') - Number(a.dna.generation.assetType === 'generated')),
    [style.images]
  );
  const [rotation, setRotation] = useState({ x: -8, y: 0 });
  const drag = useRef({ active: false, x: 0, y: 0, startX: 0, startY: 0 });

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    drag.current = { active: true, x: rotation.x, y: rotation.y, startX: event.clientX, startY: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const dx = event.clientX - drag.current.startX;
    const dy = event.clientY - drag.current.startY;
    setRotation({ x: Math.max(-65, Math.min(65, drag.current.x - dy * 0.18)), y: drag.current.y + dx * 0.22 });
  };
  const onPointerUp = () => { drag.current.active = false; };

  return (
    <section className="style-view">
      <div className="style-copy">
        <button className="back-button" onClick={onBack}>← 返回宇宙</button>
        <div className="eyebrow">{galaxy?.subtitle ?? 'UNIVERSE'} GALAXY · PLANET {String(style.sequence).padStart(3, '0')}</div>
        <h2>{style.name}</h2>
        <p>{style.description}</p>
        <div className="style-stats"><b>{style.images.length}</b> 张作品 · {generatedCount} 张生成图{placeholderCount > 0 ? ' · ' + placeholderCount + ' 张占位图' : ''}</div>
        <div className="drag-hint">拖动球体旋转 · 真实图优先 · 点击图片查看高清图与 Prompt</div>
      </div>

      <div className="sphere-stage" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
        <div className="sphere-glow" />
        <div className="sphere" style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}>
          {orderedImages.map((image, index) => {
            const [pitch, yaw] = getSpherePlacement(index, orderedImages.length);
            return (
              <button
                key={image.id}
                className={`sphere-card ${image.dna.generation.assetType === 'generated' ? 'generated' : 'placeholder'}`}
                style={{ transform: `rotateY(${yaw}deg) rotateX(${pitch}deg) translateZ(330px)` }}
                onPointerDown={(e: PointerEvent<HTMLButtonElement>) => e.stopPropagation()}
                onClick={() => onSelect(image)}
              >
                <img src={image.image} alt={image.title} draggable={false} loading="lazy" decoding="async" />
                <span>{image.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ImageViewer({ image, onClose }: { image: MuseImage; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const copyPrompt = async () => {
    await navigator.clipboard.writeText(image.prompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className="viewer" role="dialog" aria-modal="true" aria-label={image.title} onMouseDown={(e: ReactMouseEvent<HTMLDivElement>) => { if (e.currentTarget === e.target) onClose(); }}>
      <div className="viewer-panel">
        <button className="viewer-close" onClick={onClose}>×</button>
        <div className="viewer-image-wrap">
          <img src={image.image} alt={image.title} />
          <a href={image.image} target="_blank" rel="noreferrer" className="open-original">查看原图 ↗</a>
        </div>
        <aside className="prompt-panel">
          <div className="eyebrow">PROMPT DNA</div>
          <h3>{image.title}</h3>
          <div className="tag-row">{image.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <label>Prompt</label>
          <p className="prompt-text">{image.prompt}</p>
          <button className="copy-button" onClick={copyPrompt}>{copied ? '已复制 ✓' : '复制 Prompt'}</button>
          <details>
            <summary>Negative Prompt</summary>
            <p>{image.negativePrompt}</p>
          </details>
          {image.dna.subject.identityId && (
            <details open>
              <summary>Identity DNA · {image.dna.subject.identityId}</summary>
              <p>
                {[
                  image.dna.subject.ageBand && `年龄 ${image.dna.subject.ageBand}`,
                  image.dna.subject.face?.shape && `脸型 ${image.dna.subject.face.shape}`,
                  image.dna.subject.face?.skinTone && `肤色 ${image.dna.subject.face.skinTone}`,
                  image.dna.subject.face?.eyeShape && `眼型 ${image.dna.subject.face.eyeShape}`,
                  image.dna.subject.face?.noseShape && `鼻型 ${image.dna.subject.face.noseShape}`,
                  image.dna.subject.face?.lipShape && `唇型 ${image.dna.subject.face.lipShape}`,
                  image.dna.subject.hair?.join(' / ')
                ].filter(Boolean).join(' · ')}
              </p>
            </details>
          )}
          <div className="image-meta">{image.dna.generation.resolution?.replace('x', ' × ') ?? '未知分辨率'} {image.dna.generation.format?.toUpperCase() ?? ''} · {image.dna.generation.assetType === 'generated' ? 'AI 生成图' : '视觉占位图'}</div>
        </aside>
      </div>
    </div>
  );
}

export default App;
