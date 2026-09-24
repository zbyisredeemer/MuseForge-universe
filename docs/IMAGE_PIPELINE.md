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
| 021 | 溪光花影 | ✅ Generated | `forest-muse-021.webp` |

当前 Forest Muse 001～021 已全部补齐，前台真实图片：**21 张**。

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

Hanfu Muse 当前 active 真实图为 **20 / 20**；006 / 015 / 017 已按原编号补回。Hanfu Batch 02（021～030）生成规格已经写入 `src/data/generation/hanfu-batch-02.ts`，但真实 WebP 完成前不加入前台。Forest Muse 当前也有 6 个待补槽位；本轮用户明确要求完善 Hanfu 时，优先处理 Hanfu。

```text
Tokyo Night 002～004
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

当前 Hanfu Muse active 真实图片：**20 张**。006 / 015 / 017 已完成年轻化重生成并恢复前台。

当前保留成片继续保持成年人、东方古典审美和写实摄影质感，并强调服装剪裁、露肩、薄纱、腰线和姿态中的女性魅力表达；后续补图继续执行年轻成年基线与 Identity DNA 去同脸规则。


## 2026-09-23 修复记录

- `forest-muse-005.webp` 已用新生成的 941x1672 WebP 替换，并同步 Prompt / DNA；
- `hanfu-muse-004.webp` 原损坏文件已用新的 941x1672 WebP 恢复；
- 两张资产都重新纳入正常静态资源校验。


## 2026-09-23 Forest 清理记录

- 删除不符合当前“年轻 + 高级性感”基线的 6 张旧图：006 / 010 / 013 / 015 / 017 / 020；
- 同步从 Forest Muse active images 中移除，前台不再展示；
- 保留 regeneration queue 与 Identity DNA 目标，后续按原编号重新生成更符合 Style Bible 的版本；
- 清理后 Forest Muse 当前 active 真实图片为 15 张。

## Forest 021 新增记录

- 新增 `forest-muse-021.webp`：溪光花影；
- 用户确认成片后直接入库；
- 实际分辨率：1448x1086，4:3；
- 该图作为新增资产，不覆盖语义仍需重做的 Forest 006「雾松」。


## Editorial Portrait Batch 01

- 新增 Planet：`photography / editorial-portrait`；
- 本批按“每批 10 张”规则新增 `editorial-portrait-001.webp` ～ `editorial-portrait-010.webp`；
- 所有图片统一转换为 941x1672 WebP，并写入真实静态路径；
- 该 Planet 以“年轻成年女性 + 高颜值 + 高级写真 + 跨场景编辑人像”为统一摄影语言，场景允许居家、城市夜景、未来感、书店、泳池、雪景、花田与运动空间变化；
- 后续继续以 10 张为一个批次顺延编号，优先避免近似脸型、近似构图和近似服装。


## 2026-09-23 其他 Planet 清洗记录

- Hanfu Muse：逐张复核 001～020，删除 006 / 015 / 017 三张偏成熟成片；当前 active 17 张；
- Editorial Portrait：逐张复核 001～010，当前全部符合年轻、高颜值、高级性感方向，保留 10 张；
- Tokyo Night：001 已替换为真实 WebP，002～004 仍为 SVG placeholder；Snow Muse / Ocean Muse 仍待真实化；
- Hanfu 006 / 015 / 017 已按原编号补回，regeneration queue 标记为 replaced。


## Hanfu Batch 02 生成队列

- 规格文件：`src/data/generation/hanfu-batch-02.ts`
- 编号：021～030
- 数量：10 张
- 原则：真实 WebP 完成前不加入 `hanfuMuse.images`
- 身份：每张独立 ageBand / face / hair / distinctive features
- 摄影：35mm / 50mm / 70mm / 85mm 轮换，半身 / 三分之二身 / 全身 / 环境人像轮换
- 主题：宋制、唐制、明制、魏晋风、敦煌、骑装/丝路灵感

下一次继续生成时，优先顺序：

1. Tokyo Night 002～004；
2. Snow Muse / Ocean Muse；
3. Hanfu 021～030；
4. 每完成一张就转换 WebP、校验二进制、上传并同步元数据。


## 2026-09-24 Regeneration Batch

- Forest Muse：补回 006 / 010 / 013 / 015 / 017 / 020，共 6 张；
- Hanfu Muse：补回 006 / 015 / 017，共 3 张；
- Tokyo Night：001「雨夜霓虹」由 SVG placeholder 替换为真实 WebP；
- 本批 10 张统一为 941x1672、9:16、高质量 WebP；
- Forest 当前 21 张真实图，Hanfu 当前 20 张真实图，Tokyo Night 当前 1 张真实图；
- regeneration queue 中本批 9 个补图目标已标记为 `replaced`。


## 2026-09-24 Hanfu 001～010 成片刷新

- 重新生成并替换 Hanfu Muse 001～010，共 10 张；
- 场景继续对应竹庭晨雾、锦鲤夕照、桃花春水、书斋兰影、长安夜市、雪宫红裳、荷风玉色、秋山旅人、月满江亭、宫阙灯影；
- 10 张均转换为 941x1672、9:16 高质量 WebP，沿用既有静态路径，不增加重复编号；
- 图片 Blob 通过 Files Library 单行 base64 中转 → GitHub create_blob → tree/commit 原子写入；
- GitHub 返回的 10 个 Blob SHA 与本地 Git blob SHA 逐张一致，二进制完整性已核验；
- `src/data/planets/hanfu-muse.ts` 已有对应 Prompt、路径、`format: 'webp'`、`resolution: '941x1672'` 与 `assetType: 'generated'`，本轮无需改动图片引用。
