import { useState } from "react";
import { nanoid } from 'nanoid';
import { todoSeed } from './seeds/todoSeed';

function App() {
  //formに入力された文字列をstateとして保持
  const [text, setText] = useState('');
  //todoをStateで管理。seedsで初期化
  const [todos, setTodos] = useState(todoSeed);


  const click = (): void => {
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

  const deleteTodo = (id: string) => {
    // const newTodos = todos.filter((todo) => todo.id !== id);
    // console.log(newTodos);
    setTodos(todos => todos.filter((todo) => todo.id !== id));
    console.log('delete');
  };

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
          <button onClick={click}>
            追加
          </button>
        </form>
      </div>
      <h3>TODOリスト</h3>
      <ul>
        {todos.map(todo => {
          return (
            //<li />をFragmentで囲むとFragmentにもkeyを渡せとエラーが出る
            <li key={todo.id}>
              {todo.text}
              {/* 実行結果(戻り値)ではなく関数自体をそのまま渡す */}
              <button onClick={() => deleteTodo(todo.id)}>
                削除
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
