// 更新関数の型について
// type SetStateAction<T> = T | ((prevState: T) => T);
// Tは現在の状態の型(string))。右は現在の状態prevState: Tから新しい状態Tへ値を更新する関数型
// type Dispatch<A> = (value: A) => void;
// Dispatch<A>は、1つの引数 value を受け取り、それを使って処理を実行する関数型
//つまり、setStateは次のような関数型
// (value: string | ((prevState: string) => string)) => void;


type TodoFormProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
};

export const TodoForm: React.FC<TodoFormProps> = ({ text, setText, addTodo }) => (
  <form onSubmit={(e) => e.preventDefault()}>
    <input
      type="text"
      placeholder="例: ゴミ捨て"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <button onClick={addTodo}>追加</button>
  </form>
);
