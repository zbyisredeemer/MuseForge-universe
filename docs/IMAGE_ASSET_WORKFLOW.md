# MuseForge Image Asset Workflow

这是项目的默认图片生产与上传 SOP。以后出现“继续生成”“继续上传”“按之前的思路”时，默认按此流程执行。

## 1. 生成规则

- 主体明确为成年人。
- 默认 9:16 竖版。
- 同一星球保持统一审美，但人物 Identity DNA 必须拉开：脸型、眼型、鼻型、唇型、年龄感、发型、肤色倾向与辨识特征尽量不同。
- 避免仅通过换衣服或换背景制造“不同人物”。
- 生成完成后优先转为高质量 WebP；当前常用规格为 941x1672。

## 2. 文件规范

命名：

```text
{planet-slug}-{NNN}.webp
```

示例：

```text
forest-muse-020.webp
hanfu-muse-011.webp
```

目录：

```text
public/images/{galaxy}/{planet}/
```

例如：

```text
public/images/nature/forest-muse/
public/images/eastern/hanfu-muse/
```

## 3. 数据同步

每批图片进入仓库后必须同步：

1. 对应的 `src/data/planets/*.ts`
2. 图片静态路径
3. Prompt / tags / DNA
4. `generation.assetType = 'generated'`
5. `generation.format = 'webp'`
6. `generation.resolution`
7. `README.md`
8. `docs/IMAGE_PIPELINE.md`

禁止出现“图片已传，但页面仍引用 placeholder”的半完成状态。

## 4. GitHub 上传策略

### 首选：GitHub 连接器

在 ChatGPT / Codex 环境中，不要把本地 `git clone` 是否能访问 github.com 当作唯一判断依据。

即使容器出现：

```text
Could not resolve host: github.com
```

只要 GitHub 连接器可用，仍应继续完成仓库写入。

### 二进制图片标准上传链路

GitHub 普通文本文件接口不适合直接写 WebP 二进制。使用：

```text
generated PNG
  -> convert WebP
  -> base64
  -> GitHub create_blob(encoding=base64)
  -> create_tree
  -> create_commit
  -> update_ref(main)
```

多个图片与数据文件尽量放进同一个 Git tree / commit，保证原子性。

### 大文件中转

如果连接器不能直接读取容器二进制：

1. 将 WebP 转为单行 base64 文本；
2. 临时上传至 Files Library；
3. `files.read` 读取 base64；
4. 调用 GitHub `create_blob(..., encoding='base64')`；
5. 完成 commit 后删除临时 Library 文件夹。

注意：本地 `git clone` 失败时，不要直接告诉用户“无法上传 GitHub”；先检查 GitHub 连接器链路。

## 5. 完整性校验

提交后至少验证：

- 编号连续，没有缺号；
- GitHub 目录中真实存在对应 WebP；
- 每张图片路径唯一；
- planet 数据中无预期外的 placeholder；
- README / IMAGE_PIPELINE 进度同步；
- 二进制 Blob SHA 与本地 Git blob SHA 一致（异常时单独重新读取/上传该文件）；
- 能运行环境时执行：

```bash
npm run validate:assets
npm run build
```

## 6. 默认执行语义

用户说：

```text
继续
继续生成
继续生产图片
上传到项目里
按之前的思路
```

默认含义为：

```text
生成当前系列下一批
-> 去同脸检查
-> WebP
-> 标准命名
-> GitHub 二进制 Blob 上传
-> 更新 planet 数据
-> 更新 README / IMAGE_PIPELINE
-> 提交 main
-> 仓库侧完整性核验
```

除非用户明确要求，否则不要只生成、不入库，也不要只上传图片、不更新数据。
