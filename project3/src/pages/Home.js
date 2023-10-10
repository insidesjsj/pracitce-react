import Header from "../component/Header";
import Button from "../component/Button";
import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App";
import {getMonthRangeByDate, setPageTitle} from "../util";
import DiaryList from "../component/DiaryList";

const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    const [filteredData, setFilteredData] = useState([]);

    // Header 컴포넌트의 Props(title)로 전달할 변수.
    const headerTitle = `${pivotDate.getFullYear()}년
                                ${pivotDate.getMonth() +1}월`;
    // pivotDate 값을 한 달 뒤로 업데이트 하는 함수
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() +1));
    };

    // pivotDate 값을 한 달 앞으로 업데이트 하는 함수
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() -1));
    };

    useEffect(() => {
        if (data.length >= 1) {
            const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
            setFilteredData(
                data.filter(
                    (it) =>
                        beginTimeStamp <= it.date &&
                        it.date <= endTimeStamp
                )
            );
        } else {
            setFilteredData([]);
        }
    }, [data, pivotDate]);

    // Home 페이지 제목 변경
    useEffect(() => {
        setPageTitle("insideSJ의 감정 일기장");
    }, []);

  return (
      <div>
          <Header
            title={headerTitle}
            leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
            rightChild={<Button text={">"} onClick={onIncreaseMonth}  />}
          />
          <DiaryList data={filteredData} />
      </div>
  );
};

export default Home;