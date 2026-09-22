# MuseForge Identity Diversity

MuseForge 不再只依赖“换场景、换衣服、换发型”来制造差异。v0.5 开始，每张图片都会在运行时获得唯一的 **Identity DNA**，目标是尽量降低同一批 AI 人像出现“同一张脸反复换衣服”的问题。

## 核心策略

每张图片分配唯一的 `identityId`，并确定性变化：

- 成人年龄段；
- 脸型；
- 肤色倾向；
- 眼型；
- 眉形；
- 鼻型；
- 唇形；
- 发型、长度、纹理与分缝；
- 雀斑、美人痣、酒窝、轻微自然不对称等辨识特征。

这些字段同时进入：

1. `dna.subject`，便于页面展示、筛选和后续推荐；
2. 最终 Prompt，直接参与真实图片生成；
3. Negative Prompt，明确抑制 cloned face / recurring identity / repeated model。

## 为什么不能只写 “different face”

生成模型非常容易收敛到一套高概率审美模板。只写 `different woman` 往往仍会得到相似的眼睛、下颌、鼻子和脸宽。

MuseForge 因此使用“结构化差异 + 唯一身份编号 + 反同脸负向约束”三层策略。

## 当前实现

`src/data/identity-diversity.ts` 会对所有 Planet 的所有图片进行全局编号：

```text
muse-face-0001
muse-face-0002
muse-face-0003
...
```

新增星球或新增图片后，不需要手工复制 Identity DNA；只要通过 `src/data/styles.ts` 注册，就会自动得到新的身份配置。

## 生成时的质量门槛

真实图片替换占位图时，应同时检查：

- 与本星球前后图片的人脸是否肉眼明显不同；
- 不只换发型，脸宽、下颌、眼距、鼻型、唇型也应变化；
- 不要连续使用完全相同的年龄感；
- 不要让所有人物都保持同一种“网红脸”比例；
- 同一批次如果出现明显 lookalike，直接淘汰并重生成；
- 场景、衣服、姿态相似时，更要提高 Identity DNA 的差异强度。

## 后续增强方向

后续可以继续增加：

- identity similarity QA：对候选图做相似度检查，只保留差异足够大的图；
- 每颗星球独立的人脸分布策略；
- 全球地域 / 国家主题与 Identity DNA 联动；
- 人脸差异热力图与重复度报告；
- 生成前自动选择与历史图片距离更远的 Identity DNA。
