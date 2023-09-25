import { useState } from "react";

function Viewer({ number }) {   // Viewer 컴포넌트에는 Props로 Body 컴포넌트에 있는 State 변수 number가 전달됨
    return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
}
function Body() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number +1);
    };
    const onDecrease = () => {
        setNumber(number -1);
    };

    return (
        <div>
            <h2>{number}</h2>
            <Viewer number={number} />

            <div>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
            </div>
        </div>
    );
}

export default Body;