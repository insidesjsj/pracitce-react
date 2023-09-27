import './App.css';
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import {useRef, useState} from "react";

const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: "Recat 공부하기",
        createdDate: new Date().getTime()
    },
    {
        id: 1,
        isDone: false,
        content: "빨래 널기",
        createdDate: new Date().getTime()
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        createdDate: new Date().getTime()
    },
];
function App() {
    const idRef = useRef(3);
    const [todo, setTodo] = useState(mockTodo); // 할 일 아이템의 상태를 관리할 state

    const onCreate = (content) => { // TodoEditor 컴포넌트에서 <추가>버튼을 클릭하며 호출할 함수 onCreate. TodoEditor 컴포넌트에서 사용자가 작성한 할 일 데이터를 받아 매개변수 content에 저장
        const newItem = {
            id: idRef.current,
            content,
            isDone: false,
            createdDate: new Date().getDate()
        };
        setTodo([newItem,...todo]); // 배열의 스프레드 연산자를 활용해 newItem을 포함한 새 배열을 만들어 State 변수 todo를 업데이트. 이렇게 작성하면 새롭게 추가된 아이템은 배열의 0번 요소
        idRef.current += 1;
    };
  return (
    <div className="App">
        <Header />
        <TodoEditor onCreate={onCreate} />
        <TodoList todo={todo} />
    </div>
  );
}

export default App;
