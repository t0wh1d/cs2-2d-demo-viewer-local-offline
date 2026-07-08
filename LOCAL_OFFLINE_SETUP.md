# Local/offline setup

## Start the local viewer

Install Node.js if `node --version` does not work, then run:

```bat
start-local-viewer.bat
```

Keep that window open while using the Faceit extension. The viewer runs at:

```text
http://localhost:5173
```

## Load the browser extension

Chrome/Edge:

1. Open `chrome://extensions`.
2. Enable Developer mode.
3. Click "Load unpacked".
4. Select `browserplugin/faceit/dist/chrome`.

Firefox:

1. Open `about:debugging#/runtime/this-firefox`.
2. Click "Load Temporary Add-on".
3. Select `browserplugin/faceit/dist/firefox/manifest.json`.

## What changed

- The extension opens `http://localhost:5173/player` instead of `https://2d.sparko.cz/player`.
- Old saved extension settings pointing at `https://2d.sparko.cz` are migrated to `http://localhost:5173`.
- The viewer includes local WASM parser files in `web/dist/wasm`.
- `local-server.mjs` serves the built viewer and provides the `/download` proxy required by Faceit demo links.
