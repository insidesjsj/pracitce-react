import "./Button.css";

const Button = ({ text, type, onClick }) => {
    const btnType = ["positive", "negative"].includes(type) ? type : "default"; // includes: 배열 탐색 메서드. type이 positive or negative 이면 그대로 type에 저장
    return (
        <button className={["Button", `Button_${btnType}`].join(" ")}   // className을 복수로 지정하기 위해서 배열과 join 메서드 사용.
                onClick={onClick}
        >
        {text}
        </button>
    );
};

Button.defaultProps = {
    type: "default",
};
export default Button;