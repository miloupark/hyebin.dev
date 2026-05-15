import { cpSync, existsSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "docs", ".vitepress", "dist");
const dest = path.join(root, "dist", "docs");

if (!existsSync(path.join(root, "dist"))) {
  console.error("dist가 없습니다. 먼저 `vite build`가 성공했는지 확인하세요.");
  process.exit(1);
}
if (!existsSync(src)) {
  console.error("VitePress 빌드 결과가 없습니다:", src);
  process.exit(1);
}

rmSync(dest, { recursive: true, force: true });
cpSync(src, dest, { recursive: true });
console.log("VitePress →", dest);
