import Button from "./Button";
import "./DiaryList.css";
import {useEffect, useState} from "react";
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
    // 정렬된 일기 데이터를 저장할 State 변수
    const [sortedData, setSortedData] = useState([]);
    const onChangeSortType = (e) => {
        setSortType(e.target.value)
    };

    useEffect(() => {   // 일기 데이터나 정렬 기준이 바뀌면 첫 번째 인수로 전달한 콜백함수를 다시 실행
        const compare = (a, b) => { // 비교함수
            if(sortType === "latest") { // sortType이 최신순이면
                return Number(b.date) - Number(a.date); // 양수 반환시 a가 뒤로, 음수 반환시 b가 뒤로
            } else {    // 오래된 순
                return Number(a.date) - Number(b.date);
            }
        };
        const copyList = JSON.parse(JSON.stringify(data));  // 동일한 요소로 배열을 복사해 copyList에 저장
        copyList.sort(compare);     // copyList에 저장된 일기 데이터를 정렬
        setSortedData(copyList);    // sortedData를 정렬된 일기 데이터로 업데이트. 
    }, [data, sortType]);

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