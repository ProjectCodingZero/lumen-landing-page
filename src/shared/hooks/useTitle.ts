import { useEffect } from "react";

export function useTitle() {
  return (title: string) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
}
