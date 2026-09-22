import { useState } from "react";

export function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  // Retornamos el estado booleano y los manejadores de eventos que se esparcirán en el elemento
  return {
    isHovered,
    hoverProps: {
      onMouseEnter,
      onMouseLeave,
    },
  };
}
