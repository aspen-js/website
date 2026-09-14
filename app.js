import { html } from "aspen";

import { $isMobile } from "./layout.js";

export * as Navbar from "./components/navbar.js";
export * as AspenLogo from "./components/aspen-logo.js";
export * as ButtonLink from "./components/button-link.js";
export * as CodeSnippet from "./components/code-snippet.js";
export * as TodoList from "./components/todo-list.js";
export * as SiteFooter from "./components/site-footer.js";

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
        color: #535353;
        margin: ${$isMobile.val ? "48px 24px" : "74px auto"};
        text-align: center;
        line-height: 28px;
      `}
    >
      Aspen aims to simplify your frontend with a) synchronous state updates
      powered by deeply reactive signal objects and b) a component model that
      allows JSX-like syntax without a build step.
    </p>
    <CodeSnippet
      filePaths=${["/components/todo-list.js", "/components/todo.js"]}
    >
      <TodoList />
    </CodeSnippet>
    <SiteFooter />
  `;
}
