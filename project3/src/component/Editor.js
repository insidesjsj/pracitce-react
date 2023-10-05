import {useState} from "react";
import {getFormattedDate} from "../util";
import Button from "./Button";
import {useNavigate} from "react-router-dom";

const Editor = ({ initData, onSubmit }) => {
    const navigate = useNavigate(); // useNavigate를 호출하면 클라이언트 사이드 렌더링 방식으로 페이지를 이동하는 함수를 반환. 
    
    const [state, setState] = useState({
        date: getFormattedDate(new Date()), // 인수로 new Date()를 전달해 형식이 yyyy-mm-dd 형식의 오늘 날짜가 되게 함
        emotionId: 3,
        content: "",
    });

    const handleChangeDate = (e) => {
        setState({
            ...state,
            date: e.target.value,
        });
    };
    
    // <작성 완료> 버튼 클릭시 호출할 이벤트 핸들러
    const handleSubmit = () => {
        onSubmit(state);    // Props로 받은 onSubmit 호출
    }; 

    const handleChangeContent = (e) => {
        setState({
            ...state,
            content: e.target.value,
        });
    };
    
    const handleOnGoBack = () => {
      navigate(-1); // -1 전달시 뒤로가기 이벤트 작동
    };
    
    
    return (
        <div className="Editor">
            <div className="editor_section">
                {/* 날짜 */}
                <h4>오늘의 날짜</h4>
                <div className="input_wrapper">
                    <input type="date" value={state.date}
                           onChange={handleChangeDate} />
                </div>
            </div>
            <div className="editor_section">
                {/* 감정 */}
                <h4>오늘의 감정</h4>
            </div>
            <div className="editor_section">
                <h4>오늘의 일기</h4>
                <div className="input_wrapper">
                    <textarea placeholder="오늘은 어땠나요?"
                              value={state.content}
                              onChange={handleChangeContent}
                    />
                </div>
            </div>
            <div className="editor_section">
                {/* 하단버튼 UI 구현 */}
                <Button text={"취소하기"} onClick={handleOnGoBack} />
                <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
            </div>
        </div>
    );
};

export default Editor;