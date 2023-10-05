import Header from "../component/Header";
import Button from "../component/Button";
import {useState} from "react";

const Home = () => {
    const [pivotDate, setPivotDate] = useState(new Date());

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

  return (
      <div>
          <Header
            title={headerTitle}
            leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
            rightChild={<Button text={">"} onClick={onIncreaseMonth}  />}
          />
      </div>
  );
};

export default Home;