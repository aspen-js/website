import { html } from "aspen";

export function Todo({ $todo, $todos }) {
  return html`
    <li>
      <input
        type="checkbox"
        checked=${$todo.done}
        oninput=${(e) => ($todo.done = e.target.checked)}
      />
      <input
        type="text"
        style="max-width: 100%;"
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
    </li>
    <br />
  `;
}
