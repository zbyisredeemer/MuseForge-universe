# MuseForge Real Image Pipeline

MuseForge 的内容数据已经支持 Galaxy → Planet → Image DNA。这个文档约定如何把视觉占位图稳定替换为真实 AI 生成图片。

## 目标

真实图片与 Prompt/DNA 分离管理：

- Prompt 和 DNA：`src/data/planets/*.ts`
- 图片资源：`public/images/{galaxy}/{planet}/`
- 页面只引用稳定静态路径
- 占位图可以逐张替换，不影响星球结构和其他图片

## 标准目录

```text
public/images/
└── nature/
    └── forest-muse/
        ├── forest-muse-001.webp
        ├── forest-muse-002.webp
        ├── forest-muse-003.webp
        └── forest-muse-004.webp
```

文件命名统一：

```text
{planet-slug}-{NNN}.{ext}
```

推荐图片格式优先级：

1. WebP
2. AVIF
3. JPEG / PNG

不建议把 SVG 占位文件提交到 `public/images`；当前占位图由代码生成，仅用于等待真实资产期间的视觉展示。

## 推荐生成规格

- 主体：明确成年人
- 默认比例：9:16 竖版
- 长边建议至少 2048 px
- 真实皮肤纹理，避免过度磨皮
- 优先保证手部、眼睛、头发和服装细节
- 同一星球避免重复构图、重复服装与重复光线
- 输出后优先转换为高质量 WebP

## 替换流程

以 `forest-05` 为例：

1. 根据该图片已有的 `prompt` 和 `dna` 生成真实图片。
2. 选择最终图并导出为：
   `public/images/nature/forest-muse/forest-muse-005.webp`
3. 在 `src/data/planets/forest-muse.ts` 中把：
   `image: forestArtwork(...)`
   替换为：
   `image: '/images/nature/forest-muse/forest-muse-005.webp'`
4. 更新 `generation`：
   - `assetType: 'generated'`
   - `format: 'webp'`
   - `resolution` 填真实尺寸
   - 有明确模型时补充 `model`
5. 执行：
   ```bash
   npm run validate:assets
   npm run build
   ```
6. 浏览图片详情，确认图片、Prompt、标签与 DNA 一致。

## Forest Muse 替换进度

| 编号 | 标题 | 状态 | 标准文件 |
| --- | --- | --- | --- |
| 001 | 苔光晨雾 | ✅ Generated | `forest-muse-001.webp` |
| 002 | 蕨雨 | ✅ Generated | `forest-muse-002.webp` |
| 003 | 杉林斜阳 | ✅ Generated | `forest-muse-003.webp` |
| 004 | 翡翠溪谷 | ✅ Generated | `forest-muse-004.webp` |
| 005 | 野花林隙 | ⏳ Placeholder | `forest-muse-005.webp` |
| 006 | 雾松 | ⏳ Placeholder | `forest-muse-006.webp` |
| 007 | 月夜森林 | ⏳ Placeholder | `forest-muse-007.webp` |
| 008 | 金叶暮光 | ⏳ Placeholder | `forest-muse-008.webp` |
| 009 | 雨后木桥 | ⏳ Placeholder | `forest-muse-009.webp` |
| 010 | 溪边白衫 | ⏳ Placeholder | `forest-muse-010.webp` |
| 011 | 秋林风衣 | ⏳ Placeholder | `forest-muse-011.webp` |
| 012 | 薄雾针叶林 | ⏳ Placeholder | `forest-muse-012.webp` |
| 013 | 林间逆光 | ⏳ Placeholder | `forest-muse-013.webp` |
| 014 | 野莓灌木 | ⏳ Placeholder | `forest-muse-014.webp` |
| 015 | 古树根系 | ⏳ Placeholder | `forest-muse-015.webp` |
| 016 | 晨露蕨径 | ⏳ Placeholder | `forest-muse-016.webp` |
| 017 | 林中长椅 | ⏳ Placeholder | `forest-muse-017.webp` |
| 018 | 小径回眸 | ⏳ Placeholder | `forest-muse-018.webp` |
| 019 | 雨幕深林 | ⏳ Placeholder | `forest-muse-019.webp` |
| 020 | 暮色林缘 | ⏳ Placeholder | `forest-muse-020.webp` |

当前 Forest Muse 真实化进度：**4 / 20（20%）**。

## 校验工具

```bash
npm run validate:assets
```

校验内容：

- 所有静态图片引用在 `public` 下必须真实存在；
- 静态图片路径必须符合 Galaxy / Planet / 三位数字编号规范；
- 禁止两条数据引用同一个静态图片路径；
- 输出 generated / placeholder 数量，方便观察真实化进度。

项目暂不依赖 CI 执行这项校验；在本地提交前执行即可。

## 下一批真实化顺序

Forest Muse 建议按以下顺序替换：

```text
005 野花林隙
006 雾松
007 月夜森林
008 金叶暮光
009 雨后木桥
010 溪边白衫
011 秋林风衣
012 薄雾针叶林
013 林间逆光
014 野莓灌木
015 古树根系
016 晨露蕨径
017 林中长椅
018 小径回眸
019 雨幕深林
020 暮色林缘
```

完成 Forest 20 / 20 后，再按 Hanfu → Tokyo Night → Snow → Ocean 的顺序替换其他星球。
