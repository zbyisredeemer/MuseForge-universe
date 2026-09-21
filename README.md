# MuseForge Universe

一个持续迭代的「美女图片提示词宇宙」。风格不是列表，而是宇宙中的星点；点击星点进入风格星球，通过可旋转的 3D 图片球浏览作品，并查看每张图的生成 Prompt。

## 当前版本 v0.1

- 宇宙 / 星系首页
- 风格星点悬浮名称
- 首个风格：**森林系美女 / Forest Muse**
- 点击星点进入 3D 图片球
- 拖动旋转图片球
- 点击图片查看高清大图
- Prompt / Negative Prompt / 标签
- 一键复制 Prompt
- 首批 8 张 2160×3840 SVG 视觉样图，可无损缩放至 4K 及以上
- Vite + React + TypeScript，可直接部署到 Vercel

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## Vercel

导入 GitHub 仓库即可。Vercel 会自动识别 Vite：

- Build Command: `npm run build`
- Output Directory: `dist`

## 如何新增一个风格

1. 在 `src/data/styles.ts` 增加一条 `MuseStyle`
2. 配置星点坐标 `star.x / star.y`
3. 图片可以使用 `/public` 静态资源、CDN URL 或生成的 data URI
4. 为每张图补充 `prompt`、`negativePrompt`、`tags`

页面本身不需要再改。

## 下一阶段建议

- 用真实 AI 生成的 4K 写实图片替换当前 SVG 首发视觉样图
- 增加赛博朋克、东方古典、海岛、雪原、都市夜景、法式复古等风格星点
- Prompt 参数结构化：人物 / 国家地区 / 发型 / 服装 / 光线 / 镜头 / 姿势 / 场景 / 色调
- 搜索与风格筛选
- 收藏与 Prompt 变体
- 社区投稿与 PR 自动校验
