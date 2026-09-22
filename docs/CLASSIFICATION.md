# MuseForge Universe 分类与图片 DNA 规范

MuseForge Universe 使用三层结构组织美女影像：

1. **Galaxy / 星系**：一级主题域，用来组织大类视觉世界。
2. **Planet / 星球**：具体且可辨识的视觉风格，是用户在宇宙中直接探索的单位。
3. **Image DNA / 图片 DNA**：描述单张图片的结构化属性，用于筛选、搜索、推荐和 Prompt 生成。

核心原则：**审美与场景决定星球，人物属性进入 DNA。不要用国家、发型、服装等单一属性无限拆文件夹。**

## 1. 星系规划

| Galaxy ID | 中文名 | 典型星球 |
| --- | --- | --- |
| `nature` | 自然星系 | Forest Muse、Snow Muse、Ocean Muse、Flower Muse、Desert Muse |
| `urban` | 城市星系 | Tokyo Night、Shanghai Night、Hong Kong Neon、Paris Street |
| `eastern` | 东方星系 | Hanfu Muse、Qipao Muse、Jiangnan Muse、Kimono Muse |
| `fashion` | 时尚星系 | French Vintage、Quiet Luxury、Old Money、Street Fashion |
| `lifestyle` | 生活星系 | Coffee Shop、Bookstore、Home、Campus、Office、Travel |
| `fantasy` | 梦幻星系 | Elf Muse、Fairy Muse、Goddess Muse、Mermaid Muse |
| `future` | 未来星系 | Cyberpunk、Android、Space、Hologram |
| `photography` | 摄影星系 | Film Portrait、Studio Portrait、Street Portrait、Black & White |

## 2. Planet 的判断标准

适合成为独立星球的主题应满足至少两项：

- 有稳定且明显的视觉辨识度；
- 能连续生产 10～20 张以上不重复的图片；
- 用户会主动以该风格进行浏览或搜索；
- Prompt 中存在一组相对稳定的场景、光线、服装或摄影语言组合。

例如 `Forest Muse` 适合成为星球；而“长发”“白裙”“秋天”“中国”通常只是图片属性，不单独成为星球。

## 3. Image DNA 字段

每张图片都必须保留 `galaxyId`、`planetId`、`prompt`、`tags` 和 `dna`。

DNA 分为七组：

- `subject`：人物身份、地区、外观、发型；
- `fashion`：服装、颜色、配饰；
- `environment`：场景、地点、季节、天气、时间；
- `pose`：动作与表情；
- `photography`：构图、镜头、光圈、角度、光线；
- `aesthetics`：视觉风格、情绪、色调；
- `generation`：模型、比例、分辨率、格式、资产类型。

示例：

```ts
{
  galaxyId: 'nature',
  planetId: 'forest-muse',
  dna: {
    subject: {
      gender: 'female',
      ageGroup: 'adult',
      region: 'east-asia',
      hair: ['long', 'dark']
    },
    fashion: {
      outfit: ['linen-dress'],
      colors: ['dark-green']
    },
    environment: {
      scene: 'moss-forest',
      season: 'summer',
      weather: 'mist',
      time: 'dawn'
    },
    pose: {
      action: 'standing',
      expression: 'calm'
    },
    photography: {
      composition: 'environmental-portrait',
      lens: '85mm',
      aperture: 'f/1.8',
      lighting: ['natural-light', 'volumetric-light']
    },
    aesthetics: {
      styles: ['photorealistic', 'cinematic', 'editorial'],
      mood: ['serene'],
      palette: ['emerald', 'cool-green']
    },
    generation: {
      aspectRatio: '9:16',
      resolution: '941x1672',
      format: 'webp',
      assetType: 'generated'
    }
  }
}
```

## 4. tags 与 DNA 的边界

`tags` 是给用户看的简洁标签，允许使用中文：

```ts
tags: ['晨雾', '苔藓', '自然光', '电影感']
```

`dna` 是给系统使用的规范化元数据，优先使用稳定英文 ID：

```ts
weather: 'mist'
lighting: ['natural-light', 'volumetric-light']
styles: ['cinematic']
```

后续搜索、筛选、相关推荐和 Prompt Generator 应基于 `dna`，而不是解析自由文本 `tags`。

## 5. 图片目录规范

图片目录只承担物理存储，不承担全部分类语义。

推荐最终结构：

```text
public/images/
├── nature/
│   ├── forest-muse/
│   ├── snow-muse/
│   └── ocean-muse/
├── urban/
│   ├── tokyo-night/
│   └── hong-kong-neon/
├── eastern/
│   ├── hanfu-muse/
│   └── qipao-muse/
├── fashion/
├── fantasy/
└── future/
```

当前 `public/images/forest/` 暂时保留，避免仅为目录重命名造成无意义的大量二进制变更。新增星球从新规范开始执行；后续统一迁移旧资源。

文件命名：

```text
{planet-slug}-{NNN}.webp
```

例如：

```text
forest-muse-001.webp
snow-muse-001.webp
hanfu-muse-001.webp
```

## 6. 首批内容扩展顺序

建议优先扩展到约 10 个成熟星球，而不是一次建立大量空分类：

| 星系 | 星球 | 初期目标图片数 |
| --- | --- | ---: |
| Nature | Forest Muse | 20 |
| Nature | Snow Muse | 12 |
| Nature | Ocean Muse | 12 |
| Eastern | Hanfu Muse | 20 |
| Eastern | Jiangnan Muse | 12 |
| Urban | Tokyo Night | 15 |
| Urban | Hong Kong Neon | 15 |
| Fashion | French Vintage | 15 |
| Fashion | Quiet Luxury | 15 |
| Fantasy | Elf Muse | 12 |

约 150 张图片后，再根据浏览、收藏与搜索数据决定下一批星球。

## 7. 新增图片检查清单

新增图片时至少确认：

- 图片主体为明确成年人；
- `galaxyId` 与 `planetId` 正确；
- Prompt 与实际图片语义一致；
- `dna.environment`、`dna.photography`、`dna.aesthetics` 至少有基本信息；
- `generation.aspectRatio`、`resolution`、`format` 与实际资源一致；
- `tags` 控制在 3～6 个高信息量标签；
- 同一星球内避免近似构图、近似服装和近似光线的大量重复图。

## 8. 后续产品能力

这套结构将直接支持：

- 星系 / 星球导航；
- 多维筛选；
- 全局搜索；
- 相似图片推荐；
- Prompt DNA 展示；
- Prompt 自动拼装；
- 随机灵感生成；
- 社区投稿自动校验；
- 图片质量与重复度统计。
