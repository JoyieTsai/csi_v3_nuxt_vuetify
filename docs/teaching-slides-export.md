# 簡報匯出說明

簡報原始檔：[teaching-slides.md](./teaching-slides.md)（[Marp](https://marp.app/) 格式）

## 方式一：VS Code / Cursor 擴充功能（建議）

1. 安裝擴充功能 **「Marp for VS Code」**（`marp-team.marp-vscode`）
2. 開啟 `docs/teaching-slides.md`
3. 命令面板（`Cmd+Shift+P`）→ **Marp: Export Slide Deck**
4. 選擇 **PDF** 或 **PPTX** 或 **HTML**

## 已匯出檔案（可選用）

若 repo 內已有下列檔案，可直接開啟播放／列印，無需再匯出：

- `docs/CSI-handover-slides.pdf`
- `docs/CSI-handover-slides.html`（瀏覽器全螢幕播放）

重新匯出會覆蓋上述檔案。

## 方式二：命令列

```bash
# 全域安裝（只需一次）
npm install -g @marp-team/marp-cli

cd docs

# PDF
marp teaching-slides.md -o CSI-handover-slides.pdf

# PowerPoint
marp teaching-slides.md -o CSI-handover-slides.pptx

# HTML（可瀏覽器全螢幕播放）
marp teaching-slides.md -o CSI-handover-slides.html
```

## 簡報結構（約 35 頁）

| 區段 | 內容 |
|------|------|
| 開場 | 標題、4 場總覽、文件索引 |
| 第 1 場 | 架構、資料流、目錄、路由、元件鏈、環境、簽核 |
| 第 2 場 | JSON 對照、上傳流程、風險、只上傳 vs 打包、簽核 |
| 第 3 場 | 程式結構、asyncData、generate、meta、簽核 |
| 第 4 場 | 發佈鏈、檢查、煙露、RACI、帳號、簽核 |
| 結尾 | 謝謝與課後文件 |

講師細部 agenda 仍以 [teaching-outline.md](./teaching-outline.md) 為準；簡報可搭配現場 demo（dev、dry-run、generate:test）。

## 自訂品牌色

簡報已使用 CSI 主色 `#0d63ba`（見 `teaching-slides.md` 開頭 `style` 區塊）。修改後重新匯出即可。
