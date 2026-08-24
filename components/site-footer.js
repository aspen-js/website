import { html } from "aspen";

import { $isMobile } from "../layout.js";

export function FooterLink({ href, children }) {
  return html`<a
    href=${href}
    style="
      font-family: Roboto;
      font-size: 15px;
      color: #A6A6A6;
      text-decoration: none;
      letter-spacing: 3%;
    "
    >${children}</a
  >`;
}

export function FooterColumn({ children }) {
  return html`
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 32px;
      "
    >
      ${children}
    </div>
  `;
}

export function SiteFooter() {
  return html`
    <div
      style=${`
        margin-top: ${$isMobile.val ? 74 : 96}px;
        height: 248px;
        background-color: #F9F9F9;
        display: flex;
      `}
    >
      <div
        style=${`
          max-width: 896px;
          padding-inline: ${$isMobile.val ? 48 : 24}px;
          flex: 1;
          margin: auto;
          display: flex;
          justify-content: flex-start;
          gap: 64px;
        `}
      >
        <FooterColumn>
          <FooterLink href="https://github.com/aspen-js/core#quick-start">
            Quick start
          </FooterLink>
          <FooterLink href="https://github.com/aspen-js/core#api-reference">
            API reference
          </FooterLink>
          <FooterLink href="https://x.com"> X.com </FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink href="https://github.com/aspen-js/core">
            Aspen source
          </FooterLink>
          <FooterLink href="https://github.com/aspen-js/website">
            Site source
          </FooterLink>
        </FooterColumn>
      </div>
    </div>
  `;
}
