import Deno from "deno";
export const env = {
  apiUrl: Deno.env.get("VITE_API_URL"),
  appName: Deno.env.get("VITE_APP_NAME"),
} as const;
