import { html } from "aspen";

import { $isMobile } from "../layout.js";

export * as GitHub from "./github.js";

export function Link({ href, children }) {
  return html`
    <a
      style="
        color: #589966; 
        text-decoration: none; 
        font-size: 16px;
        font-family: Inter;
        letter-spacing: 3%;
      "
      href=${href}
      target="_blank"
    >
      ${children}
    </a>
  `;
}

export function Navbar() {
  if ($isMobile.val) {
    return null;
  }

  return html`
    <div 
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
        max-width: 698px;
        margin: 28px auto; 
        padding-inline: 24px;
      "
    >
      <span 
        style="
          font-family: Inter;
          font-size: 24px;
          letter-spacing: 3%;
        "
      >
        Aspen<span style="color: #589966">.</span>js
      </span>
      <div
        style="
          display: flex; 
          flex-direction: row; 
          gap: 24px; 
          justify-content: center;
        "
      >
        <Link href="https://github.com/aspen-js/core#quick-start">Quick start</Link>
        <Link href="https://github.com/aspen-js/core#api-reference">API reference</Link>
        <Link href="https://x.com">X.com</Link>
        <GitHub />
      </div>
    </div>
  `;
}
