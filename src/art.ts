const palettes = [
  ['#06140f', '#163c28', '#89b88a', '#e7cba4'],
  ['#071711', '#1e4a32', '#84a985', '#d7b18b'],
  ['#0c1711', '#334a27', '#d1a85d', '#f0d3af'],
  ['#041813', '#0d4c40', '#61a58d', '#e7c3a0'],
  ['#11160b', '#53612a', '#d3b35b', '#f1d8bd'],
  ['#08110f', '#29433c', '#9fb5a8', '#d9b89d'],
  ['#05070d', '#15253a', '#5f7799', '#dcbba0'],
  ['#151006', '#5c421c', '#c9943e', '#edcfaa']
];

const labels = ['苔光晨雾', '蕨雨', '杉林斜阳', '翡翠溪谷', '野花林隙', '雾松', '月夜森林', '金叶暮光'];

export function forestArtwork(index: number) {
  const [bg, forest, accent, skin] = palettes[index % palettes.length];
  const label = labels[index % labels.length];
  const fireflies = Array.from({ length: 24 }, (_, j) => {
    const cx = (137 * (j + 1) + 83 * (index + 1)) % 2050 + 55;
    const cy = (211 * (j + 1) + 177 * (index + 1)) % 2500 + 260;
    const r = 10 + (j % 5) * 4;
    const opacity = 0.12 + (j % 4) * 0.08;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" opacity="${opacity}"/>`;
  }).join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="2160" height="3840" viewBox="0 0 2160 3840">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${bg}"/><stop offset="1" stop-color="#020505"/></linearGradient>
      <radialGradient id="halo" cx="50%" cy="34%" r="55%"><stop stop-color="${accent}" stop-opacity=".36"/><stop offset="1" stop-color="${forest}" stop-opacity="0"/></radialGradient>
      <linearGradient id="dress" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${forest}"/><stop offset="1" stop-color="#0b1410"/></linearGradient>
      <filter id="soft"><feGaussianBlur stdDeviation="18"/></filter>
    </defs>
    <rect width="2160" height="3840" fill="url(#sky)"/>
    <rect width="2160" height="3840" fill="url(#halo)"/>
    <path d="M0 2900 L260 830 430 2900 690 520 900 2900 1160 700 1360 2900 1660 430 1850 2900 2160 720 2160 3840 0 3840Z" fill="${forest}" opacity=".8"/>
    <path d="M0 3200 L180 1330 390 3200 620 1000 840 3200 1070 1420 1300 3200 1550 1180 1800 3200 2060 1250 2160 3200 2160 3840 0 3840Z" fill="#07100d" opacity=".78"/>
    <g fill="${accent}" filter="url(#soft)">${fireflies}</g>
    <g transform="translate(1080 2040)">
      <ellipse cx="0" cy="-530" rx="310" ry="390" fill="#16130f"/>
      <path d="M-245 -620 C-300 -860 -120 -1050 40 -1010 C245 -990 360 -820 270 -540 C220 -390 120 -285 15 -270 C-120 -280 -220 -390 -245 -620Z" fill="${skin}"/>
      <path d="M-300 -610 C-350 -940 -120 -1110 110 -1050 C310 -1000 390 -780 310 -460 C255 -620 190 -745 85 -820 C-30 -900 -175 -820 -300 -610Z" fill="#17120d"/>
      <path d="M-65 -310 C-35 -250 -30 -175 -58 -105 L-270 10 L-420 690 L420 690 L275 10 L62 -108 C35 -175 38 -250 70 -310Z" fill="${skin}"/>
      <path d="M-420 690 C-390 210 -260 -40 0 -90 C260 -40 390 210 420 690 L590 1320 L-590 1320Z" fill="url(#dress)"/>
      <path d="M-260 5 C-120 105 120 105 260 5" fill="none" stroke="${accent}" stroke-opacity=".5" stroke-width="18"/>
      <ellipse cx="-95" cy="-565" rx="22" ry="13" fill="#2c241c"/><ellipse cx="95" cy="-565" rx="22" ry="13" fill="#2c241c"/>
      <path d="M-58 -430 Q0 -392 58 -430" fill="none" stroke="#9b6d5d" stroke-width="10" stroke-linecap="round"/>
    </g>
    <text x="1080" y="3430" text-anchor="middle" fill="#f2eee6" font-size="82" font-family="Georgia,serif" letter-spacing="16">FOREST MUSE ${String(index + 1).padStart(2, '0')}</text>
    <text x="1080" y="3540" text-anchor="middle" fill="${accent}" font-size="46" font-family="sans-serif" letter-spacing="10">${label}</text>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
