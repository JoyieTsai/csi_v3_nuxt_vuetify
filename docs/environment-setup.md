# 環境安裝教學

本文件說明如何在**新電腦**上從零安裝並跑起 CSI 官網專案。完成後應能開啟 http://localhost:8000 看到本機開發站。

**建議讀者：**

| 角色 | 需要安裝到什麼程度 |
|------|-------------------|
| 內容編輯 | Node 18 + 專案依賴 + `npm run dev`；若要自行上傳 Firebase，同工程師 |
| 前端工程師 | 全文（含 generate、lint、選用工具） |

---

## 1. 需求一覽

| 項目 | 版本／說明 |
|------|------------|
| 作業系統 | macOS、Windows 10+ 或 Linux |
| Node.js | **18.x**（LTS；不要用 Node 20+ 除非團隊已驗證） |
| npm | 隨 Node 安裝（建議 9.x 或 10.x） |
| Git | 用於 clone 專案 |
| 磁碟空間 | 約 500 MB～1 GB（含 `node_modules`） |
| 網路 | 安裝依賴、dev 讀 Firebase、generate 時需要 |

專案根目錄若有 [`.nvmrc`](../.nvmrc)，使用 nvm 時會自動切到 Node 18。

---

## 2. 安裝 Git

### macOS

已安裝 Xcode Command Line Tools 通常已有 `git`。檢查：

```bash
git --version
```

若沒有，可安裝 [Xcode CLT](https://developer.apple.com/xcode/) 或：

```bash
brew install git
```

### Windows

安裝 [Git for Windows](https://git-scm.com/download/win)，安裝時可勾選「Git Bash」。

驗證：

```bash
git --version
```

---

## 3. 安裝 Node.js 18

**務必使用 Node 18。** 本專案為 Nuxt 2，較新 Node 可能出現相依或 native 模組問題。

### 方式 A：nvm（macOS / Linux，建議工程師）

```bash
# 安裝 nvm（若尚未安裝，見 https://github.com/nvm-sh/nvm）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# 重開終端機後：
nvm install 18
nvm use 18
node -v   # 應顯示 v18.x.x
npm -v
```

進入專案目錄後（有 `.nvmrc` 時）：

```bash
cd /path/to/csi_v3_nuxt_vuetify
nvm use
```

### 方式 B：nvm-windows（Windows）

安裝 [nvm-windows](https://github.com/coreybutler/nvm-windows)，然後：

```cmd
nvm install 18
nvm use 18.20.4
node -v
```

### 方式 C：官網安裝包

至 [Node.js 官網](https://nodejs.org/) 下載 **18.x LTS** 安裝程式（macOS `.pkg` / Windows `.msi`）。

安裝後重開終端機，執行 `node -v` 確認為 `v18.*`。

### 常見錯誤：版本不對

```bash
node -v
```

若顯示 `v20` 或 `v22`，請切換到 18（nvm `nvm use 18`）或重新安裝 18，否則 `npm install` 可能失敗或 dev 異常。

---

## 4. 取得專案原始碼

```bash
cd ~/Documents/Frond-end   # 依你本機習慣調整路徑
git clone <你的-repo-URL> csi_v3_nuxt_vuetify
cd csi_v3_nuxt_vuetify
```

若已有資料夾、只需更新：

```bash
cd csi_v3_nuxt_vuetify
git pull
```

---

## 5. 安裝專案依賴

在專案根目錄（有 `package.json` 的那一層）執行：

```bash
npm install
```

若出現 **peer dependency** 或 **ERESOLVE** 錯誤，改用：

```bash
npm install --legacy-peer-deps
```

預期結果：

- 出現 `node_modules/` 資料夾
- 無明顯 `npm ERR!` 結束

**不要**刪除 `package-lock.json` 除非工程師指示；團隊應使用同一份 lock 以保持一致。

### 安裝時間

首次約 2～5 分鐘（視網路而定）。公司代理若阻擋 npm，需設定 registry 或請 IT 開放。

---

## 6. 啟動開發伺服器

```bash
npm run dev
```

成功時終端機大致會顯示 Nuxt 已啟動，並指向：

**http://localhost:8000**

（本專案 port 在 [`nuxt.config.js`](../nuxt.config.js) 設為 **8000**，不是預設 3000。）

瀏覽器開啟該網址，應看到 CSI 官網首頁。

停止伺服器：在終端機按 `Ctrl + C`。

### 測試環境資料（選用）

若要讀 Firebase **test** 路徑的 articles／leadership：

```bash
npm run dev:test
```

---

## 7. 驗證安裝（簽核清單）

請逐項勾選：

- [ ] `node -v` → `v18.x.x`
- [ ] `npm -v` 有版本號
- [ ] `npm install`（或 `--legacy-peer-deps`）成功
- [ ] `npm run dev` 無錯誤結束
- [ ] 瀏覽器 http://localhost:8000 可開首頁
- [ ] 任一路由可開，例如 `/public-safety` 或 `/resources`
- [ ] （工程師）`npm run lint` 可執行（允許既有 warning，但應無 unexpected error）

---

## 8. 依角色後續指令

### 內容編輯

| 任務 | 指令 |
|------|------|
| 本機預覽 | `npm run dev` |
| 上傳前預覽 Firebase | `npm run upload:firebase -- <collection> --dry-run` |
| 正式上傳 | `npm run upload:firebase -- <collection>` |

詳見 [content-operations.md](./content-operations.md)。

### 前端工程師

| 任務 | 指令 |
|------|------|
| Lint | `npm run lint` |
| 測試打包 | `npm run generate:test` |
| 正式打包 | `npm run generate` |

打包需穩定網路連線 Firebase。詳見 [HANDOVER.md](./HANDOVER.md)、[release-checklist.md](./release-checklist.md)。

---

## 9. 建議安裝的編輯器與工具

| 工具 | 用途 |
|------|------|
| [VS Code](https://code.visualstudio.com/) 或 Cursor | 編輯 `.vue`、`.json`、`.scss` |
| ESLint 擴充（VS Code） | 與專案 `npm run lint` 規則一致 |
| `jq`（選用） | 美化 `logs/firebase-uploads.jsonl`：`tail -n 1 logs/firebase-uploads.jsonl \| jq .` |
| Git GUI（選用） | SourceTree、Fork 等 |

JSON 編輯請用支援 **UTF-8** 的編輯器；改 `data/*.json` 時注意逗號與括號，避免 JSON 語法錯誤。

---

## 10. 疑難排解

### `npm install` 失敗

1. 確認 `node -v` 為 18
2. 試 `npm install --legacy-peer-deps`
3. 刪除 `node_modules` 後重裝：
   ```bash
   rm -rf node_modules
   npm install --legacy-peer-deps
   ```
4. 清除 npm 快取（仍失敗時）：
   ```bash
   npm cache clean --force
   npm install --legacy-peer-deps
   ```

### `npm run dev` 後瀏覽器打不開

- 確認網址是 **http://localhost:8000**（不是 3000）
- 看終端機是否寫 `port 8000` 或 `EADDRINUSE`（port 被佔用則關閉其他 dev 或改 port）
- 防火牆是否阻擋本機連線

### 頁面空白或部分區塊沒資料

- dev 會連 **Firebase**；公司網路需能存取 `firebaseio.com`
- 離線或 Firebase 失敗時，部分頁面會 fallback 本地 [`data/`](../data/)（動態詳情頁行為見 [FAQ.md](./FAQ.md)）

### `Permission denied`（macOS / Linux）

不要用 `sudo npm install`。修正 npm 全域目錄權限，或使用 nvm 管理 Node。

### Windows 路徑過長

若 clone 或 install 失敗，可將專案放在較短路徑（例如 `C:\dev\csi`），或啟用 Git 長路徑支援。

### Apple Silicon（M1/M2/M3）

Node 18 原生 arm64 即可；若曾用 Rosetta 混裝，建議用 nvm 統一安裝 arm64 版 Node 18。

---

## 11. 與教學場次對應

| 場次 | 本文件章節 |
|------|------------|
| 第 1 場（全員） | §1～§7 當場實作；§10 簡介 |
| 第 2 場（內容） | §8 內容編輯指令 |
| 第 3 場（工程） | §8 工程師指令 + lint / generate |

講師 agenda 見 [teaching-outline.md](./teaching-outline.md)。

---

## 相關文件

- [HANDOVER.md](./HANDOVER.md) — 架構總覽
- [FAQ.md](./FAQ.md) — 環境與 dev 常見問題
- [README.md](../README.md) — 快速指令與 Firebase 上傳表
