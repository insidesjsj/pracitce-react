import {useParams} from "react-router-dom";
import useDiary from "../hooks/useDiary";

const Diary = () => {
    // URL 파라미터 값 불러오기
    const { id } = useParams();
    const data = useDiary(id);

    if(!data) {
        return <div>일기를 불러오고 있습니다...</div>;
    } else{
        return (
            <div>
                <div>{id}번 일기</div>
                <div>Diary 페이지 입니다.</div>
            </div>
        );
    }
};

export default Diary;