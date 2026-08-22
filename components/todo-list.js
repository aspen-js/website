import { html, signal } from "aspen";

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
  `;
}

export function TodoList() {
  const $todos = signal([
    { id: Symbol(), text: "Learn Aspen", done: true },
    { id: Symbol(), text: "See more $", done: false },
  ]);

  return html`
    Todos
    <button
      onclick=${() =>
        $todos.val.push({
          id: Symbol(),
          text: "",
          done: false,
        })}
    >
      +
    </button>
    <ol>
      ${$todos.val.map(
        (todo) => html(todo.id)`
          <Todo $todo=${todo} $todos=${$todos} />
        `,
      )}
    </ol>
  `;
}
