import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import {useEffect, useReducer, useRef, useState} from "react";
import React from "react";

const mockData = [
    {
        id: "mock1",
        date: new Date().getTime() -1,
        content: "mock1",
        emotionId: 1,
    },
    {
        id: "mock2",
        date: new Date().getTime() -2,
        content: "mock2",
        emotionId: 2,
    },
    {
        id: "mock3",
        date: new Date().getTime() -3,
        content: "mock3",
        emotionId: 3,
    },
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE": {
            const newState = [action.data, ...state];
            localStorage.setItem("diary", JSON.stringify(newState));
            return [action.data, ...state]; // 새 일기 데이터 배열 맨 앞에 추가
        }
        case "UPDATE": {
            const newState = state.map((it) =>
            String(it.id) === String(action.data.id) ? { ...action.data } : it
            );
            localStorage.setItem("diary", JSON.stringify(newState));
            return newState;
        }
        case "DELETE": {
            const newState = state.filter(
                (it) => String(it.id) !== String(action.targetId));
            localStorage.setItem("diary", JSON.stringify(newState));
            return newState;
        }
        case "INIT": {
            return action.data;
        }
        default: {
            return state;
        }
    }
}
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();
function App() {
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);    // 아이템별 고유한 key
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        const rawData = localStorage.getItem("diary");
        if (!rawData) {
            setIsDataLoaded(true);
            return;
        }
        const localData = JSON.parse(rawData);  // 일기 데이터가 있으면 JSON.parse를 이용해 객체로 복구한다.

        // 일기 데이터의 배열 길이가 0이라면 일 데이터가 없는 것과 마찬가지 이므로 데이터를 불러오지 못한 때처럼 동작
        if (localData.length === 0) {
            setIsDataLoaded(true);
            return;
        }
        // id 중복 방지 기능
        localData.sort((a, b) => Number(b.id) - Number(a.id));  // 불러온 일기데이터를 id를 기준으로 내림차순 정렬
        idRef.current = localData[0].id + 1;

        // 불러온 일기 데이터로 일기 State 초기화
        dispatch({ type: "INIT", data: localData});
        setIsDataLoaded(true);
    }, []);

    // 새 일기를 생성하는 onCreate 함수 생성
    const onCreate = (date, content, emotionId) => {
        dispatch({
           type: "CREATE",
           data: {
               id: idRef.current,
               date: new Date(date).getTime(),
               content,
               emotionId,
           },
        });
        idRef.current += 1; // 중복값 방지를 위해 현잿값 늘리기
    };

    const onUpdate = (targetId, date, content, emotionId) => {
        console.log(targetId, date, content, emotionId);
        dispatch({
           type: "UPDATE",
           data: {
               id: targetId,
               date: new Date(date).getTime(),
               content,
               emotionId,
           },
        });
    };

    const onDelete = (targetId) => {
        dispatch({
            type: "DELETE",
            targetId,
        });
    };
    // isDataLoaded가 true 일 때 자식 컴포넌트들을 페이지에 마운트
    if(!isDataLoaded){
        return <div>데이터를 불러오는 중입니다.</div>;
    } else {
        return (
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider
                    value={{
                        onCreate,
                        onUpdate,
                        onDelete,
                    }}
                >
                    <div className="App">
                        <Routes>
                            <Route path={"/"} element={<Home />} />
                            <Route path={"/new"} element={<New />} />
                            <Route path={"/diary/:id"} element={<Diary />} />
                            <Route path={"/edit/:id"} element={<Edit />} />
                        </Routes>
                    </div>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        );
    }
}

export default App;
