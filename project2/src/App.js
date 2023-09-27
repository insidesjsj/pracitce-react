import './App.css';
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import {useState} from "react";

function App() {
    const [todo, setTodo] = useState(); // 할 일 아이템의 상태를 관리할 state

  return (
    <div className="App">
        <Header />
        <TodoEditor />
        <TodoList />
    </div>
  );
}

export default App;
