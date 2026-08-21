import { html } from "aspen";

import { $isMobile } from "./layout.js";

export * as Navbar from "./components/navbar.js";
export * as AspenLogo from "./components/aspen-logo.js";
export * as ButtonLink from "./components/button-link.js";

export function App() {
  return html`
    <Navbar />
    <div
      style=${`
        display: flex;
        flex-direction: ${$isMobile.val ? "column" : "row"};
        justify-content: center;
        align-items: center;
        margin-inline: auto;
        gap: ${$isMobile.val ? 74 : 174}px;
        margin-top: 74px;
      `}
    >
      <AspenLogo />
      <ButtonLink href="https://github.com/aspen-js/core#aspen">
        Read the docs
      </ButtonLink>
    </div>
  `;
}
