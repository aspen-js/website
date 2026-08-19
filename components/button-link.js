import { html } from "aspen";

export function ButtonLink({ children, href }) {
  return html`
    <a
      href=${href}
      target="_blank"
      style="
        font-family: 'Zilla Slab';
        font-size: 18px;
        color: white;
        background-color: #589966;
        box-shadow: 6px 6px 0px -2px #416949;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
        padding-inline: 24px;
        text-decoration: none;
        letter-spacing: 5%;
      "
    >
      ${children}
      <span
        style="
          font-weight: 500;
          font-size: 24px;
          font-family: 'Zilla Slab';
        "
      >
        →
      </span>
    </a>
  `;
}
