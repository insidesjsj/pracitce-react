import './App.css';
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import {useEffect, useRef, useState} from "react";
import Even from "./components/Even";

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const handleSetCount = (value) => {
        setCount(count + value);
    }
    const handleChangeText = (e) => {
        setText(e.target.value);
    };

    const didMountRef = useRef(false);  // 현재 App 컴포넌트를 페이지에 마운트했는지 판단하는 변수. 초깃값 false

    useEffect(() => {
        if(!didMountRef.current) {  // !false = true 이기 때문에 조건문 실행
            didMountRef.current = true;
            return; // 아무것도 반환하지 않음
        } else {
            console.log("컴포넌트 업데이트");
        }
    });

    useEffect(() => {
        console.log("컴포넌트 마운트");
    }, []); // 의존성 배열에 빈 배열 전달시 컴포넌트의 마운트 시점에만 콜백함수 실행.

    // 1. App 컴포넌트를 렌더링 할 때마다 useEffect의 콜백 함수는 새로운 setInterval 함수를 만들고 새 인터벌 생성
    // 2. 함수 setInterval에서 인터벌을 생성한 뒤 이를 종료하지 않음.
    // 여러 개의 인터벌이 중복으로 만들어져 출력 속도가 빨라지게 된다.
    // 이럴 때 사용하는 기능이 useEffect의 클린업 기능
    useEffect(() => {
       const intervalID = setInterval(() => {   // 함수 setInterval은 새 인터벌 생성시 인터벌 식별자(id)를 반환. 이 id를 변수에 저장
           console.log("깜빡");
       }, 1000);

       return () => {   // useEffect에 인수로 전달한 콜백 함수가 새 함수를 반환. 이 함수는 클린업 함수
           console.log("클린업");
           clearInterval(intervalID);
       };
    });

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input value={text} onChange={handleChangeText} />
            </section>
            <section>
                <Viewer count={count} />
                {count % 2 === 0 && <Even />}   {/* AND 단락 평가를 이용해 count 값을 2로 나눈 나머지가 0일 때 Even 컴포넌트를 페이지에 렌더링 */}
            </section>
            <section>
                <Controller handleSetCount={handleSetCount} />
            </section>
        </div>
    );
}

export default App;
