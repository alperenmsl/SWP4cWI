import { useEffect, useState } from "react";
import Todo from "../7 Aufgabe UseEffect/Todo";
import type { Todo as TodoType } from "../../utils/types";

type Props = {
  search: string;
};

export default function TodoList({ search }: Props) {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json: TodoType[]) => {
        setTodos(json);
        setFilteredTodos(json);
      });
  }, []);

  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const result = todos.filter((todo) =>
      todo.title.toLowerCase().includes(lowerSearch)
    );

    setFilteredTodos(result);
  }, [search, todos]);

  return (
    <div className="grid grid-cols-5 gap-2">
      {filteredTodos.map((todo) => (
        <Todo completed={todo.completed} title={todo.title} key={todo.id} />
      ))}
    </div>
  );
}
