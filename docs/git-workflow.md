# Git 分支與交接工作流程

接手人請在 **`handover`** 分支上工作，**不要**直接 push 到 `master`。

---

## 為什麼？

| 分支 | 用途 |
|------|------|
| `master` | 正式／可部署的程式碼，由負責人 review 後合併 |
| `handover` | 交接練習、文件更新、小改動；透過 Pull Request 合併回 `master` |

---

## 第一次設定（接手人）

```bash
# 若已 clone，在專案根目錄：
git fetch origin
git checkout handover
git pull origin handover
```

新 clone：

```bash
git clone https://github.com/JoyieTsai/csi_v3_nuxt_vuetify.git
cd csi_v3_nuxt_vuetify
git checkout handover
```

確認目前在 handover：

```bash
git branch --show-current
# 應顯示：handover
```

---

## 日常開發流程

```bash
# 1. 開始前同步
git checkout handover
git pull origin handover

# 2. 可選：功能小分支
git checkout -b handover/your-name-topic

# 3. 修改、提交
git add .
git commit -m "描述你的變更"

# 4. 推送（只推 handover 或你的子分支）
git push -u origin handover
# 或：git push -u origin handover/your-name-topic

# 5. 在 GitHub 建立 Pull Request → 目標分支選 master
# 6. 請 Joyie（或指定 reviewer）review 後合併
```

---

## 請勿做的事

- 不要 `git push origin master`
- 不要在 `master` 上直接 commit（除非你是 repo 維護者且團隊允許）
- 不要 force push 到 `master`

若誤在 master 上改了東西：

```bash
git stash
git checkout handover
git stash pop
# 在 handover 上 commit
```

---

## 維護者（Joyie）

- Review 來自 `handover`（或子分支）的 PR，確認後 merge 到 `master`
- 可在 GitHub **Settings → Branches** 為 `master` 啟用 branch protection（要求 PR、禁止直接 push）
- 交接結束後，可將 `handover` 與 `master` 同步：`git checkout handover && git merge master`

---

## 相關文件

- [HANDOVER.md](./HANDOVER.md)
- [environment-setup.md](./environment-setup.md)
