import Header from "../component/Header";
import {useNavigate} from "react-router-dom";
import Button from "../component/Button";

const New = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <Header
            title={"새 일기 쓰기"}
            leftChild={<Button text={"뒤로가기"} onClick={goBack} />}
        />
    );
};

export default New;