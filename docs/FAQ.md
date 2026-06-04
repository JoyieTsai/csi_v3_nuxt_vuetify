# 常見問題（FAQ）

---

## 環境與開發

完整安裝步驟見 [environment-setup.md](./environment-setup.md)。

### Q: `npm run dev` 開不起來或 port 不對？

- 本專案 dev port 是 **8000**，不是 Nuxt 預設 3000。見 [`nuxt.config.js`](../nuxt.config.js)。
- 需 **Node 18**。依賴問題可試：`npm install --legacy-peer-deps`。

### Q: dev 看到的內容和正式站不一樣？

- dev 可能讀 **Firebase** 或 **本地 `data/*.json` fallback**（動態頁無 generate payload 時）。
- 正式站是上次 **generate + 部署** 的靜態檔，不會自動跟 Firebase 即時同步。

---

## Firebase 與 JSON

### Q: 上傳後 dev 有變，正式站沒變？

多數情況正常：詳情頁內容與 meta 寫在靜態 HTML，需 **upload → generate → 部署**。少數列表／員工頁可能只靠 Firebase 更新，見上一題「[只上傳 vs 要打包](#upload-vs-generate)」。

### Q: `--dry-run` 做了什麼？

模擬上傳、寫 log，**不**寫入 Firebase。發佈前必做。

### Q: 不小心 upload 錯檔怎麼辦？

1. 從 git 或備份還原正確的 `data/<collection>.json`
2. 再執行 `npm run upload:firebase -- <collection>`
3. 必要時請工程重新 generate + 部署

upload 是 **整包 PUT 覆蓋**，無法只還原單一筆。

### Q: test 與 production 差在哪？

`DATA_ENV=test` 時，僅 `TEST_COLLECTIONS`（預設 `articles,leadership`）使用 URL 前綴 `/test/`。其他 collection 仍指向 production 路徑。見 [`config/api.js`](../config/api.js)。

<a id="upload-vs-generate"></a>

### Q: 什麼情況「只改 JSON + 上傳 Firebase」就好？什麼情況一定要「JSON + 上傳 + 重新打包（generate）+ 部署」？

正式站是 **靜態檔 + 瀏覽器載入後再向 Firebase 要資料** 的混合模式，不能假設「上傳就全站即時更新」。

**給內容同仁的預設規則：**

> 只要改動要出現在 **www.csitech.com**，且你不確定屬於哪一類 → 一律當成需要 **上傳 + 請工程師 generate + 部署**。  
> 只有工程師確認屬於下方「多數僅上傳」且已驗證過時，才可省略打包。

---

#### 多數情況：JSON + 上傳 + 重新打包 + 部署

| 情境 | 為什麼要打包 |
|------|----------------|
| **新增**一筆內容（新文章 `id`、新產品、新 capability、新員工 `uid`） | 新 URL 的靜態 HTML 要靠 `dynamicRoutes` 預產，沒有檔案會 404 |
| **修改既有**文章詳情 `/resources/:id` 內文、標題、分享文案等 | 頁面優先顯示 generate 時寫入的 `pageData`，上傳後仍顯示舊內容 |
| **修改既有**產品詳情（`/public-safety`、`/justice-courts`、`/crime-intelligence`） | 同上，內容烘焙在靜態頁的 payload／資料裡 |
| **修改既有** capability 詳情 `/capabilities/:id` | 同上 |
| 要更新 **社群分享預覽**（Facebook、LinkedIn 縮圖與標題） | `inject-meta-tags` 寫在靜態 HTML，只上傳 Firebase 不會改 HTML 裡的 og tag |
| 要更新 **搜尋引擎** 看到的標題／描述（檢視網頁原始碼） | 同上 |
| 上傳 **新圖片** 到 `static/images/` 或主機圖床 | 與 JSON 無關，需部署靜態檔 |
| 改 **程式**（`.vue`、`.scss`、元件）、導覽、版型 | 必須改 code + generate + 部署 |
| 改 Resources **篩選標籤**（type／product tag） | 標籤定義在 [`store/tags.js`](../store/tags.js)，不是 Firebase |

**標準流程：**

```text
編輯 data/*.json → upload:firebase → 工程師 generate → 部署 dist → 煙霧測試
```

---

#### 少數情況：可能「只 JSON + 上傳」（仍建議與工程確認）

這些頁面在訪客**重新整理**後，會用 [`layouts/default.vue`](../layouts/default.vue) 或頁面自己的 `dispatch` 從 Firebase 再拉資料，**有機會**不打包就看見變更：

| 情境 | 說明 | 注意 |
|------|------|------|
| 修改 **既有**員工資料（`/our-staff/:uid` 已存在） | 員工頁主要靠 store `getStaffByID`，無 `pageData` 鎖定 | 訪客需**硬重新整理**；書籤連結的 uid 不能改 |
| 職缺列表／單一職缺文案（`jobs`） | [`careers.vue`](../pages/careers.vue)、[`job.vue`](../pages/job.vue) 在 `mounted` 拉 `getJobs` | 若職缺頁 SEO 異常，仍要 generate |
| 資源 **列表頁** `/resources` 上的文章標題、排序 | 列表用 store `articleList`（layout 會 `getArticles`） | **單篇文章內頁**仍要打包（見上表） |
| About 等使用 **leadership／teams** 的區塊 | layout `getTeams` 拉 Firebase | 長文若在別處仍有靜態快取時，以實際頁面為準 |
| 首頁／區塊依 **testimonials、articles 列表** 的資料 | 部分區塊讀 store | 首頁輪播等寫在程式裡的內容不會因 JSON 而變 |

即使屬於上表，**分享連結預覽、原始碼 meta、新網址** 仍可能需要 generate。實務上團隊可訂「內容只負責 upload，工程定期或依 ticket 打包」。

---

#### 對照總表（依 collection）

| Collection | 只上傳（有限度） | 通常還要 generate |
|------------|------------------|-------------------|
| `articles` | 列表頁、首頁相關列表 | **文章內頁**、新文章、OG／meta |
| `public-safety` / `justice-courts` / `crime-intelligence` | — | **產品內頁**、新產品 |
| `capabilities` | — | **能力內頁**、新 capability |
| `staff` | **既有** uid 的員工頁、可能影響列表 | **新員工**（新 uid／新 URL） |
| `leadership` | About 等讀 teams 的區塊 | 視頁面是否還有靜態快取 |
| `jobs` | 職缺頁動態拉取 | 新職缺路由、SEO 需求時 |
| `testimonials` | 讀 store 的區塊 | 靜態 meta、特殊嵌入頁 |

---

#### 一頁式判斷（內容同仁）

```text
是否新增網址（新 id / 新 uid）？ ──是──→ 上傳 + 打包 + 部署
        │
        否
        ↓
是否改文章／產品／capability「內頁」？ ──是──→ 上傳 + 打包 + 部署
        │
        否
        ↓
是否在意社群分享／Google 看到的標題圖？ ──是──→ 上傳 + 打包 + 部署
        │
        否
        ↓
是否只改 staff（同 uid）或職缺、列表？ ──可能──→ 先上傳，請工程確認是否要打包
        │
        不確定 ──→ 上傳 + 打包 + 部署（最安全）
```

#### 和 dev 的差別

| 環境 | 只改 JSON（未上傳） | 上傳 Firebase | 上傳 + generate + 部署 |
|------|---------------------|---------------|---------------------------|
| `npm run dev` | 部分頁看本地 `data/` | 多數頁可看到 Firebase 最新 | 與正式站一致 |
| 正式站 www.csitech.com | — | **部分**列表／員工頁可能更新 | **全站**內容與 meta 一致 |

---

## 打包（generate）

### Q: `GENERATE_VERSION` 和 `package.json` 的 version 差別？

- **發佈版號**：`nuxt.config.js` 的 `GENERATE_VERSION`（如 `CSI-V10.6`），輸出目錄 `dist/CSI-V10.6-MMDDYYYY`。
- **package.json `1.0.0`**：與官網發佈版號無關，勿混用。

### Q: 正式版與測試版打包？

| 意圖 | GENERATE_VERSION 前綴 | 指令 |
|------|----------------------|------|
| 正式 | `CSI` | `npm run generate` |
| 測試 | `Test` | `npm run generate:test` |

細節見 [static-generate 規則](../.cursor/rules/static-generate.mdc)。

### Q: OG / Twitter 分享圖不對？

- generate 結束後會跑 `inject-meta-tags.js`。
- Firebase 或 meta 對照改過後需 **重新 generate**。
- 可單獨重跑：`npm run inject-meta dist/CSI-V10.x-MMDDYYYY`

### Q: generate 很慢或失敗？

- 需能連線 Firebase（`dynamicRoutes` 會抓全部動態路由）。
- 檢查網路、Firebase 是否可讀、本機 Node 版本。

---

## 頁面與路由

### Q: 新增 staff 後沒有 `/our-staff/xxx` 頁面？

- 確認 `staff.json` 已 upload。
- 需 **generate** 才會預產該路由靜態檔（`dynamicRoutes` 用 `uid`）。
- 確認連結使用正確 **uid**，不是 employeeID。

### Q: 產品頁某區塊不見了？

JSON 欄位驅動顯示。例如沒有 `highlights` 就不渲染 `Highlights` 元件。對照 [`pages/public-safety/_id.vue`](../pages/public-safety/_id.vue) 的 `v-if`。

### Q: 改 JSON 的 title，瀏覽器分頁標題沒變？

- dev：重新整理；確認讀的是已 upload 的 Firebase 或正確本地檔。
- 正式站：需 generate 後部署；`head()` 與 inject-meta 才會進靜態 HTML。

---

## 樣式與程式

### Q: Tailwind 和 Vuetify 會衝突嗎？

Tailwind 工具類使用 **`tw-` 前綴**（如 `tw-flex`）。自訂 SCSS 變數在 [`assets/variables.scss`](../assets/variables.scss)。

### Q: 元件要 import 嗎？

Nuxt 2 auto-import：`components/` 下元件可直接在 template 使用。重型區塊可用 `Lazy` 前綴延遲載入。

---

## 發佈與部署

### Q: dist 產出後怎麼上線？

Repo **未內建**部署腳本。請依團隊填寫的 [release-checklist.md](./release-checklist.md)「部署與回滾 SOP」操作。

### Q: 可以 commit dist 嗎？

預設 **不要** commit `dist/`，除非團隊明確要求。以版號目錄保留在本機或發佈伺服器即可。

---

## 還有問題？

- 架構總覽：[HANDOVER.md](./HANDOVER.md)
- 內容操作：[content-operations.md](./content-operations.md)
- 發佈檢查：[release-checklist.md](./release-checklist.md)
