import { html, task } from "aspen";

export function GitHub() {
  // TODO: Remove the script on unmount once tasks support cleanup functions
  task(() => {
    console.log("setting up script");
    const script = document.createElement("script");
    script.src = "https://buttons.github.io/buttons.js";
    script.async = script.defer = true;

    document.body.appendChild(script);
  });

  return html`
    <a
      class="github-button"
      href="https://github.com/aspen-js/core"
      data-color-scheme="no-preference: light; light: light; dark: dark;"
      data-icon="octicon-star"
      data-show-count="true"
      aria-label="Star aspen-js/core on GitHub"
    >
      Star
    </a>
  `;
}
