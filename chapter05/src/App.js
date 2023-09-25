import './App.css';
import Header from "./componet/Header";
import Body from "./componet/Body";
import Footer from "./componet/Footer";

function ChildComp() {
    return <div>child component</div>;
}
function App() {
  return (
      <div className="App">
          <Header />
          <Body>
              {/* Body 컴포넌트로 전달할 컴포넌트 */}
              <ChildComp />
          </Body>
          <Footer />
      </div>
  );
}

export default App;
