---
marp: true
theme: default
paginate: true
header: 'CSI 官網專案交接'
footer: 'csi_v3_nuxt_vuetify · docs/'
style: |
  section {
    font-family: 'Helvetica Neue', Arial, 'PingFang TC', 'Microsoft JhengHei', sans-serif;
  }
  section.title {
    background: linear-gradient(135deg, #0d63ba 0%, #094a8f 100%);
    color: #fff;
  }
  section.title h1, section.title h2, section.title p {
    color: #fff;
  }
  section.section {
    background: #0d63ba;
    color: #fff;
  }
  section.section h1, section.section h2 {
    color: #fff;
  }
  h1 { color: #0d63ba; }
  strong { color: #0d63ba; }
  code { background: #f0f4f8; }
  table { font-size: 0.85em; }
---

<!-- _class: title -->

# CSI 官網專案交接

## 教學簡報

Nuxt 2 靜態站 · Firebase · 雙軌培訓（內容 + 工程）

講師用 · 4 場 × 60–90 分鐘

---

## 課程總覽

| 場次 | 對象 | 重點 |
|:----:|------|------|
| **1** | 全員 | 架構、環境、路由 |
| **2** | 內容軌 | JSON、Firebase 上傳 |
| **3** | 工程軌 | 元件、generate、meta |
| **4** | 全員 | 發佈鏈、煙霧測試 |

**課前作業：** 完成 `docs/environment-setup.md` §7 安裝簽核

**建議時程：** W0 場 1–2 → W+1 場 3–4 → W+2 獨立 test generate → W+4 主導正式發佈

---

## 課後文件索引

| 文件 | 用途 |
|------|------|
| `environment-setup.md` | 環境安裝 |
| `HANDOVER.md` | 架構總覽 |
| `content-operations.md` | 內容操作手冊 |
| `release-checklist.md` | 發佈檢查清單 |
| `FAQ.md` | 常見問題 |
| `teaching-outline.md` | 講師 agenda 細節 |

Repo：`csi_v3_nuxt_vuetify` · 正式站：`www.csitech.com`

---

<!-- _class: section -->

# 第 1 場
## 架構與環境（全員）

---

## 專案是什麼？

| 項目 | 說明 |
|------|------|
| 框架 | Nuxt 2、Vue 2、Vuetify 2、Tailwind（`tw-` 前綴） |
| 模式 | `ssr: false`、`target: 'static'` |
| 產出 | `npm run generate` → `dist/CSI-V10.x-日期/` |
| Node | **18**（`.nvmrc`） |
| 開發 | http://localhost:**8000** |
| 內容 | Firebase Realtime Database |
| 本機 JSON | `data/*.json`（dev fallback + 上傳來源） |

---

## 資料流（一圖看懂）

```
內容編輯 → 編輯 data/*.json
         → upload:firebase（整包覆蓋）
                ↓
         Firebase RTD
                ↓
    ┌──────────┴──────────┐
    ↓                     ↓
npm run dev          npm run generate
讀 Firebase           dynamicRoutes + payload
    ↓                     ↓
本機預覽 :8000        dist/ 靜態 HTML
                           ↓
                      inject-meta（OG）
                           ↓
                      部署 → www.csitech.com
```

---

## 三種「讀資料」時機

1. **開發** — `layouts/default.vue` 啟動時拉 articles / teams / testimonials
2. **打包** — `nuxt.config.js` `dynamicRoutes()` 從 Firebase 建路由 + **payload**
3. **正式站** — 靜態 HTML（payload 已寫入）+ 部分頁面載入後再拉 Firebase

**記憶點：** 改 JSON ≠ 正式站自動更新 → 通常要 **upload + generate + 部署**

---

## 目錄地圖

| 路徑 | 用途 |
|------|------|
| `pages/` | 路由、`head()` SEO |
| `components/` | 區塊 UI（auto-import） |
| `data/*.json` | 內容（↔ Firebase collection） |
| `store/` | Vuex 拉取與篩選 |
| `static/` | 圖片等 → 網站根 `/images` |
| `scripts/` | upload、inject-meta |
| `nuxt.config.js` | 版號、generate、動態路由 |

---

## 動態路由（generate 預產）

| 路由 | Collection | ID |
|------|------------|-----|
| `/resources/:id` | articles | `id` |
| `/public-safety/:id` | public-safety | `id` |
| `/justice-courts/:id` | justice-courts | `id` |
| `/crime-intelligence/:id` | crime-intelligence | `id` |
| `/capabilities/:id` | capabilities | `id` |
| `/our-staff/:uid` | staff | **`uid`** ⚠️ |

新增一筆 → 需 **generate** 才有新 URL 的 HTML

---

## 產品頁元件鏈（示範）

`pages/public-safety/_id.vue`

```
Hero → Highlights → Capabilities → SysFeatures
  → Extendings → RelatedProducts → TheTeam
  → RelatedNews → Contact
```

- JSON **欄位驅動**（有 `highlights` 才顯示區塊）
- 其他產品線結構類似

---

## 環境安裝（課前／複習）

```bash
nvm use          # Node 18（.nvmrc）
npm install --legacy-peer-deps
npm run dev      # → http://localhost:8000
```

| 指令 | 用途 |
|------|------|
| `npm run dev:test` | 測試資料路徑 |
| `npm run lint` | ESLint（工程師） |

詳見：`docs/environment-setup.md`

---

## 第 1 場簽核

- [ ] 完成 environment-setup §7
- [ ] 本機可開 **localhost:8000**
- [ ] 能回答：**改 JSON 後，為何正式站還不會變？**

> 因為正式站是上次 generate + 部署的靜態檔，不是即時讀 JSON。

---

<!-- _class: section -->

# 第 2 場
## 內容軌（JSON + Firebase）

---

## JSON ↔ Firebase 對照

| 本地檔 | Collection |
|--------|------------|
| `data/staff.json` | staff |
| `data/leadership.json` | leadership |
| `data/articles.json` | articles |
| `data/jobs.json` | jobs |
| `data/public-safety.json` | public-safety |
| `data/justice-courts.json` | justice-courts |
| `data/crime-intelligence.json` | crime-intelligence |
| `data/capabilities.json` | capabilities |
| `data/testimonials.json` | testimonials |

---

## 標準上傳流程

```bash
# 1. 編輯 data/<collection>.json
# 2. 預覽（不寫入）
npm run upload:firebase -- staff --dry-run
# 3. 正式上傳（整包覆蓋 ⚠️）
npm run upload:firebase -- staff
# 4. 查紀錄
tail -n 1 logs/firebase-uploads.jsonl
```

測試路徑：`npm run upload:firebase:test -- articles`

---

## 風險：整包覆蓋

- upload = **PUT 整份 JSON**，不是單筆 merge
- 發佈前務必 **dry-run**、備份、勿隨意 `--all`
- 上傳錯了 → 從 git 還原 JSON → 重新 upload

Firebase：`csi-web3-resources-default-rtdb.firebaseio.com`

---

## 依類型注意事項

| 類型 | 重點 |
|------|------|
| **staff** | `uid` 規則、firstname 排序；見 maintain-staff-data SKILL |
| **articles** | 內文 HTML 見 `data/Read me.md` |
| **產品** | 欄位驅動區塊顯示 |
| **jobs** | 與 careers / job 頁連動 |
| **test** | 僅 `articles`、`leadership` 走 `/test/` |

---

## 只上傳 vs 還要打包？

**內容同仁預設：** 不確定 → **上傳 + 請工程 generate + 部署**

| 一定要打包 | 可能只上傳（需工程確認） |
|------------|-------------------------|
| 新 id / 新 uid（新網址） | 既有 staff 同 uid |
| 文章／產品／capability **內頁** | `/resources` **列表** |
| 社群分享 OG、原始碼 meta | 職缺、部分 About 區塊 |
| 新圖片、改程式 | |

詳見：`docs/FAQ.md` #upload-vs-generate

---

## 判斷流程（內容同仁）

```
新增網址？ ──是──→ 上傳 + 打包 + 部署
    ↓否
改文章/產品內頁？ ──是──→ 上傳 + 打包 + 部署
    ↓否
在意分享預覽/SEO？ ──是──→ 上傳 + 打包 + 部署
    ↓否
只改 staff/職缺/列表？ ──可能──→ 上傳，請工程確認
    ↓不確定
上傳 + 打包 + 部署（最安全）
```

---

## 第 2 場簽核（擇一）

**A** — staff 假資料 + `--dry-run` + 說明 uid 如何產生

**B** — 改 article `subtitle` + test upload + 說明為何還需 generate

課後手冊：`docs/content-operations.md`

---

<!-- _class: section -->

# 第 3 場
## 工程軌（Vue + Generate）

---

## 程式結構

| 區域 | 職責 |
|------|------|
| `pages/` | 路由、`asyncData`、`head()` |
| `components/` | UI；`Lazy` 前綴延遲載入 |
| `store/index.js` | Firebase actions、resources 篩選 |
| `store/tags.js` | 篩選選項（**靜態 code**） |
| `assets/` | SCSS、`variables.scss` 設計 token |

樣式：**Vuetify 2** + **Tailwind**（`tw-` 前綴）

---

## asyncData 雙模式

`pages/public-safety/_id.vue`

| 環境 | 資料來源 |
|------|----------|
| **generate 後** | `payload` → `pageData`（烘焙進靜態頁） |
| **dev** | 本地 JSON import；`mounted` 再 dispatch store |

`computed` 常 **優先 pageData** → 上傳 Firebase 後內頁仍可能顯示舊內容，直到重新 generate

---

## Generate 與版號

`nuxt.config.js` → `GENERATE_VERSION`

| 類型 | 前綴 | 指令 |
|------|------|------|
| 正式 | `CSI-V10.x` | `npm run generate` |
| 測試 | `Test-V10.x` | `npm run generate:test` |

輸出：`dist/CSI-V10.6-06042026`

- 每次打包前 **minor +1**
- 不要用 `package.json` version 當發佈版號

---

## inject-meta（SEO）

- `ssr: false`，generate 完成後 hook 跑 `inject-meta-tags.js`
- 從 Firebase + 靜態設定建立 OG / Twitter meta
- 抽樣 dist 內 HTML 搜尋 `og:title`

單獨重跑：

```bash
npm run inject-meta dist/CSI-V10.x-MMDDYYYY
```

---

## 工程常用指令

```bash
npm run dev              # :8000
npm run generate:test    # Test 前綴 + DATA_ENV=test
npm run generate         # 正式 CSI 前綴
npm run lint
```

需網路連 Firebase（`dynamicRoutes`）

規則：`.cursor/rules/static-generate.mdc`

---

## 第 3 場簽核

- [ ] 改 component 或 `tw-` 樣式，dev 可見
- [ ] `npm run generate:test`，`dist/Test-V*` 存在
- [ ] 抽樣 HTML 含 og meta
- [ ] `npm run lint` 無 blocking error

**備註：** 預留時間說明近期 components/pages 改動（響應式、meta 等）

---

<!-- _class: section -->

# 第 4 場
## 聯合發佈演練（全員）

---

## 發佈鏈

```
內容確認 JSON 已 upload
        ↓
  要測試？ ──是──→ generate:test → 檢查 dist/Test
        ↓否
  GENERATE_VERSION minor +1（CSI 前綴）
        ↓
  npm run generate
        ↓
  檢查 dist/CSI + meta
        ↓
  部署（團隊 SOP）→ www.csitech.com
        ↓
  煙霧測試
```

---

## 發佈前檢查（摘要）

**內容**
- JSON 正確、dry-run、upload 成功、查 upload log

**工程**
- 版號遞增、generate 成功、dist 目錄正確、lint

**部署**
- 依 `docs/release-checklist.md` 填寫的 SOP（FTP/CI 等）

---

## 煙霧測試

- [ ] 首頁、導覽、Footer
- [ ] 各 1 條：產品頁、文章、staff 頁
- [ ] 社群分享預覽（OG 標題／圖）
- [ ] `/contact`、`/job` 表單

填寫 **發佈紀錄**：版號、dist 路徑、commit、執行人

---

## RACI（摘要）

| 步驟 | 內容 | 工程 |
|------|:----:|:----:|
| 編輯 JSON | R/A | C |
| upload Firebase | R/A | 可代操作 |
| generate | — | R/A |
| 部署正式站 | — | R/A |
| 煙霧測試 | C | R/A |

詳表：`docs/release-checklist.md`

---

## 帳號交接盤點

- [ ] Firebase Console
- [ ] 主機 / FTP / CI（部署 SOP）
- [ ] DNS（www.csitech.com）
- [ ] Google Analytics（vue-gtag）
- [ ] 表單後端 API
- [ ] 圖片 / `images/` 上傳方式

---

## 第 4 場簽核

- [ ] 勾完 release-checklist（發佈前 + 發佈後）
- [ ] 填寫一筆發佈紀錄
- [ ] 部署 SOP 空白欄已指派補齊負責人

**結案：** RACI、錄影連結、課後文件路徑交給接手人

---

<!-- _class: title -->

# 謝謝

## 問題與課後自學

1. `docs/environment-setup.md` — 環境
2. `docs/HANDOVER.md` — 架構
3. `docs/FAQ.md` — 疑難排解

**簡報原始檔：** `docs/teaching-slides.md`（Marp）
