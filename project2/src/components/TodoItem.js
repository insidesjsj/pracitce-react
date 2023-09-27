import "./TodoItem.css";

function TodoItem({id, content, isDone, createdDate}) { // Props를 구조분해할당
    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input checked={isDone} type="checkbox" />
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">{new Date(createdDate).toLocaleDateString()}</div>
            <div className="btn_col">
                <button>삭제</button>
            </div>
        </div>
    );
}
export default TodoItem;