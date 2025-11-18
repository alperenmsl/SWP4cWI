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
      <h1 className="text-bold">Aufgabe 7 Todo</h1>
      {todos.map((todo: Todo) => (
        <Todo title={todo.title} completed={todo.completed} />
      ))}
      <div className="grid grid-cols-8 gap-2 "></div>
    </div>
  );
}

export default App;
