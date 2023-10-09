import {useNavigate, useParams} from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import {useContext} from "react";
import {DiaryDispatchContext} from "../App";

const Edit = () => {
    const { id } = useParams();
    const data = useDiary(id);
    const navigate = useNavigate();
    const { onDelete } = useContext(DiaryDispatchContext);
    const goBack = () => {
        navigate(-1);
    };

    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
            onDelete(id);
            navigate("/", { replace : true });
        }
    };

    if(!data) {
        return <div>일기를 불러오고 있습니다.</div>;
    } else {
        return (
            <div>
                <Header
                    title={"일기 수정하기"}
                    leftChild={<Button text={"<뒤로 가기"} onClick={goBack} />}
                    rightChild={<Button text={"삭제하기"} type={"negative"} onClick={onClickDelete} />}
                />
                <div>일기 수정 페이지</div>
            </div>
        );
    }

};

export default Edit;