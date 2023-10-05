import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import {useEffect, useReducer, useRef, useState} from "react";
import React from "react";

function reducer(state, action) {
    switch (action.type) {
        case "CREATE": {
            return [action.data, ...state]; // 새 일기 데이터 배열 맨 앞에 추가
        }
        case "UPDATE": {
            return state.map((it) =>
            String(it.id) === String(action.data.id) ? { ...action.data } : it
            );
        }
        case "DELETE": {
            return state.filter((it) => String(it.id) !== String(action.targetId));
        }
        case "INIT": {
            return action.data;
        }
        default: {
            return state;
        }
    }
}

const mockData = [
    {
        id: "mock1",
        date: new Date().getTime(),
        content: "mock1",
        emotionID: 1,
    },
    {
        id: "mock2",
        date: new Date().getTime(),
        content: "mock2",
        emotionID: 2,
    },
    {
        id: "mock3",
        date: new Date().getTime(),
        content: "mock3",
        emotionID: 3,
    },
];
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();
function App() {
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);    // 아이템별 고유한 key
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    // useEffect의 콜백 함수는 마운트 시점에 호출되어 dispatch 호출
    // action 객체의 type에는 초기화 또는 초깃값 설정을 의미하는 INIT을
    // data에는 mockData를 전달
    useEffect(() => {
        dispatch({
            type: "INIT",
            data: mockData,
        });
        setIsDataLoaded(true);
    }, []);
    // 새 일기를 생성하는 onCreate 함수 생성
    const onCreate = ({date, content, emotionID}) => {
        dispatch({
           type: "CREATE",
           data: {
               id: idRef.current,
               date: new Date(date).getTime(),
               content,
               emotionID,
           },
        });
        idRef.current += 1; // 중복값 방지를 위해 현잿값 늘리기
    };

    const onUpdate = ({targetId, date, content, emotionId}) => {
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
                            <Route path={"/edit"} element={<Edit />} />
                        </Routes>
                    </div>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        );
    }
}

export default App;
