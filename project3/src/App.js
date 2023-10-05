import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import {useReducer, useRef} from "react";

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
        default: {
            return state;
        }
    }
}
function App() {
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);    // 아이템별 고유한 key

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
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/new"} element={<New />} />
            <Route path={"/diary/:id"} element={<Diary />} />
            <Route path={"/edit"} element={<Edit />} />
        </Routes>
    </div>
  );
}

export default App;
