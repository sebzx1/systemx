/**
 * Ruta correcta a archivos en /public con Vite base (ej. /systemx).
 * Evita URLs rotas como /systemxdesktop_pc/...
 */
export function publicAsset(path) {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.replace(/^\//, "");
  return `${normalizedBase}${normalizedPath}`;
}
