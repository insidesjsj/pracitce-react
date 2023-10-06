import Button from "./Button";
import "./DiaryList.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

// select 태그의 옵션 리스트를 배열로 만든다.
const sortOptionList = [
    { value: "latest", name: "최신순"},
    { value: "oldest", name: "오래된 순"}
]



const DiaryList = ({ data }) => {
    const navigate = useNavigate(); // useNavigate 훅을 호출해 함수 navigate 생성. 이 함수를 호출해 인수를 전달하면 해당 경로로 이동.
    const onClickNew = () => {
        navigate("/new");   // <새 일기 쓰기> 버튼을 클릭하면 New 페이지로 이동 
    };

    // 선택한 정렬 유형 저장
    const [sortType, setSortType] = useState("latest");
    const onChangeSortType = (e) => {
        setSortType(e.target.value)
    };
    return (
        <div className="DiaryList">
            <div className="menu_wrapper">
                <div className="left_col">
                    {/* <select> 태그에 정렬 옵션 추가 */}
                    <select value={sortType} onChange={onChangeSortType}>
                        {sortOptionList.map((it, idx) => (
                            <option key={idx} value={it.value}>
                                {it.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="right_col">
                    <Button type={"positive"} text={"새 일기 쓰기"} onClick={onClickNew} />
                </div>
            </div>
        </div>
    );
};

export default DiaryList;