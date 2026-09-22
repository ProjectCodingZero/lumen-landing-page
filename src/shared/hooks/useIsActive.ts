import { useLocation } from "react-router-dom";
export function useIsActive() {
  const { pathname } = useLocation();
  return (path: string) => path.startsWith(pathname);
}
