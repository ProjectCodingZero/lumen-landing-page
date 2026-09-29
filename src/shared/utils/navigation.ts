export const isActive = (currentPath: string, targetPath: string): boolean => {
  if (targetPath === "/") {
    return currentPath === "/";
  }
  return currentPath.startsWith(targetPath);
};
