import { useState } from "react";

// 리액트에서 부모 컴포넌트가 리렌더 되면 자식도 함께 리렌더 된다.
// 의미 없는 리렌더가 자주 발생하면 웹 브라우저의 성능은 떨어진다.
// 컴포넌트의 부모-자식 관계에서 State를 사용할 때는 늘 주의가 필요하다.
function Viewer() {
    console.log("viewer component update!");
    return <div>Viewer</div>;
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
            <Viewer />
            <div>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
            </div>
        </div>
    );
}

export default Body;