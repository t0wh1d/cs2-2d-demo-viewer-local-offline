import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const distDir = resolve(__dirname, "web", "dist");
const port = Number(process.env.PORT || 5173);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".wasm": "application/wasm",
  ".woff2": "font/woff2",
};

function sendText(res, status, message) {
  res.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(message);
}

function sendFile(res, filePath) {
  const stat = statSync(filePath);
  const headers = {
    "Content-Type": contentTypes[extname(filePath)] || "application/octet-stream",
    "Content-Length": stat.size,
  };

  if (filePath.includes(`${join("web", "dist", "assets")}`) || filePath.includes(`${join("web", "dist", "wasm")}`)) {
    headers["Cache-Control"] = "public, max-age=31536000, immutable";
  } else {
    headers["Cache-Control"] = "no-cache";
  }

  res.writeHead(200, headers);
  createReadStream(filePath).pipe(res);
}

function staticPath(pathname) {
  const decodedPath = decodeURIComponent(pathname);
  const safePath = normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = resolve(join(distDir, safePath));
  return filePath.startsWith(distDir) ? filePath : null;
}

async function proxyDownload(req, res, requestUrl) {
  const demoUrl = requestUrl.searchParams.get("url");
  if (!demoUrl) {
    sendText(res, 400, "Missing url parameter");
    return;
  }

  let parsedDemoUrl;
  try {
    parsedDemoUrl = new URL(demoUrl);
  } catch {
    sendText(res, 400, "Invalid demo URL");
    return;
  }

  if (!["http:", "https:"].includes(parsedDemoUrl.protocol)) {
    sendText(res, 400, "Unsupported demo URL protocol");
    return;
  }

  try {
    const upstream = await fetch(parsedDemoUrl, {
      headers: {
        "User-Agent": req.headers["user-agent"] || "cs2-2d-local-viewer",
      },
    });

    if (!upstream.ok || !upstream.body) {
      sendText(res, upstream.status || 502, `Demo download failed: ${upstream.statusText}`);
      return;
    }

    const headers = {
      "Content-Type": upstream.headers.get("content-type") || "application/octet-stream",
      "Access-Control-Expose-Headers": "Content-Disposition, X-Demo-Length",
    };
    const contentLength = upstream.headers.get("content-length");
    const disposition = upstream.headers.get("content-disposition");
    if (contentLength) {
      headers["Content-Length"] = contentLength;
      headers["X-Demo-Length"] = contentLength;
    }
    if (disposition) {
      headers["Content-Disposition"] = disposition;
    }

    res.writeHead(200, headers);
    for await (const chunk of upstream.body) {
      res.write(chunk);
    }
    res.end();
  } catch (error) {
    sendText(res, 502, `Demo download failed: ${error.message}`);
  }
}

const server = createServer(async (req, res) => {
  const requestUrl = new URL(req.url || "/", `http://localhost:${port}`);

  if (requestUrl.pathname === "/download") {
    await proxyDownload(req, res, requestUrl);
    return;
  }

  const requestedPath = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const filePath = staticPath(requestedPath);
  if (filePath && existsSync(filePath) && statSync(filePath).isFile()) {
    sendFile(res, filePath);
    return;
  }

  sendFile(res, join(distDir, "index.html"));
});

server.listen(port, () => {
  console.log(`CS2 2D local viewer running at http://localhost:${port}`);
});
