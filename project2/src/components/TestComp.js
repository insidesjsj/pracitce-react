import {useState} from "react";

function TestComp() {
    const [count, setCount] = useState(0);

    const onIncrease = () => {  // 상태변화코드 (카운트 1증가)
      setCount(count + 1);
    };

    const onDecrease = () => {  // 상태변화코드 (카운트 1감소)
      setCount(count - 1);
    };

    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <bold>{count}</bold>
            </div>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default TestComp;