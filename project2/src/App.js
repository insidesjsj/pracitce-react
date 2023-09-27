import './App.css';
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import {useState} from "react";

const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: "Recat 공부하기",
        createDate: new Date().getTime()
    },
    {
        id: 1,
        isDone: false,
        content: "빨래 널기",
        createDate: new Date().getTime()
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        createDate: new Date().getTime()
    },
];
function App() {
    const [todo, setTodo] = useState(mockTodo); // 할 일 아이템의 상태를 관리할 state

  return (
    <div className="App">
        <Header />
        <TodoEditor />
        <TodoList />
    </div>
  );
}

export default App;
