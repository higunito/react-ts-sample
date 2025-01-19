import { nanoid } from "nanoid";
import { Todo } from "../types/todo";

//seedを名前付きエクスポート
export const todoSeed: Todo[] = [
    {
      id: nanoid(),
      text: 'todo_01',
      completed: false
    },
    {
      id: nanoid(),
      text: 'todo_02',
      completed: false
    }
  ];