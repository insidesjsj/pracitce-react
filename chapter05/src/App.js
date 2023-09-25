import './App.css';
import Header from "./componet/Header";
import Body from "./componet/Body";
import Footer from "./componet/Footer";

function App() {
    const name = "안성준";

  return (
      <div className="App">
          <Header />
          <Body name={name} location={"부천시"} />
          <Footer />
      </div>
  );
}

export default App;
