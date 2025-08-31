// Auto-generate routes from files/folders in app/routes
import {
  type RouteConfig,
  type RouteConfigEntry,
  getAppDirectory,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";
import fs from "node:fs";
import path from "node:path";

const APP_DIR = getAppDirectory();
const ROUTES_DIR = path.join(APP_DIR, "routes");

function toPosix(p: string) {
  return p.split(path.sep).join("/");
}

function isNonEmptyFile(abs: string) {
  try {
    const s = fs.statSync(abs);
    return s.isFile() && s.size > 0;
  } catch {
    return false;
  }
}

function segFromName(name: string): string | "*" {
  const base = name.replace(/\.[^/.]+$/, "");
  if (base === "$") return "*"; // folder catch-all
  if (base.startsWith("$")) return `:${base.slice(1)}`;
  return base;
}

function segFromDir(dirName: string): string {
  return dirName.startsWith("$") ? `:${dirName.slice(1)}` : dirName;
}

function buildForDirectory(dirAbs: string, relFromRoutes = ""): RouteConfigEntry[] {
  const entries = fs.readdirSync(dirAbs, { withFileTypes: true });
  const files = entries.filter((e) => e.isFile() && e.name.endsWith(".tsx"));
  const dirs = entries.filter((e) => e.isDirectory());

  const children: RouteConfigEntry[] = [];

  const indexFile = files.find((f) => f.name === "_index.tsx") || files.find((f) => f.name === "index.tsx");
  if (indexFile) {
    const indexRel = toPosix(path.join(relFromRoutes, indexFile.name));
    const indexAbs = path.join(dirAbs, indexFile.name);
    if (isNonEmptyFile(indexAbs)) {
      children.push(index(`routes/${indexRel}`));
    }
  }

  for (const f of files) {
    if (indexFile && f.name === indexFile.name) continue;
    if (f.name === "_layout.tsx") continue; // handled via parent pathful route if needed
    if (relFromRoutes === "" && f.name === "not-found.tsx") continue; // global catch-all
    const seg = segFromName(f.name);
    const moduleRel = toPosix(path.join(relFromRoutes, f.name));
    children.push(route(seg === "*" ? "*" : seg, `routes/${moduleRel}`));
  }

  for (const d of dirs) {
    const subAbs = path.join(dirAbs, d.name);
    const subRel = toPosix(path.join(relFromRoutes, d.name));
    const nested = buildForDirectory(subAbs, subRel);
    if (nested.length === 0) continue;

    const subLayoutAbs = path.join(subAbs, "_layout.tsx");
    const seg = segFromDir(d.name);
    if (isNonEmptyFile(subLayoutAbs)) {
      const subLayoutRel = toPosix(path.join(subRel, "_layout.tsx"));
      children.push(route(seg, `routes/${subLayoutRel}`, nested));
    } else {
      children.push(...prefix(seg, nested));
    }
  }

  if (relFromRoutes === "") {
    const rootLayoutAbs = path.join(dirAbs, "_layout.tsx");
    if (isNonEmptyFile(rootLayoutAbs)) {
      const rootLayoutRel = toPosix(path.join(relFromRoutes, "_layout.tsx"));
      return [layout(`routes/${rootLayoutRel}`, children)];
    }
  }

  return children;
}

const config: RouteConfigEntry[] = buildForDirectory(ROUTES_DIR);

const notFoundAbs = path.join(ROUTES_DIR, "not-found.tsx");
if (isNonEmptyFile(notFoundAbs)) {
  config.push(route("*", "routes/not-found.tsx"));
}

export default config satisfies RouteConfig;
