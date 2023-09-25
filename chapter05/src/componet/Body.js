import {useRef, useState} from "react";

function Body() {
    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
    };
    const handleOnClick = () => {
        if(text.length < 5) {
            textRef.current.focus();    // 다섯 글자보다 적다면 textRef.current가 참조하는 입력 폼에 포커스 실행
        } else {
            alert(text);
            setText("");
            // textRef.current.value = "";
        }
    };

    return (
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange} />
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    );
}

export default Body;