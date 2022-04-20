import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
function App() {
  const [text, setText] = useState("");

  const removeTodo = (todoId) => {
    // setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleToggle = (todoId) => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id !== todoId) return todo;
    //     return {
    //       ...todo,
    //       completed: !todo.completed,
    //     };
    //   })
    // );
  };
  return (
    <div className="App">
      <InputField text={text} handleSubmit={addTodo} handleInput={setText} />
      <TodoList />
    </div>
  );
}

export default App;
