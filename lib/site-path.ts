const basePath = "/my-portfolio";

export function sitePath(path: string) {
  if (!path || path === "/") {
    return basePath;
  }

  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}