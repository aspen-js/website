import { html } from "aspen";

export function ButtonLink({ children, href }) {
  return html`
    <a
      href=${href}
      target="_blank"
      style=${`
        position: relative;
        top: 0px;
        transition: top 100ms ease-in-out;
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
        padding-left: 24px;
        padding-right: 22px;
        text-decoration: none;
        letter-spacing: 5%;
      `}
    >
      <style>
        @scope {
          :scope:hover {
            top: 3px !important;
          }

          :scope:active {
            transform: translateY(3px);
          }
        }
      </style>
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
