import { html } from "aspen";

let renders = {};

export function Todo({ $todo, $todos }) {
  renders[$todo.id] ||= 0;
  renders[$todo.id]++;

  return html`
    <li>
      <input
        type="checkbox"
        checked=${$todo.done}
        oninput=${(e) => ($todo.done = e.target.checked)}
      />
      <input
        type="text"
        value=${$todo.text}
        oninput=${(e) => ($todo.text = e.target.value)}
      />
      <button
        onclick=${() => {
          $todos.val.splice(
            $todos.val.findIndex(({ id }) => id === $todo.id),
            1,
          );
        }}
      >
        x
      </button>
      <div style="color: gray;">(${renders[$todo.id]} renders)</div>
      <br />
    </li>
  `;
}
