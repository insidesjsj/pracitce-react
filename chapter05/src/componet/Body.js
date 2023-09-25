import { useState } from "react";

function Body() {
    const [text, setText] = useState("");   // 빈 문자열을 초깃값으로 하는 State 변수 text를 생성
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    return (
        <div className="body">
            <input value={text} onChange={handleOnChange} />    {/* <input>태그의 value 속성에 State 변수 text 설정 */}
            <div>{text}</div>   {/* 변수 text 값 페이지에 렌더링 */}
        </div>
    );
}

export default Body;