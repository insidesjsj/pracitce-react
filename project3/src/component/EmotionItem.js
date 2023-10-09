import React from "react";
import "./EmotionItem.css";

// id: 감정 이미지 아이디. img: 감정 이미지 주소. name: 감정 이미지 이름. onClick: 감정 이미지를 클릭하면 동작하는 이벤트 핸들러. isSelected: 감정 이미지의 선택 여부
const EmotionItem = ({ id, img, name, onClick, isSelected }) => {
    const handleOnClick = () => {
        onClick(id);
    };
    return (
        <div
            className={[
                "EmotionItem",
                isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`,
            ].join(" ")}    // isSelected가 true면 EmotionItem EmotionItem_on_{id} false면 off (쓰기 귀찮아)
            onClick={handleOnClick}>
            <img alt={`emotion${id}`} src={img} />
            <span>{name}</span>
        </div>
    );
};

export default  React.memo(EmotionItem);