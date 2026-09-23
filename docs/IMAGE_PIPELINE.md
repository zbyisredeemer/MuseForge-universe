# MuseForge Real Image Pipeline

> 所有真实图片生成必须先遵循 [STYLE_BIBLE](STYLE_BIBLE.md)：明确成年、20～28 岁、年轻、性感、高颜值、高级写真感。

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

> v0.5 起，生成真实图时必须保留最终 Prompt 中自动注入的 Identity DNA，不要只复制原始场景描述。详见 `docs/IDENTITY_DIVERSITY.md`。


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
| 005 | 野花林隙 | ✅ Generated | `forest-muse-005.webp` |
| 006 | 雾松 | ✅ Generated | `forest-muse-006.webp` |
| 007 | 月夜森林 | ✅ Generated | `forest-muse-007.webp` |
| 008 | 金叶暮光 | ✅ Generated | `forest-muse-008.webp` |
| 009 | 雨后木桥 | ✅ Generated | `forest-muse-009.webp` |
| 010 | 溪边白衫 | ✅ Generated | `forest-muse-010.webp` |
| 011 | 秋林风衣 | ✅ Generated | `forest-muse-011.webp` |
| 012 | 薄雾针叶林 | ✅ Generated | `forest-muse-012.webp` |
| 013 | 林间逆光 | ✅ Generated | `forest-muse-013.webp` |
| 014 | 野莓灌木 | ✅ Generated | `forest-muse-014.webp` |
| 015 | 古树根系 | ✅ Generated | `forest-muse-015.webp` |
| 016 | 雾林读书 | ✅ Generated | `forest-muse-016.webp` |
| 017 | 林中长椅 | ✅ Generated | `forest-muse-017.webp` |
| 018 | 溪畔采花 | ✅ Generated | `forest-muse-018.webp` |
| 019 | 暮林灯影 | ✅ Generated | `forest-muse-019.webp` |
| 020 | 暮色林缘 | ✅ Generated | `forest-muse-020.webp` |

当前 Forest Muse 真实化进度：**20 / 20（100%）**。

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

Forest Muse 与 Hanfu Muse 均已完成 **20 / 20**。下一阶段按以下顺序推进：

```text
Tokyo Night
Snow Muse
Ocean Muse
```

后续新增真实图片继续遵循 Identity DNA 去同脸规则与标准 WebP 资产目录。


## Hanfu Muse 替换进度

| 编号 | 标题 | 状态 | 标准文件 |
| --- | --- | --- | --- |
| 001 | 竹庭晨雾 | ✅ Generated | `hanfu-muse-001.webp` |
| 002 | 锦鲤夕照 | ✅ Generated | `hanfu-muse-002.webp` |
| 003 | 桃花春水 | ✅ Generated | `hanfu-muse-003.webp` |
| 004 | 书斋兰影 | ✅ Generated | `hanfu-muse-004.webp` |
| 005 | 长安夜市 | ✅ Generated | `hanfu-muse-005.webp` |
| 006 | 雪宫红裳 | ✅ Generated | `hanfu-muse-006.webp` |
| 007 | 荷风玉色 | ✅ Generated | `hanfu-muse-007.webp` |
| 008 | 秋山旅人 | ✅ Generated | `hanfu-muse-008.webp` |
| 009 | 月满江亭 | ✅ Generated | `hanfu-muse-009.webp` |
| 010 | 宫阙灯影 | ✅ Generated | `hanfu-muse-010.webp` |
| 011 | 雨夜青伞 | ✅ Generated | `hanfu-muse-011.webp` |
| 012 | 雪梅暗香 | ✅ Generated | `hanfu-muse-012.webp` |
| 013 | 月下琵琶 | ✅ Generated | `hanfu-muse-013.webp` |
| 014 | 金阙夕照 | ✅ Generated | `hanfu-muse-014.webp` |
| 015 | 烟波湖亭 | ✅ Generated | `hanfu-muse-015.webp` |
| 016 | 灯市绯影 | ✅ Generated | `hanfu-muse-016.webp` |
| 017 | 丝路长风 | ✅ Generated | `hanfu-muse-017.webp` |
| 018 | 花月同春 | ✅ Generated | `hanfu-muse-018.webp` |
| 019 | 翡翠浴阁 | ✅ Generated | `hanfu-muse-019.webp` |
| 020 | 凤仪宫灯 | ✅ Generated | `hanfu-muse-020.webp` |

当前 Hanfu Muse 真实化进度：**20 / 20（100%）**。

本批次在保持成年人、东方古典审美和写实摄影质感的前提下，提高了服装剪裁、露肩、薄纱、腰线和姿态中的女性魅力表达，同时继续执行 Identity DNA 去同脸规则。
