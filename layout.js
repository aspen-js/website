import { signal } from "aspen";

const mediaQuery = matchMedia("(width <= 640px)");

export const $isMobile = signal(mediaQuery.matches);

mediaQuery.addEventListener("change", () => {
  $isMobile.val = mediaQuery.matches;
});
