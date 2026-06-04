# 交接教學大綱（講師用）

4 場 × 60–90 分鐘；每場保留 **15 分鐘 Q&A**。學員文件：[environment-setup.md](./environment-setup.md)、[HANDOVER.md](./HANDOVER.md)。

**課前作業：** 學員先完成 [environment-setup.md](./environment-setup.md) §7 簽核，第 1 場才能專注架構而非裝環境。

---

## 總覽

| 場次 | 對象 | 目標 | 簽核 |
|------|------|------|------|
| 1 | 全員 | 架構、環境、路由 | 雙方皆能開 localhost:8000 |
| 2 | 內容軌 | JSON、Firebase upload | dry-run + test 上傳或 staff 練習 |
| 3 | 工程軌 | 元件、store、generate | 改 UI + generate:test + lint |
| 4 | 全員 | 發佈鏈、煙霧測試 | 依 release-checklist 走完一輪 |

建議時程：W0 場 1–2 → W+1 場 3–4 → W+2 接手人獨立 test generate → W+4 接手人主導正式發佈。

---

## 第 1 場：架構與環境（全員，60–90 分）

**對象：** 內容編輯 + 前端工程師

### Agenda

| 時間 | 主題 | 講師動作 |
|------|------|----------|
| 0–10 | 專案定位 | 說明 Nuxt 2 靜態站、無 SSR、內容在 Firebase |
| 10–25 | 資料流圖 | 投影片／白板：HANDOVER 內 sequenceDiagram（JSON → Firebase → dev / generate → dist） |
| 25–40 | 環境複習／除錯 | 對照 [environment-setup.md](./environment-setup.md)；未裝好者當場排除；其餘複習 `npm run dev` → :8000 |
| 40–55 | 目錄與路由 | 走查 `pages/`、`data/`、`components/`；列出 6 條動態路由與 staff 用 `uid` |
| 55–70 | 產品頁導覽 | 開 `/public-safety/<任一 id>`，對照元件鏈 Hero → … → Contact |
| 70–90 | Q&A + 簽核 | 見下方 |

### 講義要點

- 三種讀資料時機：dev layout、generate dynamicRoutes、正式靜態檔
- `data/*.json` ≠ 正式站自動更新；需 upload + generate + 部署
- 指向 [environment-setup.md](./environment-setup.md)、[HANDOVER.md](./HANDOVER.md)、[README.md](../README.md)

### 簽核（場次 1）

- [ ] 已完成 [environment-setup.md](./environment-setup.md) §7 安裝簽核
- [ ] 每位學員在本機成功開啟 http://localhost:8000
- [ ] 能說出「改 JSON 後為何正式站還不會變」一句話答案

---

## 第 2 場：內容軌（內容為主，工程旁聽，60–90 分）

**對象：** 內容編輯（工程師旁聽上傳與風險）

### Agenda

| 時間 | 主題 | 講師動作 |
|------|------|----------|
| 0–15 | 對照表 | `data/*.json` ↔ Firebase collection（README 表） |
| 15–30 | 上傳流程 | 示範 dry-run → 正式 upload → 查 `logs/firebase-uploads.jsonl` |
| 30–45 | 風險教育 | **整包覆蓋**、備份、勿 `--all` 除非確認 |
| 45–60 | 分類 mini-lesson | staff（uid、排序）、articles（Read me.md）、產品欄位驅動 |
| 60–75 | test 環境 | `upload:firebase:test -- articles` |
| 75–90 | 實作 + Q&A | 學員做簽核練習 |

### 講義要點

- [content-operations.md](./content-operations.md) 全文為學員課後手冊
- [maintain-staff-data SKILL](../.cursor/skills/maintain-staff-data/SKILL.md) 供 staff 維護

### 簽核（場次 2）

擇一完成（見 content-operations「內容軌簽核練習」）：

- [ ] **A** staff 假資料 + dry-run + 說明 uid
- [ ] **B** article subtitle test upload + 說明需 generate

---

## 第 3 場：工程軌（工程為主，60–90 分）

**對象：** 前端工程師

### Agenda

| 時間 | 主題 | 講師動作 |
|------|------|----------|
| 0–15 | 程式結構 | pages / components / store / assets |
| 15–30 | asyncData + payload | 對照 `public-safety/_id.vue`：payload vs 本地 JSON |
| 30–45 | 樣式 | Vuetify + `tw-` Tailwind、`variables.scss` |
| 45–60 | generate 與版號 | `GENERATE_VERSION`、CSI vs Test、[static-generate.mdc](../.cursor/rules/static-generate.mdc) |
| 60–75 | inject-meta | generate hook、抽樣 HTML 查 og:title |
| 75–90 | 實作 + Q&A | 簽核練習 |

### 講師備註：近期大量 components/pages 修改

預留 **20–30 分鐘**（可併入場 3 或獨立 walkthrough）說明本波改動主題（響應式、meta、區塊一致性），避免被誤判為技術債。

### 簽核（場次 3）

- [ ] 修改任一 component 文案或 `tw-` 間距，`npm run dev` 可見
- [ ] 執行 `npm run generate:test`，`dist/Test-V*` 存在且 HTML 含 og meta
- [ ] `npm run lint` 無 error（或列出已知 warning 清單交給接手人）

---

## 第 4 場：聯合發佈演練（全員，90 分）

**對象：** 全員

### Agenda

| 時間 | 主題 | 講師動作 |
|------|------|----------|
| 0–20 | 發佈鏈總覽 | 白板：upload → 版號 → generate → dist → 部署（SOP 見 release-checklist） |
| 20–50 | 測試版實作 | 內容確認 Firebase；工程 `generate:test`；檢查 dist |
| 50–70 | 部署 SOP | 依團隊已填寫的 [release-checklist.md](./release-checklist.md) 部署區塊演練（或本機靜態預覽） |
| 70–85 | 煙霧測試 | 首頁、1 產品、1 文章、1 staff、OG、contact |
| 85–90 | 交接結案 | RACI、帳號清單、錄影連結、發佈紀錄表 |

### 簽核（場次 4）

- [ ] 全員勾完 [release-checklist.md](./release-checklist.md) 發佈前（內容+工程）與發佈後煙霧測試
- [ ] 填寫一筆「發佈紀錄」表（版本、dist 路徑、commit、執行人）
- [ ] 部署 SOP 空白欄已指派負責人補齊截止日期

---

## 講師準備清單（開課前 1 週）

1. 與主機管理員填完 release-checklist「部署與回滾 SOP」
2. 備份示範用 JSON；練習勿污染 production（用 test 或假資料）
3. 錄影一輪：dev → dry-run → generate:test → 開 dist HTML
4. 帳號盤點：Firebase、主機、DNS、GA、表單 API
5. RACI 表發給學員（release-checklist 首段）

---

## 可選：簡報結構（10–15 頁）

1. 專案是什麼（靜態 + Firebase）
2. 資料流圖（mermaid）
3. 目錄地圖
4. 動態路由表
5. 產品頁元件鏈
6. 內容：JSON ↔ Firebase ↔ upload 指令
7. 工程：asyncData 雙模式
8. generate 版號規則
9. 發佈鏈 + checklist
10. RACI + 帳號
11. FAQ 精選 3 題
12. 下一步與文件索引

圖表可直接複製 [HANDOVER.md](./HANDOVER.md) 內 mermaid。

---

## 相關文件

- [HANDOVER.md](./HANDOVER.md)
- [content-operations.md](./content-operations.md)
- [release-checklist.md](./release-checklist.md)
- [FAQ.md](./FAQ.md)
