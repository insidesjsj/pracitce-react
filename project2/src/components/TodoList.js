import "./TodoList.css";
import TodoItem from "./TodoItem";
import {useContext, useMemo, useState} from "react";
import {TodoStateContext} from "../App";

const TodoList = () => {   // TodoList 컴포넌트는 더 이상 App에서 어떤 Props도 받지 않는다. 따라서 Props를 매개변수로 구조 분해 할당하는 기존 코드 제거
    const todo = useContext(TodoStateContext);   // App 컴포넌트에는 TodoStateContext.Provider에서 객체데이터가 아닌 todo 배열 그 자체를 전달해주기 때문에 구조 분해 할당으로 todo를 꺼내면 오륲가 발생하므로 수정
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearchResult = () => {
      return search === ""
      ? todo
      : todo.filter((it) => it.content.toLowerCase().includes(search));
    };

    const analyzeTodo = useMemo( () => {
        // 연산량을 줄이려면 함수 analyzeTodo를 불필요하게 호출하는 일이 일어나지 않아야 한다.
        // analyzeTodo를 호출 할 때마다 콘솔에 메시지를 출력
        // TodoList 컴포넌트를 처음 마운트할 때 1번, 검색 폼에서 react 다섯 글다즐 입력할 때마다 리렌더 되어 5번 출력
        console.log("analyzeTodo 함수 호출");  
        
        const totalCount = todo.length;                             // todo의 아이템 총 개수
        const doneCount = todo.filter((it) => it.isDone).length;    // 완료 아이템 개수
        const notDoneCount = totalCount - doneCount;        // 미완료 아이템 개수
        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    },[todo]);
    const { totalCount, doneCount, notDoneCount } = analyzeTodo;

    return (
        <div className="TodoList">
            <h4>Todo List</h4>
            <div>
                <div>총개수: {totalCount}</div>
                <div>완료된 할 일: {doneCount}</div>
                <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
            </div>
            <input
                value={search}
                onChange={onChangeSearch}
                className="searchbar"
                placeholder="검색어를 입력하세요"
            />
            <div className="list_wrapper">
                {getSearchResult().map((it) => ( // map 메서드를 이용해 배열 todo의 모든 요소를 순차적으로 순회하며 HTML로 변환
                    <TodoItem key={it.id} {...it} />    // TodoList 컴포넌트에서 기존에 Props로 전달하던 코드 역시 제거
                ))}
            </div>
        </div>
    );
}
// Uncaught TypeError: Cannot read properties of undefined (reading 'length') 에러 발생
// "TodoList 컴포넌트에서 객체가 아닌 undefined 값에 length 프로퍼티로 접근하기 때문에 오류가 발생"
// App => todoList에 전달하는 Props를 모두 제거했기 때문에 todo 값이 undefined
//  todo의 기본값을 빈 배열로 하는 defaultProps 설정
TodoList.defaultProps = {
    todo: [],
};
export default TodoList;