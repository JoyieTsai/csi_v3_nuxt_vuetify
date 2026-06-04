# csi_v3_nuxt_vuetify

CSI 官網（Nuxt 2 靜態站）。**交接與教學文件** → [docs/HANDOVER.md](docs/HANDOVER.md)

| 文件 | 說明 |
|------|------|
| [docs/environment-setup.md](docs/environment-setup.md) | **環境安裝**（Node 18、依賴、dev 啟動） |
| [docs/HANDOVER.md](docs/HANDOVER.md) | 架構、路由、指令總覽 |
| [docs/content-operations.md](docs/content-operations.md) | 內容編輯：JSON、Firebase 上傳 |
| [docs/release-checklist.md](docs/release-checklist.md) | 發佈檢查清單、部署 SOP |
| [docs/teaching-outline.md](docs/teaching-outline.md) | 4 場交接教學大綱 |
| [docs/teaching-slides.md](docs/teaching-slides.md) | **教學簡報**（Marp → PDF/PPTX） |
| [docs/git-workflow.md](docs/git-workflow.md) | Git：`handover` 分支工作流程 |
| [docs/FAQ.md](docs/FAQ.md) | 常見問題 |

# Node Version 18

首次設定請依 [docs/environment-setup.md](docs/environment-setup.md) 安裝 Git、Node 18 與專案依賴。

## Build Setup

```bash
# install dependencies
$ npm install
$ npm install --legacy-peer-deps

# serve with hot reload at localhost:8000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Firebase Data Upload

Local JSON files in `/data/` are fallbacks for dev mode. Production reads from Firebase Realtime Database. After editing data locally, upload the matching collection before running `npm run generate`.

| Local file | Firebase collection |
|------------|---------------------|
| `data/staff.json` | `staff` |
| `data/leadership.json` | `leadership` |
| `data/articles.json` | `articles` |
| `data/jobs.json` | `jobs` |
| `data/public-safety.json` | `public-safety` |
| `data/justice-courts.json` | `justice-courts` |
| `data/crime-intelligence.json` | `crime-intelligence` |
| `data/capabilities.json` | `capabilities` |
| `data/testimonials.json` | `testimonials` |

```bash
# Upload one collection (production)
npm run upload:firebase -- staff

# Upload multiple collections
npm run upload:firebase -- staff leadership

# Upload all supported collections
npm run upload:firebase -- --all

# Preview without writing to Firebase
npm run upload:firebase -- staff --dry-run

# Upload to test path (/test/) for configured collections
npm run upload:firebase:test -- articles
```

Upload replaces the entire Firebase collection with the local JSON file (REST `PUT`).

### Upload Log

Each run appends one entry to `logs/firebase-uploads.jsonl` (gitignored). Use it to track who uploaded what and when.

```bash
# View the latest upload entries
tail -n 5 logs/firebase-uploads.jsonl

# Pretty-print the latest entry (requires jq)
tail -n 1 logs/firebase-uploads.jsonl | jq .
```

Example log entry:

```json
{
  "timestamp": "2026-05-22T08:30:00.000Z",
  "dataEnv": "production",
  "dryRun": false,
  "status": "success",
  "user": "joyietsai",
  "host": "MacBook-Pro.local",
  "command": "node scripts/upload-to-firebase.js staff",
  "collections": [
    {
      "name": "staff",
      "file": "data/staff.json",
      "count": 73,
      "url": "https://csi-web3-resources-default-rtdb.firebaseio.com/staff.json",
      "env": "production",
      "fileModifiedAt": "2026-05-22T08:25:00.000Z",
      "uploaded": true
    }
  ],
  "error": null
}
```

`status` values: `success`, `dry-run`, or `failed`.

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
