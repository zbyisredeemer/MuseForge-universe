# Identity Diversity

MuseForge 的人物差异化服务于主审美，而不是凌驾于主审美之上。

## 第一原则

所有人物必须：

- 明确成年；
- 核心视觉年龄 20～28 岁；
- 年轻、漂亮、有女性魅力；
- 符合 `docs/STYLE_BIBLE.md` 的高级性感写真方向。

不能为了“去同脸”故意把人物做老、做普通、做纪实或做得不符合项目审美。

## 差异化维度

在 20～28 岁成年美女范围内变化：

- 脸型；
- 脸宽；
- 颧骨；
- 下颌与下巴；
- 眼型与眼距；
- 鼻型与鼻宽；
- 唇形与唇比例；
- 肤色倾向；
- 发长、发色和纹理；
- 雀斑、痣、酒窝等少量辨识特征。

## 优先级

当“颜值”和“差异度”冲突时：

1. 明确成年；
2. 年轻；
3. 高颜值；
4. 性感 / 女性魅力；
5. 真实；
6. 差异度。

差异度不能通过降低人物吸引力来获得。

## Anti-clone

最终 Prompt 会抑制：

- same face；
- cloned face；
- recurring identity；
- identical facial proportions；
- generic influencer face；
- plastic skin；
- face-swap look。

但不会抑制“年轻漂亮”本身。

## 自动校验

```bash
npm run validate:identities
npm run validate:style
```

`validate:style` 会确保年龄范围没有重新漂移到 20～28 岁之外。
