import { Todo } from "../types/todo";

interface TodoTableProps {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  editTodo: (id: string) => void;
}

const columnContents: string[] = ["TODO", "完了状態", "削除", "完了/取消", "編集"]

export const TodoTable: React.FC<TodoTableProps> = ({ todos, deleteTodo, toggleTodo, editTodo }) => {
  return (
    <>
      <h3>TODOリスト</h3>
      <table>
        <thead>
          <tr>
            {columnContents.map((text, index) => (
              <th key={index}>{text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.text}</td>
              <td>{todo.completed ? '完了' : '未完了'}</td>
              <td>
                <button onClick={() => deleteTodo(todo.id)}>削除</button>
              </td>
              <td>
                <button onClick={() => toggleTodo(todo.id)}>
                  {todo.completed ? '取消' : '完了'}
                </button>
              </td>
              <td>
                <button onClick={() => editTodo(todo.id)}>編集</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
