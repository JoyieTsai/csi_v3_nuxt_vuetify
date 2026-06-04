# 發佈檢查清單

正式發佈與測試發佈前後使用本清單。部署至 `www.csitech.com` 的細節需由團隊補齊（見下方「部署與回滾 SOP」）。

---

## 角色分工（RACI 範本）

| 步驟 | 內容編輯 | 前端工程師 | 簽核人 |
|------|----------|------------|--------|
| 編輯 `data/*.json` | R/A | C | — |
| `upload:firebase` | R/A | 可代操作 | 內容或工程 |
| 遞增 `GENERATE_VERSION` | — | R/A | 工程 |
| `npm run generate` | — | R/A | 工程 |
| 檢查 `dist/` 與 meta | C | R/A | 工程 |
| 部署至正式主機 | — | R/A | 工程 + 簽核 |
| 煙霧測試 | C | R/A | 全員 |

（R = 負責執行，A = 最終責任，C = 諮詢）

---

## 發佈前（內容）

- [ ] 變更已寫入對應的 `data/<collection>.json`
- [ ] JSON 語法正確（可用編輯器驗證或 `node -e "JSON.parse(require('fs').readFileSync('data/staff.json'))"`）
- [ ] 已執行 `npm run upload:firebase -- <collection> --dry-run` 並確認筆數、URL
- [ ] 正式上傳：`npm run upload:firebase -- <collection>`（production 必要時加 `--confirm-production`，見腳本說明）
- [ ] 已查閱 `logs/firebase-uploads.jsonl` 最新一筆 `status: success`
- [ ] 若僅改測試資料：`upload:firebase:test` 且確認 collection 在 `TEST_COLLECTIONS` 內（預設 `articles`, `leadership`）

---

## 發佈前（工程）

- [ ] `git status` 已確認要發佈的程式碼版本（tag 或 commit 記錄在發佈紀錄）
- [ ] 決定打包類型：**正式版**（`CSI` 前綴）或 **測試版**（`Test` 前綴）
- [ ] 已將 [`nuxt.config.js`](../nuxt.config.js) 的 `GENERATE_VERSION` minor +1，前綴正確（例：`CSI-V10.5` → `CSI-V10.6`）
- [ ] Node **18**、依賴已安裝（`npm install` 或 `--legacy-peer-deps`）
- [ ] 網路可連 Firebase（generate 會拉動態路由）
- [ ] 執行指令：
  - 測試：`npm run generate:test`
  - 正式：`npm run generate` 或 `npm run generate:prod`
- [ ] `dist/` 下出現新目錄，格式：`dist/CSI-V10.x-MMDDYYYY` 或 `dist/Test-V10.x-MMDDYYYY`
- [ ] 抽樣開啟 HTML，確認含 `og:title` / `og:image`（inject-meta 已跑；見 generate hook）
- [ ] `npm run lint` 無 blocking error（或已記錄已知 warning）

---

## 部署與回滾 SOP

> **請團隊補齊以下欄位。** Repo 內不含正式主機操作細節，交接時務必填寫並限制存取權限。

### 部署（正式站）

| 項目 | 填寫 |
|------|------|
| 正式網址 | `https://www.csitech.com` |
| 部署方式 | ☐ FTP ☐ SFTP ☐ rsync ☐ CI/CD（名稱：________） ☐ 其他：________ |
| 本機產物路徑 | `dist/CSI-V{major}.{minor}-MMDDYYYY/`（整包上傳或同步至 web root） |
| 遠端 web root | ________________________ |
| 帳號保管人 | ________________________ |
| 部署指令／步驟 | 1. ________________________<br>2. ________________________<br>3. ________________________ |
| 預估耗時 | ________________________ |
| 維護視窗／通知 | ________________________ |

### 測試／預覽（可選）

| 項目 | 填寫 |
|------|------|
| 測試 URL 或本機預覽方式 | ________________________ |
| 測試版 dist 目錄 | `dist/Test-V10.x-MMDDYYYY/` |
| 是否與正式站共用主機 | ☐ 是 ☐ 否 |

### 靜態資源（圖片、brochure）

| 項目 | 填寫 |
|------|------|
| 產品封面、新聞圖等路徑 | 站內多為 `/images/...`（OG 常指向 `https://www.csitech.com/images/...`） |
| 圖片上傳方式 | ________________________ |
| 與本次 generate 是否需同步 | ☐ 僅 HTML/CSS/JS ☐ 含新圖片 |

### 回滾

| 項目 | 說明 |
|------|------|
| 保留上一版 dist | 發佈前將上一個 `dist/CSI-V*-日期` 資料夾複製到安全位置（或標記 git tag / 發佈紀錄表） |
| 回滾步驟 | 1. 停止或通知維護<br>2. 將上一版 dist 重新部署至 web root<br>3. 驗證煙霧測試 |
| Firebase 回滾 | upload 為整包覆蓋；需從 git 或備份還原 JSON 後重新 `upload:firebase` |
| 聯絡人 | 工程：________　主機：________ |

---

## 發佈後（煙霧測試）

- [ ] 首頁載入、主導覽連結正常
- [ ] 各抽 1 條動態路由：
  - [ ] 產品頁（例 `/public-safety/<id>`）
  - [ ] 資源文章（`/resources/<id>`）
  - [ ] 員工頁（`/our-staff/<uid>`）
- [ ] Footer、社群連結
- [ ] 表單頁：`/contact`、`/job`（若依賴外部 API，確認 endpoint 仍有效）
- [ ] 分享預覽（Slack / LinkedIn）：標題與縮圖符合預期
- [ ] Google Analytics（`vue-gtag`）是否仍收到流量（可選）

---

## 發佈紀錄（建議每次填寫）

| 欄位 | 值 |
|------|-----|
| 日期 | |
| GENERATE_VERSION | |
| dist 目錄 | |
| Git commit | |
| Firebase 上傳 collections | |
| 部署執行人 | |
| 煙霧測試人 | |
| 備註 | |

---

## 相關文件

- [HANDOVER.md](./HANDOVER.md) — 架構與指令總覽
- [content-operations.md](./content-operations.md) — JSON 與 Firebase 上傳
- [../.cursor/rules/static-generate.mdc](../.cursor/rules/static-generate.mdc) — 版號與 generate 規則
