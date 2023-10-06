import "./DiaryItem.css";
import {useNavigate} from "react-router-dom";
import {getEmotionImgById} from "../util";

const DiaryItem = ({ id, emotionId, content, date}) => {
    console.log(emotionId);
    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`/diary/${id}`);
    };
    return (
        <div className="DiaryItem">
            <div
                onClick={goDetail}
                className={["img_section", `img_section_${emotionId}`].join(" ")}
            >
                <img alt={`emotion${emotionId}`} src={getEmotionImgById(emotionId)} />
            </div>
        </div>
    );
}
export default DiaryItem;