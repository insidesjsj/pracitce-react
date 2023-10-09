import "./DiaryItem.css";
import {useNavigate} from "react-router-dom";
import {getEmotionImgById} from "../util";
import Button from "./Button";
import React from "react";

const DiaryItem = ({ id, emotionId, content, date}) => {
    console.log(emotionId);
    const navigate = useNavigate();

    const goDetail = () => {
        navigate(`/diary/${id}`);
    };

    const goEdit = () => {
        navigate(`/edit/${id}`);
    };
    
    return (
        <div className="DiaryItem">
            <div
                onClick={goDetail}
                className={["img_section", `img_section_${emotionId}`].join(" ")}
            >
                <img alt={`emotion${emotionId}`} src={getEmotionImgById(emotionId)} />
            </div>
            <div onClick={goDetail} className="info_section">
                {/* 일기 작성일 */}
                <div className="date_wrapper">
                    {new Date(parseInt(date)).toLocaleDateString()} {/* 사람이 알아볼 수 있는 문자열로 반환 */}
                </div>
                {/* 일기 내용 */}
                <div className="content_wrapper">{content.slice(0, 25)}</div>   {/* 25자 까지만 표시 */}
            </div>
            <div className="button_section">
                <Button onClick={goEdit} text={"수정하기"} />
            </div>
        </div>
    );
}
export default React.memo(DiaryItem);