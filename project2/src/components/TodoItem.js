import "./TodoItem.css";
import React, {useContext} from "react";
import {TodoDisPatchContext} from "../App";

const TodoItem = ({ id, content, isDone, createdDate }) => { // onUpdate 와 onDelete 를 더 이상 구조 분해 할당 하지 않는다.
    const { onUpdate, onDelete } = useContext(TodoDisPatchContext);

    // TodoItem 컴포넌트는 사용자가 등록할 할 일 아이템의 개수만큼 렌더링
    // 할 일 아이템이 수 백개가 넘어갈 경우 불필요한 렌더링 발생시 문제가 생김
    // 아이템 추가, 제거, 체크박스 클릭, 검색 폼 등등 리렌더 발생 확인
    console.log(`${id} TodoItem 업데이트`);
    const onChangeCheckbox = () => {
        onUpdate(id);
    };
    const onClickDelete = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input
                    onChange={onChangeCheckbox}
                    checked={isDone} type="checkbox" />
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">{new Date(createdDate).toLocaleDateString()}</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
}
export default React.memo(TodoItem);