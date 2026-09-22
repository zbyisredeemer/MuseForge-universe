import { MouseEvent as ReactMouseEvent, PointerEvent, useMemo, useRef, useState } from 'react';
import { getGalaxyById, styles } from './data/styles';
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
        <div className="topbar-meta">PROMPT CONSTELLATION · v0.3</div>
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
    return Array.from({ length: 180 }, (_, index) => ({
      id: index,
      left: `${rand() * 100}%`,
      top: `${rand() * 100}%`,
      size: 0.6 + rand() * 2.1,
      opacity: 0.2 + rand() * 0.75,
      delay: `${rand() * 5}s`
    }));
  }, []);

  return (
    <div className="universe-bg" aria-hidden="true">
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />
      <div className="galaxy-band" />
      {stars.map((star) => (
        <i key={star.id} className="dust-star" style={{ left: star.left, top: star.top, width: star.size, height: star.size, opacity: star.opacity, animationDelay: star.delay }} />
      ))}
    </div>
  );
}

function Universe({ onOpen }: { onOpen: (style: MuseStyle) => void }) {
  return (
    <section className="universe-view">
      <div className="hero-copy">
        <div className="eyebrow">EXPLORE VISUAL STYLES AS STARS</div>
        <h1>每一颗星，<br />都是一种美女影像风格。</h1>
        <p>悬浮识别风格，点击进入风格星球；围绕球体浏览高清影像，再拆解每张图的生成提示词。</p>
      </div>

      <div className="constellation" aria-label="风格星图">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        {styles.map((style) => (
          <button
            key={style.id}
            className="style-star"
            aria-label={`打开${style.name}`}
            style={{ left: `${style.star.x}%`, top: `${style.star.y}%`, width: style.star.size, height: style.star.size }}
            onClick={() => onOpen(style)}
          >
            <span className="star-core" />
            <span className="star-pulse" />
            <span className="star-tooltip"><b>{style.name}</b><small>{getGalaxyById(style.galaxyId)?.name ?? style.subtitle} · {style.subtitle}</small></span>
          </button>
        ))}
        <div className="hint-line"><span />{styles.length} 颗可探索星球</div>
      </div>

      <div className="universe-footer">
        <span>{new Set(styles.map((style) => style.galaxyId)).size} GALAXY ONLINE</span>
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
        <div className="drag-hint">拖动球体旋转 · 点击图片查看高清图与 Prompt</div>
      </div>

      <div className="sphere-stage" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
        <div className="sphere-glow" />
        <div className="sphere" style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}>
          {style.images.map((image, index) => {
            const [pitch, yaw] = getSpherePlacement(index, style.images.length);
            return (
              <button
                key={image.id}
                className="sphere-card"
                style={{ transform: `rotateY(${yaw}deg) rotateX(${pitch}deg) translateZ(330px)` }}
                onPointerDown={(e: PointerEvent<HTMLButtonElement>) => e.stopPropagation()}
                onClick={() => onSelect(image)}
              >
                <img src={image.image} alt={image.title} draggable={false} />
                <span>{image.title}</span>
              </button>
            );
          })}
        </div>
        <div className="planet-core"><span>{style.code}</span><small>PLANET {String(style.sequence).padStart(3, '0')}</small></div>
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
          <div className="image-meta">{image.dna.generation.resolution?.replace('x', ' × ') ?? '未知分辨率'} {image.dna.generation.format?.toUpperCase() ?? ''} · {image.dna.generation.assetType === 'generated' ? 'AI 生成图' : '视觉占位图'}</div>
        </aside>
      </div>
    </div>
  );
}

export default App;
