import './App.css';
import Header from "./componet/Header";
import Body from "./componet/Body";
import Footer from "./componet/Footer";

function App() {
    const  BodyProps = {
        name: "안성준",
        location: "구로구"
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
