import "./TodoList.css";
import TodoItem from "./TodoItem";
import {useMemo, useState} from "react";

function TodoList({ todo, onUpdate, onDelete }) {   // Props 구조 분해 할당
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
                    <TodoItem
                     key={it.id}
                     {...it}
                     onUpdate={onUpdate}
                     onDelete={onDelete}
                    /> // TodoItem 컴포넌트에 onUpdate를 Props로 전달
                ))}
            </div>
        </div>
    );
}
export default TodoList;