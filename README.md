# MuseForge Universe

一个持续迭代的「美女图片提示词宇宙」。项目不把风格做成传统列表，而是把视觉主题组织成星系与星球；每张图片同时拥有可检索、可组合的 Prompt DNA。

## 当前版本 v0.6

- 宇宙 / 星球探索界面
- 当前上线 5 颗星球：**Forest Muse / Snow Muse / Ocean Muse / Hanfu Muse / Tokyo Night**
- 3D 图片球浏览与高清大图查看
- Prompt / Negative Prompt / 标签
- 图片级 **Prompt DNA**：人物、服装、环境、姿势、摄影、美学、生成参数
- **Galaxy → Planet → Image DNA** 分类模型
- 当前 52 个内容位：Forest 20；Hanfu 20；Snow / Ocean / Tokyo Night 各 4
- Forest Muse 已完成 **20 / 20** 真实化；Hanfu Muse 已完成 **20 / 20** 真实化；Snow / Ocean / Tokyo Night 当前仍为可替换的 SVG 视觉占位
- 已建立真实图片标准目录与 `npm run validate:assets` 资产校验流程；可用 `npm run validate` 同时执行资产与身份多样性校验
- **Identity DNA v2 去同脸机制**：当前 52 个内容位除脸型、五官、年龄感、肤色倾向与发型外，还系统变化脸宽、颧骨、下颌、下巴、眼距、鼻宽、唇比例与自然不对称\n- Forest Muse 005～020 已加入 **16 组不同地域的现代服装/材质风格参考**，只影响造型语言，不把地域标签硬绑定到固定面孔
- Forest Muse **005～020 已完成第一轮真实成片视觉审计**；同脸明显的图片进入定向重生成队列，不再全量推倒重做
- Forest `016 / 018 / 019` 的优秀差异化成片已保留，并把元数据分别对齐为 **雾林读书 / 溪畔采花 / 暮林灯影**\n- 新增 `npm run validate:identities`，自动检查 52 个结构身份签名是否重复，并校验 Forest 005～020 的地域轮换完整性
- Vite + React + TypeScript，可部署到 Vercel

## 分类架构

```text
MuseForge Universe
└── Galaxy 星系
    └── Planet 星球
        └── Image 图片
            └── Prompt DNA
                ├── subject
                ├── fashion
                ├── environment
                ├── pose
                ├── photography
                ├── aesthetics
                └── generation
```

当前规划 8 个一级星系：

- Nature / 自然
- Urban / 城市
- Eastern / 东方
- Fashion / 时尚
- Lifestyle / 生活
- Fantasy / 梦幻
- Future / 未来
- Photography / 摄影

完整分类规则、目录规范与扩展计划见 [docs/CLASSIFICATION.md](docs/CLASSIFICATION.md)。

真实图片替换流程与 Forest 20 张进度见 [docs/IMAGE_PIPELINE.md](docs/IMAGE_PIPELINE.md)。

人脸去同质化策略见 [docs/IDENTITY_DIVERSITY.md](docs/IDENTITY_DIVERSITY.md)。

图片生成、二进制上传与 GitHub 提交流程见 [docs/IMAGE_ASSET_WORKFLOW.md](docs/IMAGE_ASSET_WORKFLOW.md)。\n\n照片长期迭代与二次重生成门槛见 [docs/PHOTO_ITERATION.md](docs/PHOTO_ITERATION.md)。

## 数据结构

- `src/data/types.ts`：Galaxy、Planet、MuseImage、Image DNA 类型
- `src/data/taxonomy.ts`：一级星系与受控词表
- `src/data/identity-diversity.ts`：全局 Identity DNA 分配与 Prompt 去同脸增强
- `src/data/planets/`：每颗星球的图片、Prompt 与 DNA 数据
- `src/data/styles.ts`：聚合导出；保留 `styles` 兼容当前 UI

## 图片目录

新内容推荐使用：

```text
public/images/
├── nature/
│   ├── forest-muse/
│   ├── snow-muse/
│   └── ocean-muse/
├── urban/
├── eastern/
├── fashion/
├── fantasy/
└── future/
```

Forest 写实图片位于 `public/images/nature/forest-muse/`；Hanfu 写实图片位于 `public/images/eastern/hanfu-muse/`；新增真实图片统一遵循 Galaxy / Planet 标准目录。

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 如何新增一颗星球

1. 在 `src/data/planets/` 新建星球数据文件
2. 为星球指定 `galaxyId`、`code`、`sequence` 与星点坐标
3. 为每张图片补充 `galaxyId`、`planetId`、Prompt、标签和完整 DNA
4. 在 `src/data/styles.ts` 的 `planets` 中注册
5. 图片按 `public/images/{galaxy}/{planet}/` 规范存放

页面无需为每颗新星球单独编写展示逻辑。

## 下一阶段

当前已完成第一轮星球铺设。下一步优先把视觉占位逐步替换成真实生成图，并继续把重点星球做深：

- Forest Muse：扩展至 20 张
- Snow Muse：12 张
- Ocean Muse：12 张
- Hanfu Muse：20 张
- Jiangnan Muse：12 张
- Tokyo Night：15 张
- Hong Kong Neon：15 张
- French Vintage：15 张
- Quiet Luxury：15 张
- Elf Muse：12 张

随后增加多维筛选、全局搜索、相似推荐和基于 DNA 的 Prompt 自动拼装。
