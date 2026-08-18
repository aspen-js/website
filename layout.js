import { task, signal } from "aspen";

const mediaQuery = matchMedia("(width <= 640px)");

export const $isMobile = signal(mediaQuery.matches);

task(() => {
  mediaQuery.addEventListener("change", () => {
    $isMobile.val = mediaQuery.matches;
  });
});
