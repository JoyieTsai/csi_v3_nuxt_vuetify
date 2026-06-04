# 內容操作手冊

給**內容**同仁：如何改官網文字與結構化資料，並同步到 Firebase。若尚未安裝 Node 與專案，請先完成 [environment-setup.md](./environment-setup.md)。程式打包與上線見 [release-checklist.md](./release-checklist.md)。

---

## 原則

1. **真相來源**：正式站讀 Firebase；[`data/*.json`](../data/) 是編輯用本機檔，上傳後才會影響 generate 與正式站。
2. **上傳 = 整包覆蓋**：`upload:firebase` 會用整份 JSON **取代**該 collection，不是單筆 merge。務必備份、先 `--dry-run`。
3. **改完 JSON 不等於上線**：工程師需執行 `npm run generate` 並部署 `dist/`，靜態 HTML 才會更新。

---

## 本地檔與 Firebase 對照

| 本地檔 | Firebase collection |
|--------|---------------------|
| `data/staff.json` | `staff` |
| `data/leadership.json` | `leadership` |
| `data/articles.json` | `articles` |
| `data/jobs.json` | `jobs` |
| `data/public-safety.json` | `public-safety` |
| `data/justice-courts.json` | `justice-courts` |
| `data/crime-intelligence.json` | `crime-intelligence` |
| `data/capabilities.json` | `capabilities` |
| `data/testimonials.json` | `testimonials` |

---

## 標準工作流程

```text
1. 編輯 data/<collection>.json
2. npm run upload:firebase -- <collection> --dry-run
3. 確認終端機輸出的筆數、URL、無錯誤
4. npm run upload:firebase -- <collection>
5. tail -n 1 logs/firebase-uploads.jsonl   # 確認 status: success
6. 通知工程師：需要 generate + 發佈（若改動需出現在正式站）
```

### 指令範例

```bash
# 預覽（不寫入 Firebase）
npm run upload:firebase -- staff --dry-run

# 上傳單一 collection
npm run upload:firebase -- staff

# 多個 collection
npm run upload:firebase -- staff leadership

# 全部（慎用）
npm run upload:firebase -- --all

# 測試路徑（僅 articles、leadership 等 TEST_COLLECTIONS）
npm run upload:firebase:test -- articles
```

Production 上傳若腳本要求確認，依終端提示加上 `--confirm-production`（見 [`scripts/upload-to-firebase.js`](../scripts/upload-to-firebase.js)）。

### 上傳紀錄

每次上傳會追加到 `logs/firebase-uploads.jsonl`（不進 git）：

```bash
tail -n 5 logs/firebase-uploads.jsonl
tail -n 1 logs/firebase-uploads.jsonl | jq .
```

---

## 依內容類型操作

### 員工目錄（staff.json）

- 路由：`/our-staff/<uid>`（**uid** 由 employeeID、since、電話等產生，勿手動重複）
- 完整規範：[maintain-staff-data SKILL](../.cursor/skills/maintain-staff-data/SKILL.md)
- 要點：
  - 依 **firstname** 字母排序插入
  - `cover` 檔名先對照 [`leadership.json`](../data/leadership.json) 的 `src`
  - 無別名則**不要**加 `aka` 欄位
  - 新增員工後需上傳 `staff`；新頁面還需工程 **generate** 才會有靜態 HTML

### 領導／帳管介紹（leadership.json）

- 用於 About／領導區塊長文與照片
- 與 `staff.json` 可交叉參考姓名與照片，但**不必**每次改 staff 都改 leadership

### 新聞／資源（articles.json）

- 路由：`/resources/<id>`
- 內文 HTML 區塊慣例：[data/Read me.md](../data/Read%20me.md)（`## Title`、`## Image`、`## Testimonial`、`## OG meta tags` 等）
- 列表篩選標籤由 [`store/tags.js`](../store/tags.js) 定義（改標籤需工程改 code）

### 產品（public-safety、justice-courts、crime-intelligence）

- 欄位決定頁面區塊是否顯示（例如無 `sysFeatures` 就不出現 SysFeatures）
- 圖片路徑常為 `images/...`；OG 圖可能需主機上已有檔案（與 generate 分開處理）
- 修改後：upload 對應 collection → 通知 generate

### 能力服務（capabilities.json）

- 路由：`/capabilities/<id>`
- 結構類似產品頁，JSON 驅動元件

### 客戶見證（testimonials.json）

- 首頁／見證相關區塊；store 在 layout 啟動時載入

### 職缺（jobs.json）

- 與 [`pages/careers.vue`](../pages/careers.vue)、[`pages/job.vue`](../pages/job.vue) 連動
- 改職缺通常 upload `jobs` 即可；若僅靜態文案改動可能仍需 generate

---

## 測試環境（避免污染正式資料）

- `npm run dev:test` — 本機 dev 讀 test 路徑的 articles／leadership
- `npm run upload:firebase:test -- articles` — 寫入 `.../test/articles.json`
- 僅在 [`config/api.js`](../config/api.js) `TEST_COLLECTIONS` 內的 collection 有 `/test/` 前綴

練習建議：在 test 路徑改一篇 article subtitle → dry-run → test 上傳，**不要**在練習中對 production 執行 `--all`。

---

## 何時需要工程師？

完整說明與判斷流程見 [FAQ：只上傳 vs 要重新打包](./FAQ.md#upload-vs-generate)。

| 你做的事 | 是否需要 generate + 部署 |
|----------|---------------------------|
| 改 JSON 並 upload（**預設**） | **是** — 文章／產品／capability 內頁、新網址、分享預覽 |
| 只改 **既有** staff（同 uid）、職缺、資源列表等 | **可能不用** — 上傳後請工程確認；見 FAQ |
| 只在本機 `npm run dev` 看效果 | 否（dev 可讀 Firebase 或本地 JSON） |
| 改 Vue 元件、樣式、新頁面 | 是 |
| 改篩選標籤、路由、版號 | 是 |
| 上傳新圖到主機 `images/` | 依主機流程（可能與 generate 並行） |

---

## 內容軌簽核練習（交接第 2 場）

完成以下任一項即視為通過：

- [ ] **A**：在 `staff.json` 新增一筆**假資料**（註明 TEST）→ `--dry-run` → **不要**正式 upload，向講師說明 uid 如何產生
- [ ] **B**：修改某 article 的 `subtitle` → test 環境 dry-run + test upload → 說明為何還需工程 generate

---

## 相關文件

- [HANDOVER.md](./HANDOVER.md)
- [release-checklist.md](./release-checklist.md)
- [FAQ.md](./FAQ.md)
