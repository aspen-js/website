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
    <p
      style=${`
        font-family: Roboto;
        font-size: 16px;
        letter-spacing: 3%;
        max-width: 65ch;
        margin: 74px ${$isMobile.val ? "24px" : "auto"};
        line-height: 28px;
      `}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip sit
      amet.
    </p>
  `;
}
