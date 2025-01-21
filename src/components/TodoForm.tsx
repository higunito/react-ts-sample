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
