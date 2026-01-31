import { API_BASE } from "./config";

export function apiUrl(path: string) {
  if (!path.startsWith("/")) path = "/" + path;
  return `${API_BASE}${path}`;
}
