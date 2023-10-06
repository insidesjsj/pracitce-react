import Button from "./Button";
import "./DiaryList.css";
import {useState} from "react";

// select 태그의 옵션 리스트를 배열로 만든다.
const sortOptionList = [
    { value: "latest", name: "최신순"},
    { value: "oldest", name: "오래된 순"}
]
const DiaryList = ({ data }) => {
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
                    <Button type={"positive"} text={"새 일기 쓰기"} />
                </div>
            </div>
        </div>
    );
};

export default DiaryList;