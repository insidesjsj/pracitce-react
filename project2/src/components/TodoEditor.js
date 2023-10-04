import "./TodoEditor.css";
import {useContext, useRef, useState} from "react";
import {TodoContext} from "../App";
const TodoEditor = () => {  // props 객체를 구조분해할당
    const { onCreate } = useContext(TodoContext);
    const [content, setContent] = useState();
    const inputRef = useRef();  // 할 일 입력폼을 제어할 객체

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onSubmit = () => {    // 추가 버튼에 대한 이벤트 핸들러
        if (!content) { // 현재 content 값이 빈 문자열이면 포커스
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✏️</h4>
            <div className="editor_wrapper">
                <input
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                    placeholder="새로운 Todo..."
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
};
export default TodoEditor;