# MuseForge Universe

一个持续迭代的「美女图片宇宙」：用 Galaxy → Planet → Image DNA 管理不同场景的高质量 AI 美女写真。

## 当前版本 v0.8

项目核心风格已经固定：

> **明确成年、20～28 岁、年轻、性感、高颜值、高级写真感。**

任何 Planet、Prompt、去同脸机制和持续迭代都必须服从这个总风格。

### 当前能力

- Galaxy / Planet 浏览
- 3D 图片球与高清大图
- Prompt / Negative Prompt / Tags
- Image DNA
- Forest Muse 001～021 已全部补齐为真实 WebP（21 张）；Hanfu Muse 001～030 已全部补齐为真实 WebP（30 张）
- Hanfu Muse 001～010 已于 2026-09-24 完成新一轮成片刷新：10 张均为 941x1672、9:16 高质量 WebP，并保持原编号与静态路径
- 新增 Photography / Editorial Portrait，首批 10 张真实 WebP，作为跨场景高级人像星球
- Ocean Muse 001～010 已完成首批真实化；Ocean Muse 011～020 Batch 02 生成规格已就绪，真实 WebP 待生成入库；Snow Muse 001～020 已完成两批共 20 张真实 WebP；Tokyo Night 001～011 已全部真实化为 941x1672 WebP
- Identity DNA 去同脸
- 结构化 regeneration queue
- 全局 young-sexy beauty generation preset
- Forest 001～010 标准化生成 brief
- 固化 ChatGPT 生成 → 选图 → WebP → GitHub binary upload → 更新元数据流程

## 核心文档

- [STYLE_BIBLE](docs/STYLE_BIBLE.md)：项目最高优先级审美规则
- [IMAGE_WORKFLOW](docs/IMAGE_WORKFLOW.md)：生成并上传到 GitHub 的固定流程
- [PHOTO_ITERATION](docs/PHOTO_ITERATION.md)：持续迭代规则
- [IDENTITY_DIVERSITY](docs/IDENTITY_DIVERSITY.md)：去同脸规则
- [IMAGE_PIPELINE](docs/IMAGE_PIPELINE.md)：图片资产目录与替换规范
- [HANFU_SERIES](docs/HANFU_SERIES.md)：汉服系列风格、身份差异化与 021～030 批次规划

## 代码入口

- `src/data/generation-presets.ts`：全局风格 preset + Forest 第一批生成配置
- `src/data/identity-diversity.ts`：20～28 岁范围内的身份差异化
- `src/data/regeneration-queue.ts`：下一批应该重做哪些图片
- `src/data/planets/`：各 Planet 图片数据
- `src/data/generation/hanfu-batch-02.ts`：Hanfu 021～030 第二批 10 张真实图生成规格
- `src/data/generation/ocean-batch-02.ts`：Ocean Muse 011～020 第二批 10 张生成规格与 Identity DNA
- `src/data/generation/snow-batch-01.ts`：Snow Muse 001～010 首批生成规格与 Identity DNA
- `src/data/styles.ts`：最终数据聚合并注入全局风格

## 图片目录

```text
public/images/
├── nature/
│   ├── forest-muse/
│   ├── snow-muse/
│   └── ocean-muse/
├── eastern/
│   └── hanfu-muse/
├── urban/
└── photography/
    └── editorial-portrait/
```

统一命名：

```text
{planet-slug}-{NNN}.webp
```

## 本地运行

```bash
npm install
npm run dev
```

## 校验与构建

```bash
npm run validate
npm run build
```

`validate` 会检查：

- 图片资产；
- Identity DNA；
- regeneration queue；
- Style Bible / 年龄范围 / 全局 preset。

## 默认持续迭代顺序

1. 扩展新 Planet
2. 持续按 10 张一批补充现有 Planet
3. 对现有 Planet 做质量刷新与去同脸优化

用户说“继续”时，默认从 regeneration queue 的最高优先级开始执行。
