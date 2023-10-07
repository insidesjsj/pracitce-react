import {useNavigate, useParams} from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import {getFormattedDate} from "../util";
import Button from "../component/Button";
import Viewer from "../component/Viewer";

const Diary = () => {
    // URL 파라미터 값 불러오기
    const { id } = useParams();
    const data = useDiary(id);
    const navigate = useNavigate();

    // 뒤로가기 이벤트 핸들러
    const goBack = () => {
        navigate(-1);
    };

    // 수정하기 이벤트 핸들러
    const goEdit = () => {
        navigate(`/edit/${id}`);
    };

    if(!data) {
        return <div>일기를 불러오고 있습니다...</div>;
    } else{
        const { date, emotionId, content } = data;
        const title = `${getFormattedDate(new Date(Number(date)))} 기록`
        return (
            <div>
                <Header
                    title={title}
                    leftChild={<Button text={"뒤로가기"} onClick={goBack} />}
                    rightChild={<Button text={"수정하기"} onClick={goEdit} />}
                />
                <Viewer
                    content = {content}
                    emotionId = {emotionId}
                />
            </div>
        );
    }
};

export default Diary;