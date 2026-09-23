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
- Forest Muse 当前保留 15 张符合 Style Bible 的真实 WebP；006 / 010 / 013 / 015 / 017 / 020 已删除并等待重生成；Hanfu Muse 当前保留 17 张，006 / 015 / 017 已删除并等待年轻化重生成
- 新增 Photography / Editorial Portrait，首批 10 张真实 WebP，作为跨场景高级人像星球
- Snow / Ocean / Tokyo Night 可继续真实化
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
- `src/data/generation/hanfu-batch-02.ts`：Hanfu 021～030 下一批 10 张真实图生成规格
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

1. 补回已删除的 Forest 槽位（006 / 010 / 013 / 015 / 017 / 020），按当前 Style Bible 重生成
2. 补回 Hanfu 006 / 015 / 017，统一年轻成年 + 高级性感方向
3. Tokyo Night 真实化
4. Snow Muse 真实化
5. Ocean Muse 真实化
6. 扩展新 Planet

用户说“继续”时，默认从 regeneration queue 的最高优先级开始执行。
