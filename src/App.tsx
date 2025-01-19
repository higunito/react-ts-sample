import { useState } from "react";
import { nanoid } from 'nanoid';
import { todoSeed } from './seeds/todoSeed';

function App(): JSX.Element {
  //formに入力された文字列をstateとして保持
  const [text, setText] = useState('');
  //todoをStateで管理。seedsで初期化
  const [todos, setTodos] = useState(todoSeed);

  //新しいTODOを追加する関数
  const addTodo = (): void => {
    if (!text) {
      console.log('中身が空です')
    } else {
      const newTodo = {
        id: nanoid(),
        text: text,
        completed: false
      }
      //配列の要素を全て展開し、新たな要素を追加(スプレッド構文)
      setTodos([...todos, newTodo]);
      setText('');
      console.log('追加しました')
    }
  };

  //TODOを削除する関数
  const deleteTodo = (id: string): void => {
    // const newTodos = todos.filter((todo) => todo.id !== id);
    // console.log(newTodos);
    setTodos(todos => todos.filter((todo) => todo.id !== id));
    console.log('delete');
  };

  //TODOを完了する関数
  const toggleTodo = (id: string): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id ) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
    console.log(`ID: ${id}のTODOの状態を切り替えました`);
  }

  //TODOを更新する関数
  const editTodo = (id: string, newText: string): void => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
    console.log(`ID: ${id}のTODO内容を更新しました`);
  }



  return (
    <>
      <h1>TODOアプリ(仮)</h1>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            placeholder='例: ゴミ捨て'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {/* 関数の実行結果ではなく、関数をオブジェクトとしてそのままonClickに渡す */}
          <button onClick={addTodo}>
            追加
          </button>
        </form>
      </div>
      <h3>TODOリスト</h3>

      {/* tableでやってみる */}
      <table>
        <thead>
          <tr>
            <th>Todo</th>
            <th>完了状態</th>
            <th>削除</th>
            <th>完了/取消</th>
            <th>編集</th>
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
                <button
                  onClick={() => {
                    const newText = prompt('新しい内容を入力してください:', todo.text);
                    if (newText !== null && newText.trim() !== '') {
                      editTodo(todo.id, newText);
                    }
                  }}
                >
                  編集
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
