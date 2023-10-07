import {useParams} from "react-router-dom";
import useDiary from "../hooks/useDiary";

const Diary = () => {
    // URL 파라미터 값 불러오기
    const { id } = useParams();
    const data = useDiary(id);

    return (
        <div>
            <div>{id}번 일기</div>
            <div>Diary 페이지 입니다.</div>
        </div>
    );
};

export default Diary;