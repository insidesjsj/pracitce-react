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

// 날짜 입력 폼의 기본 값을 오늘 날짜로 자동 설정하기 위한 함수
export const getFormattedDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    // 월이 10이하면 앞에 0을 붙임 ex) 9월 => 09
    if (month < 10) {
        month = `0${month}`;
    }

    // 일이 10이하면 앞에 0을 붙임 ex) 1일 => 01
    if (date < 10 ) {
        date = `0${date}`;
    };
    return `${year}-${month}-${date}`;
};

export const emotionList = [
    {
        id: 1,
        name: "완전 좋음",
        img: getEmotionImgById(1)
    },
    {
        id: 2,
        name: "좋음",
        img: getEmotionImgById(2)
    },
    {
        id: 3,
        name: "그럭저럭",
        img: getEmotionImgById(3)
    },
    {
        id: 4,
        name: "나쁨",
        img: getEmotionImgById(4)
    },
    {
        id: 5,
        name: "끔찍함",
        img: getEmotionImgById(5)
    },
];

export const getMonthRangeByDate = (date) => {
    const beginTimeStamp = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
    ).getTime();
    const endTimeStamp = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0,
        23,
        59,
        59
    ).getTime();
    return { beginTimeStamp, endTimeStamp };
};