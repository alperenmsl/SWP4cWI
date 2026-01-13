import { useEffect, useState } from "react";
import Todo from "./components/7 Aufgabe UseEffect/Todo";

interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]); // useState damit wir uns die Todos von dem API merken können // Todo[] -> todos ist ein Array von Todo-Objekten

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json()) //res = result. Das fetch also die API braucht bis es ladet. Wenn es ein Ergebniss bekommt wandelt es in eine json um "res.json"
      .then((json: Todo[]) => setTodos(json)); // und wenn es umgewandelt hat sind wir dann fertig und bekommen sie in der console
  }, []); // [] -> Das useeffect wird einmal ganz am anfgang ausgeführt. Das dipendency Array ist leer, damit weiß es das es ganz am anfang durchgeführt werden muss.

  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo: Todo) => (
        <Todo title={todo.title} completed={todo.completed} />
      ))}
      <div></div>
    </div>
  );
}
