import {useNavigate, useParams} from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import {getFormattedDate, setPageTitle} from "../util";
import Button from "../component/Button";
import Viewer from "../component/Viewer";
import {useEffect} from "react";

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

    // Diary 페이지 제목 변경
    useEffect(() => {
        setPageTitle(`${id}번 일기`);
    }, []);

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