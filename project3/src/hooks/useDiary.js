// 매개변수로 일기 id를 저장한다.
import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App";
import {useNavigate} from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [diary, setDiary] = useState();   // 매개변수를 저장한 id와 일치하는 일기를 저장할 State
    const navigate = useNavigate();

    useEffect(() => {
        // useEffect를 이용해 id나 data 값이 변경될 때마다 일기 데이터에서 매개변수 id와 일치하는 일기를 찾아 State 값 diary를 업데이트
        const matchDiary = data.find((it) => String(it.id) === String(id));
        if(matchDiary) {
            setDiary(matchDiary);
        } else {    // id나 data 값이 변할 때 해당 id의 일기가 없으면 경고 대화상자 출력 후 Home 페이지로 되돌려 보냄
            alert("일기가 존재하지 않습니다");
            navigate("/", { replace: true });   // replace를 True로 하면, 페이지를 이동한 후 다시 돌아올 수 없도록 뒤로 가기 아이콘이 비활성화
        }
    }, [id, data]);

    return diary;
};

export default useDiary;