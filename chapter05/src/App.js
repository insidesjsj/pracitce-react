import './App.css';
import Header from "./componet/Header";
import Body from "./componet/Body";
import Footer from "./componet/Footer";

function App() {
  return (
      <div className="App">
          <Header /> {/*컴포넌트를 페이지에 렌더링*/}
          <Body />
          <Footer />
      </div>
  );
}

export default App;
