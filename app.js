import { html } from "aspen";

export * as Navbar from "./components/navbar.js";
export * as AspenLogo from "./components/aspen-logo.js";
export * as ButtonLink from "./components/button-link.js";

export function App() {
  return html`
    <Navbar />
    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        margin-inline: auto;
        gap: 174px;
        margin-top: 74px;
      "
    >
      <AspenLogo />
      <ButtonLink href="https://github.com/aspen-js/core#aspen">
        Read the docs
      </ButtonLink>
    </div>
  `;
}
