import { useEffect, useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/api/todo");
      const data = await res.json();
      setTodo(data.todo);
    }
    loadData();
  }, []);

  return (
    <>
      <h1>Welcome to the Todo List</h1>
      <h2>Here are your todos</h2>
      {todo.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <h3>{item.completed}</h3>
            <button>Mark as complete</button>
          </div>
        )
      })}
    </>
  );
}
