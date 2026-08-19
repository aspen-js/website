import { html } from "aspen";

export * as Navbar from "./components/navbar.js";
export * as AspenLogo from "./components/aspen-logo.js";

export function App() {
  return html`
    <Navbar />
    <div
      style="
        display: flex;
        justify-content: center;
        margin-inline: auto;
      "
    >
      <AspenLogo />
    </div>
  `;
}
