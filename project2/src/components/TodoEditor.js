import "./TodoEditor.css";
import {useRef, useState} from "react";
const TodoEditor = ({ onCreate }) => {  // props 객체를 구조분해할당
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

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✏️</h4>
            <div className="editor_wrapper">
                <input
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    placeholder="새로운 Todo..."
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
};
export default TodoEditor;