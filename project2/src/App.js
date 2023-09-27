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
            createdDate: new Date().getTime(),
        };
        setTodo([newItem,...todo]); // 배열의 스프레드 연산자를 활용해 newItem을 포함한 새 배열을 만들어 State 변수 todo를 업데이트. 이렇게 작성하면 새롭게 추가된 아이템은 배열의 0번 요소
        idRef.current += 1;
    };

    // TodoItem 체크박스에 틱이 발생했을 때 호출하는 함수
    const onUpdate = (targetId) => {    // 매개변수 targetId로 틱이 발생한 할 일 아이템의 id를 저장
        setTodo(    // todo 값을 업데이트. map 메서드를 이용해 배열 todo에서 id가 targetId와 일치하는 요소를 찾으면, isDone 프로퍼티 값을 토글한 새 배열을 만들어 인수로 전달
            todo.map((it) =>
                it.id === targetId ? {...it, isDone: !it.isDone} : it
            )
        );
    };

    const onDelete = (targetId) => {
        setTodo(todo.filter((it) => it.id !== targetId))
    };

  return (
    <div className="App">
        <Header />
        <TodoEditor onCreate={onCreate} />
        <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
