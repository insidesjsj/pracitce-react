import { useReducer } from "react";

// useState로 만든 기능을 모두 제거
// 새로운 함수 reducer를 컴포넌트 밖에 만든다.
function reducer(state, action) {   // state: 현재 state 값, action: 함수 dispatch를 호출하면서 인수로 전달한 action 객체
    switch (action.type) {
        case "INCREASE":    // 증가
            return state + action.data;
        case "DECREASE":    // 감소
            return state - action.data;
        case "INIT":        // 초기화
            return 0;
        default:
            return state;
    }
}

function TestComp() {
    const [count, dispatch] = useReducer(reducer, 0);   // useReducer를 호출하고 2개의 인수 전달. State처럼 배열 반환. 첫 번째 요소는 State 변수, 두 번째 요소는 상태 변화를 촉발하는 함수 dispatch
    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <bold>{count}</bold>    {/* State 변수 count를 return문 내부에 배치해 페이지에서 카운트를 렌더링 */}
            </div>
            <div>
                <button onClick={() => dispatch({ type: "INCREASE", data: 1})}>+</button>
                <button onClick={() => dispatch({ type: "DECREASE", data: 1})}>-</button>
                <button onClick={() => dispatch({ type: "INIT"})}>0으로 초기화</button>
            </div>
        </div>
    );
}

export default TestComp;