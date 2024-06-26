import './App.css';
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import {useCallback, useMemo, useReducer, useRef} from "react";
import React from "react";

const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
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

export const TodoStateContext = React.createContext();  // createContext를 호출해 TodoContext를 생성. 반드시 컴포넌트 밖에서 생성해야한다(why? 안에서 생성시 컴포넌트가 리렌더 될 때마다 Context를 새롭게 생성)
export const TodoDisPatchContext = React.createContext();

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
    const onUpdate = useCallback((targetId) => {    // 매개변수 targetId로 틱이 발생한 할 일 아이템의 id를 저장
        dispatch({
            type: "UPDATE",
            targetId,
        });
    },[]);

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "DELETE",
            targetId,
        })
    },[]);

    // todo가 변경되어 App 컴포넌트를 리렌더 하면 TodoDisPatchContext.Provider에 Props로 전달하는 3개의 함수를 다시 생성
    // useMemo를 이용해 함수 onCreate, onUpdate, onDelete를 App 컴포넌트가 리렌더 되어도 다시 생성하지 않도록 한다.
    const memoizedDispatches = useMemo(() => {
        return { onCreate, onUpdate, onDelete };
    }, []);

  return (
    <div className="App">
        {/*<TestComp />*/}
        <Header />
        <TodoStateContext.Provider value={todo}>    {/*TodoContext.Provider 컴포넌트에 값을 전달하기 위해 Props를 객체로 설정.*/}
            <TodoDisPatchContext.Provider value={memoizedDispatches}>
                <TodoEditor />   {/*기존 Props 삭제*/}
                <TodoList />     {/*기존 Props 삭제*/}
            </TodoDisPatchContext.Provider>
        </TodoStateContext.Provider>
    </div>
  );
}

export default App;
