import './App.css';
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import {useReducer, useRef} from "react";

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

function reducer(state, action) {
    switch (action.type){
        case "CREATE": {
            return [action.newItem, ...state];
        }
        case "UPDATE": {
            return state.map((it) =>
                it.id === action.targetId
                ? {
                    ...it,
                    isDone: !it.isDone,
                    }
                : it
            );
        }
        case "DELETE": {
            return state.filter((it) => it.id !== action.targetId);
        }
        default:
            return state;
    }
}

function App() {
    const idRef = useRef(3);
    const [todo, dispatch] = useReducer(reducer, mockTodo); // 기존 useState를 삭제하고 useReducer로 대체

    const onCreate = (content) => { // TodoEditor 컴포넌트에서 <추가>버튼을 클릭하며 호출할 함수 onCreate. TodoEditor 컴포넌트에서 사용자가 작성한 할 일 데이터를 받아 매개변수 content에 저장
        dispatch({
            type: "CREATE",
            newItem: {
                id: idRef.current,
                content,
                isDone: false,
                createdDate: new Date().getTime(),
            },
        });
        idRef.current += 1;
    };

    // TodoItem 체크박스에 틱이 발생했을 때 호출하는 함수
    const onUpdate = (targetId) => {    // 매개변수 targetId로 틱이 발생한 할 일 아이템의 id를 저장
        dispatch({
            type: "UPDATE",
            targetId,
        });
    };

    const onDelete = (targetId) => {
        dispatch({
            type: "DELETE",
            targetId,
        })
    };

  return (
    <div className="App">
        {/*<TestComp />*/}
        <Header />
        <TodoEditor onCreate={onCreate} />
        <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
