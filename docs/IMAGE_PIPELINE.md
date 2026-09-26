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

Hanfu Muse 当前 active 真实图为 **30 / 30**；021～030 Batch 02 已完成真实 WebP 入库并加入前台。Forest Muse 当前也有 6 个待补槽位；本轮用户明确要求完善 Hanfu 时，优先处理 Hanfu。

```text
扩展新 Planet
继续按 10 张一批补充现有 Planet
现有 Planet 质量刷新与去同脸优化
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
- Tokyo Night：001 已替换为真实 WebP，002～004 仍为 SVG placeholder；Ocean Muse 001～010 已完成首批真实化；Snow Muse 仍待真实化；
- Hanfu 006 / 015 / 017 已按原编号补回，regeneration queue 标记为 replaced。


## Hanfu Batch 02 生成队列

- 规格文件：`src/data/generation/hanfu-batch-02.ts`
- 编号：021～030
- 数量：10 张
- 状态：021～030 已完成真实 WebP 并加入 `hanfuMuse.images`
- 身份：每张独立 ageBand / face / hair / distinctive features
- 摄影：35mm / 50mm / 70mm / 85mm 轮换，半身 / 三分之二身 / 全身 / 环境人像轮换
- 主题：宋制、唐制、明制、魏晋风、敦煌、骑装/丝路灵感

下一次继续生成时，优先顺序：

1. 扩展新的 Planet；
2. 持续按 10 张一批补充现有 Planet；
3. 现有 Planet 做质量刷新与去同脸优化；
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


## 2026-09-24 Ocean Muse Batch 01

- Ocean Muse 首批真实化完成：`ocean-muse-001.webp` ～ `ocean-muse-010.webp`；
- 10 张均由生成原图裁切并转换为 941x1672、9:16 高质量 WebP；
- 静态目录：`public/images/nature/ocean-muse/`；
- `src/data/planets/ocean-muse.ts` 已从 4 个 SVG placeholder 扩展为 10 个真实图片条目；
- 所有条目同步 Prompt / tags / DNA，且 `generation.assetType = 'generated'`、`format = 'webp'`、`resolution = '941x1672'`；
- 图片主题覆盖礁岸海风、白沙晴湾、港湾金潮、浪花礁影、海崖露台、潮线漫步、蓝白海巷、游艇晴航、珍珠秘湾、无边海池；
- 下一步真实化优先处理 Tokyo Night 002～004 与 Snow Muse。


## 2026-09-24 Snow Muse Batch 01 生成规格

- 已新增生成规格：`src/data/generation/snow-batch-01.ts`；
- 目标编号：`snow-muse-001.webp` ～ `snow-muse-010.webp`，固定 10 张；
- 最终规格统一为 941x1672、9:16、高质量 WebP；
- 场景覆盖初雪晨光、冰湖蓝影、风雪红围巾、雪夜灯火、雪松长靴、冰屋暖光、雪站月台、极光雪原、雪屋咖啡、冰瀑银影；
- 每张已配置独立 ageBand / face / hair / distinctiveFeatures，继续执行 Identity DNA 去同脸规则；
- 风格继续遵循 Style Bible：明确成年、20～28 岁、年轻、高颜值、高级性感、写实冬季时尚写真；
- 当前状态：生成规格已就绪，真实 WebP 尚未入库；在真实图片完成前不把 005～010 提前加入 `snowMuse.images`，也不把 placeholder 标记为 generated；
- 成片完成后按 `IMAGE_ASSET_WORKFLOW.md` 执行：WebP → base64 → create_blob → create_tree → create_commit → update_ref(main)，并同步 `snow-muse.ts`、README 与本 Pipeline。


## 2026-09-24 Snow Muse Batch 01 完成记录

- Snow Muse 首批真实化完成：`snow-muse-001.webp` ～ `snow-muse-010.webp`；
- 静态目录：`public/images/nature/snow-muse/`；
- 10 张最终尺寸统一为 **941x1672**，比例 **9:16**，格式 **WebP**；
- `src/data/planets/snow-muse.ts` 已由 4 个 SVG placeholder 扩展为 10 个真实图片条目，并同步 Prompt / tags / DNA；
- 所有条目均设置 `generation.assetType = 'generated'`、`format = 'webp'`、`resolution = '941x1672'`；
- GitHub 返回的 10 个图片 Blob SHA 与本地 Git blob SHA 逐张一致，二进制完整性已核验；
- 本批实际成片视觉以雪山木屋、湖景、象牙白针织/绒衣、红色或奶油色围巾、冬日金色光线为核心；后续质量迭代重点提升人物脸型、服装、构图与场景差异度。


## 2026-09-24 Snow Muse Batch 02 生成规格

- 已新增生成规格：`src/data/generation/snow-batch-02.ts`；
- 目标编号：`snow-muse-011.webp` ～ `snow-muse-020.webp`，固定 10 张；
- 最终资产继续统一为 **941x1672 / 9:16 / WebP**；
- 本批重点拉开 Batch 01 的同质化：冰蓝酒店露台、雪镇夜街、玻璃冰屋、缆车站、冰河木桥、雪夜温泉、雪地摩托、壁炉雪窗、酒红雪林、极昼冰湾；
- 每张均配置独立 ageBand / face / hair / distinctiveFeatures，继续执行 Identity DNA 去同脸；
- 性感尺度保持 tasteful sensuality：修身针织、露肩、slip dress、短外套、长靴、泳装 + 浴袍等均服务于高级冬季时尚写真，不走色情或未成年视觉；
- Snow Muse Batch 02 已完成真实 WebP 入库，`snowMuse.images` 已扩展至 001～020；
- 011～020 均已按 `IMAGE_ASSET_WORKFLOW.md` 的 binary blob 流程写入，并同步元数据。


## 2026-09-26 Tokyo Night Batch

- Tokyo Night 本批新增/真实化：`tokyo-night-002.webp` ～ `tokyo-night-011.webp`，共 10 张；
- 10 张均由本轮生成成片拆分、裁切并转换为 **941x1672 / 9:16 / WebP**；
- 静态目录：`public/images/urban/tokyo-night/`；
- `src/data/planets/tokyo-night.ts` 已扩展为 001～011 共 11 张真实图片，原 002～004 placeholder 已替换；
- 场景覆盖东京塔露台、霓虹机车、夜樱和风、都市酒廊、雨夜街头、银色夜景、涂鸦巷、湾岸大桥、酒店夜窗、霓虹露台；
- 所有新增条目均设置 `generation.assetType = 'generated'`、`format = 'webp'`、`resolution = '941x1672'`；
- 下一批默认转入 Snow Muse 011～020 Batch 02。


## 2026-09-26 Snow Muse Batch 02 完成记录

- Snow Muse 第二批完成：`snow-muse-011.webp` ～ `snow-muse-020.webp`，共 10 张；
- 10 张均由本轮生成成片拆分、裁切并转换为 **941x1672 / 9:16 / WebP**；
- 静态目录：`public/images/nature/snow-muse/`；
- `src/data/planets/snow-muse.ts` 已从 10 张扩展为 001～020 共 20 张真实图片；
- 本批实际成片主题覆盖雪帽木屋、雪坡白绒、滑雪场、灰蓝针织雪屋、雪地温泉、雪林白绒、格纹围巾雪镇、蓝色雪桥、红色针织雪夜与雪原白绒；
- 所有新增条目均设置 `generation.assetType = 'generated'`、`format = 'webp'`、`resolution = '941x1672'`；
- 图片 Blob SHA 与本地 Git blob SHA 已逐张核对一致；
- Snow Muse 当前真实图片总数：**20 张**；
- 下一批默认进入 Hanfu Muse 021～030 Batch 02。


## 2026-09-26 Hanfu Muse Batch 02 完成记录

- Hanfu Muse 第二批新增：`hanfu-muse-021.webp` ～ `hanfu-muse-030.webp`，共 10 张；
- 10 张均由本轮生成成片拆分、裁切并转换为 **941x1672 / 9:16 / WebP**；
- 静态目录：`public/images/eastern/hanfu-muse/`；
- `src/data/planets/hanfu-muse.ts` 已接入 `hanfuBatch02`，前台图片总数扩展为 001～030 共 30 张；
- 本批沿用 `src/data/generation/hanfu-batch-02.ts` 中的 Prompt / Tags / Identity DNA / Photography 规格；
- 所有新增条目均设置 `generation.assetType = 'generated'`、`format = 'webp'`、`resolution = '941x1672'`；
- 图片 Blob SHA 与本地 Git blob SHA 已逐张核对一致；
- Hanfu Muse 当前真实图片总数：**30 张**。


## 2026-09-27 Ocean Muse Batch 02 生成规格

- 已新增生成规格：`src/data/generation/ocean-batch-02.ts`；
- 目标编号：`ocean-muse-011.webp` ～ `ocean-muse-020.webp`，固定 10 张；
- 最终资产继续统一为 **941x1672 / 9:16 / WebP**；
- 场景覆盖双体船日出、太平洋冲浪、圣托里尼蓝顶、巴厘岛崖池、桑给巴尔木帆船、马尔代夫水屋、火山黑沙滩、热带雨栈桥、灯塔海崖与荧光海夜滩；
- 身份覆盖 Mediterranean / East Asian / Southern European / Southeast Asian / East African / South Asian / Latina / Northern European 等方向，每张配置独立 ageBand / face / hair / distinctiveFeatures；
- 继续执行 Style Bible：明确成年、20～28 岁、年轻、高颜值、高级性感、写实海岸时尚写真；
- 当前仅完成生成规格，真实 WebP 尚未入库，因此 **不提前把 011～020 加入 `oceanMuse.images`，也不标记为 generated**；
- 成片完成后继续按 `IMAGE_ASSET_WORKFLOW.md`：WebP → base64 → create_blob → create_tree → create_commit → update_ref(main)，并同步 `ocean-muse.ts`、README 与本 Pipeline。
