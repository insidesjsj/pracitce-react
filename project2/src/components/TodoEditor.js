import "./TodoEditor.css";
import {useState} from "react";
const TodoEditor = ({ onCreate }) => {  // props 객체를 구조분해할당
    const [content, setContent] = useState();
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onSubmit = () => {    // 추가 버튼에 대한 이벤트 핸들러
        onCreate(content);
    };

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✏️</h4>
            <div className="editor_wrapper">
                <input
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