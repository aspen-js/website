import { html, task } from "aspen";

import { $isMobile } from "../layout.js";
import { signal } from "../aspen.js";

export function CodeSnippet({ filePath, children }) {
  const $code = signal("");

  task(() => {
    const path = import.meta.resolve(filePath);

    fetch(path).then(async (res) => {
      const text = await res.text();

      $code.val = text;
      hljs.highlightAll();
    });
  });

  if (!$code.val) {
    return null;
  }

  return html`
    <div
      style=${`
        max-width: 896px;
        margin-inline: ${$isMobile.val ? "24px" : "auto"};
        border: 1px solid #B3B3B3;
        box-shadow: 4px 4px 0px #B3B3B3;
        border-radius: 3px;
        display: flex;
        flex-direction: ${$isMobile.val ? "column" : "row"};
        align-items: stretch;
      `}
    >
      <pre
        style="
          padding: 0; 
          margin: 0; 
          overflow-x: scroll;
        "
      ><code style="border-radius: 3px; background-color: transparent; white-space: pre;">${$code.val}</code></pre>
      <div
        style=${`
          background-color: #F9F9F9;
          padding: 12px;
          flex: 1;
          border-radius: ${
            $isMobile.val ? "0px 0px 3px 3px" : "0px 3px 3px 0px"
          };
        `}
      >
        ${children}
      </div>
    </div>
  `;
}
