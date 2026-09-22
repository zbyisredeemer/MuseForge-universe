# MuseForge Agent Rules

For image generation and repository updates, always follow `docs/IMAGE_ASSET_WORKFLOW.md`.

Critical rules:

- “继续 / 继续生成 / 上传到项目 / 按之前思路” means complete the full generate → WebP → upload → data update → docs update → verify workflow.
- A failed local `git clone` or `github.com` DNS lookup does **not** mean repository upload is unavailable. Prefer the GitHub connector.
- For WebP/PNG binary assets, use GitHub Git Data: base64 → create_blob → create_tree → create_commit → update_ref.
- Verify numbering, binary blob integrity, planet references, generated/placeholder status, README, and IMAGE_PIPELINE before declaring completion.
- Preserve Identity DNA diversity; avoid repeated faces across the collection.
