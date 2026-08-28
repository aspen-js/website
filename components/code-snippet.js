import { html, task, signal } from "aspen";

import { $isMobile } from "../layout.js";

export function FileName({ active, children, onClick }) {
  return html`
    <span
      onclick=${onClick}
      style=${`
        font-family: 'Zilla Slab';
        font-size: 16px;
        font-weight: 500;
        color: ${active ? "black" : "#ABABAB"};
        cursor: pointer;
      `}
    >
      ${children}
    </span>
  `;
}

export function CodeSnippet({ filePaths, children }) {
  const $files = signal([]);
  const $index = signal(0);

  task(() => {
    Promise.all(
      filePaths.map((filePath) =>
        fetch(import.meta.resolve(filePath)).then((res) => res.text()),
      ),
    ).then((files) => ($files.val = files));
  });

  task(() => {
    if ($files.val.length) {
      const file = $files.val[$index.val];
      const highlighted = hljs.highlight(file, {
        language: "javascript",
      }).value;

      document.getElementById("code").innerHTML = highlighted;
    }
  });

  return html`
    <div
      style="
        padding-inline: 24px;
        max-width: 896px;
        margin: auto;
      "
    >
      <div
        style="
          border: 1px solid #B3B3B3;
          box-shadow: 4px 4px 0px #B3B3B3;
          border-radius: 3px;
        "
      >
        <div
          style="
          height: 32px;
          border-bottom: 1px solid #B3B3B3;
          display: flex;
          gap: 24px;
          align-items: center;
          justify-content: flex-start;
          padding-left: 12px;
        "
        >
          ${filePaths.map(
            (filePath, i) => html(filePath)`
            <FileName active=${i === $index.val} onClick=${() => ($index.val = i)}>
              ${filePath.split("/").at(-1)}
            </FileName>
          `,
          )}
        </div>
        <div
          style=${`
          display: flex;
          flex-direction: ${$isMobile.val ? "column" : "row"};
          align-items: stretch;
        `}
        >
          <div style="padding: 12px;">
            <pre
              style="
                padding: 0; 
                margin: 0; 
                overflow-x: scroll;
              "
            ><code id="code" style="background-color: transparent;"></code></pre>
          </div>
          <div
            style=${`
              background-color: #F9F9F9;
              padding: 12px;
              flex: 1;
              min-height: 348px;
              border-radius: ${
                $isMobile.val ? "0px 0px 3px 3px" : "0px 3px 3px 0px"
              };
            `}
          >
            ${children}
          </div>
        </div>
      </div>
    </div>
  `;
}
