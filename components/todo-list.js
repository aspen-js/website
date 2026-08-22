import { html, signal } from "aspen";

export * as Todo from "./todo.js";

let renders = 0;

export function TodoList() {
  const $todos = signal([
    { id: Symbol(), text: "Learn Aspen", done: true },
    { id: Symbol(), text: "See more $", done: true },
    { id: Symbol(), text: "", done: false },
  ]);

  renders++;

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
    <span style="color: gray;">(${renders} renders)</span>
    <ol>
      ${$todos.val.length
        ? $todos.val.map(
            (todo) => html(todo.id)`
          <Todo $todo=${todo} $todos=${$todos} />
        `,
          )
        : "No todos"}
    </ol>
  `;
}
