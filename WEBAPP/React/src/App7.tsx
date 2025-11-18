import { useEffect, useState } from "react";
import Todo from "./components/7 Aufgabe UseEffect/Todo";

interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userID: number;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      res.json().then((json: Todo[]) => {
        setTodos(json);
      })
    );
  }, []);

  return (
    <div>
      <h1 className="font-bold p-4">Aufgabe 7 - Todo</h1>
      <br />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      xl:grid-cols-6 gap-4 "
      >
        {todos.map((todo: Todo) => (
          <Todo title={todo.title} completed={todo.completed} />
        ))}
      </div>
      <br />
    </div>
  );
}

export default App;
