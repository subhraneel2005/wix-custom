export const safeOpen = (
  url: string,
  target: "_blank" | "_self" = "_blank"
) => {
  if (typeof window !== "undefined") {
    window.open(url, target);
  } else {
    console.warn("Attempted to open a window on the server:", url);
  }
};
