import './App.css';
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import {useEffect, useRef, useState} from "react";

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

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input value={text} onChange={handleChangeText} />
            </section>
            <section>
                <Viewer count={count} />
            </section>
            <section>
                <Controller handleSetCount={handleSetCount} />
            </section>
        </div>
    );
}

export default App;
