import './App.css';
import Header from "./componet/Header";
import Body from "./componet/Body";
import Footer from "./componet/Footer";

function App() {
    const  BodyProps = {
        name: "안성준",
        location: "구로구",
        // favorList를 실수로 전달하지 않았다는 상황을 가정하기 위해 주석 처리
        // favorList: ["파스타", "빵", "떡볶이"],
    };

  return (
      <div className="App">
          <Header />
          <Body {...BodyProps} />
          <Footer />
      </div>
  );
}

export default App;
