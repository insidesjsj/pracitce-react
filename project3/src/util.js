import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";

// 컴포넌트에서 이미지를 일일이 불러오는 방식은 매우 불편하다.
// 이미지 번호에 맞게 적절한 이미지를 반호나하는 함수를 만드는 게 필요하다.
// 이미지 반환 함수는 별도의 파일에서 만든다.
export const getEmotionImgById = (emotionId) => {
    const targetEmotionId = String(emotionId);
    switch (targetEmotionId) {
        case "1":
            return emotion1;
        case "2":
            return emotion2;
        case "3":
            return emotion3;
        case "4":
            return emotion4;
        case "5":
            return emotion5;
        default:
            return null;
    }
};
