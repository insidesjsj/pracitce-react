import "./TodoList.css";
import TodoItem from "./TodoItem";

function TodoList({ todo }) {   // Props 구조 분해 할당
    return (
        <div className="TodoList">
            <h4>Todo List</h4>
            <input className="searchbar" placeholder="검색어를 입력하세요"/>
            <div className="list_wrapper">
                {todo.map((it) => ( // map 메서드를 이용해 배열 todo의 모든 요소를 순차적으로 순회하며 HTML로 변환
                    <TodoItem {...it} />
                ))}
            </div>
        </div>
    );
}
export default TodoList;