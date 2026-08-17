import { html } from "aspen";

export function Navbar() {
  return html`<div
    style="
      display: flex; 
      flex-direction: row; 
      gap: 12px; 
      justify-content: center;
    "
  >
    <a>Quick start</a>
    <a>API reference</a>
    <a>X.com</a>
  </div>`;
}
