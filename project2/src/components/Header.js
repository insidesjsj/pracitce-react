import "./Header.css";
import React from "react";

const Header = () => {
// Header 컴포넌트는 부모 컴포넌트인 App 에서 아무런 Props도 받지 않음
// 오늘 날짜를 표시하는 아주 단순한 기능만 가짐
// 어떠한 상황에서도 리렌더 할 필요 없음
    console.log("Header 업데이트");

    return (
        <div className="Header">
            <h3>오늘은 📆</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
}

export default React.memo(Header);