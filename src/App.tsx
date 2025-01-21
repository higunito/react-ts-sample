import { useState } from "react";
import { nanoid } from 'nanoid';
import { todoSeed } from './seeds/todoSeed';
import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { TodoTable }  from './components/TodoTable';

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
      if (todo.id === id) {
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
  const editTodo = (id: string): void => {
    const targetTodo = todos.find(todo => todo.id === id);
    if (!targetTodo) {
      return;
    };

    const newText = prompt('新しい内容を入力してください:', targetTodo.text);
    if (newText !== null && newText.trim() !== '') {
      setTodos(todos =>
        todos.map(todo =>
          todo.id === id ? { ...todo, text: newText } : todo
        )
      );
      console.log('edit complete');
    } else {
      console.log('編集がキャンセルされました');
    }
  };


  return (
    <>
      <Header />
      <TodoForm text={text} setText={setText} addTodo={addTodo} />
      <TodoTable
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </>
  )
}

export default App
