# MuseForge Image Generation & Upload Workflow

这是一条固定生产流水线。后续用户只需要说“继续”，默认执行本流程，不重新讨论项目方向。

## 1. 选择批次

默认每轮处理 4～10 张。

优先级：

1. SVG / 占位图片；
2. 不符合年轻性感主风格的旧图；
3. 明显同脸或低质量图；
4. 新增 Planet 内容位。

## 2. 读取配置

生成前读取：

- `docs/STYLE_BIBLE.md`
- `src/data/generation-presets.ts`
- 对应 Planet 数据
- 当前 regeneration queue

全局风格不能被单张图片 Prompt 覆盖。

## 3. 生成候选图

每张图默认生成多个候选，而不是第一张就直接入库。

生成约束：

- 明确成年，20～28 岁；
- 年轻、性感、高颜值；
- tasteful sensuality；
- 写实、高级写真；
- 9:16；
- 最终长边目标至少 2048 px；
- 每张仍需场景、服装、发型、姿势变化。

## 4. 选图

候选图按 Style Bible 的 100 分制选择。

必须先满足：

- 年轻；
- 好看；
- 性感；
- 明确成年；
- 身体结构和手部正常；
- 场景与 Prompt 一致。

再考虑去同脸。

未达到 80 分不上传。

## 5. 图片标准化

最终资产：

```text
public/images/{galaxy}/{planet}/{planet}-{NNN}.webp
```

默认：

- WebP；
- 9:16；
- 长边 >= 2048 px（原图不足时不虚假标记 4K）；
- 保持高质量压缩；
- 不带文字、Logo、水印。

## 6. ChatGPT → GitHub 二进制上传固定流程

由于 GitHub Contents 文本写接口不适合图片二进制，图片统一走 Git Data API：

### Step A：拿到最终图片字节

生成并选定候选图后，将最终图片转换成 WebP，并取得文件 bytes。

### Step B：创建 binary blob

对 WebP bytes 做 base64 编码，然后调用 GitHub blob 创建接口：

```text
create_blob(
  repository_full_name,
  content=<base64>,
  encoding="base64"
)
```

得到 `blob_sha`。

### Step C：读取 main 当前 commit / tree

获取 `main` 当前 HEAD commit SHA 以及 base tree SHA。

### Step D：创建新 tree

在现有 base tree 上添加或替换图片：

```text
{
  path: "public/images/nature/forest-muse/forest-muse-005.webp",
  mode: "100644",
  type: "blob",
  sha: blob_sha
}
```

### Step E：创建 commit

使用新 tree SHA 与当前 main HEAD 作为 parent 创建 commit。

### Step F：移动 main ref

使用 fast-forward 更新 `main` 到新 commit SHA。

### Step G：更新文本元数据

图片 binary commit 完成后重新读取最新文件 SHA，再更新：

- Planet Prompt；
- DNA；
- title / tags；
- generation resolution；
- regeneration queue stage。

不要用旧 SHA 更新文本文件。

## 7. 入库后验证

执行：

```bash
npm run validate
npm run build
```

并人工检查：

- 页面是否显示新 WebP；
- 图片是否清晰；
- 图片和标题/Prompt 是否一致；
- 移动端裁剪是否正常；
- 是否符合 Style Bible。

## 8. 队列状态

统一状态：

- `candidate-needed`：需要生成；
- `candidate-review`：已有候选待选；
- `approved`：候选已选定；
- `replaced`：已上传并替换完成。

## 9. “继续”的默认含义

用户说“继续”时：

1. 读取当前 queue；
2. 选最高优先级未完成项；
3. 按 Style Bible 生成；
4. 选图；
5. 上传 WebP；
6. 更新元数据和 queue；
7. 进入下一项。

除非用户主动修改方向，否则不再重新设计项目审美。
