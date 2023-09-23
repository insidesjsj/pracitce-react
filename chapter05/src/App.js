import './App.css';

// 함수 컴포넌트 만들기
// 컴포넌트의 이름은 항상 대문자로 시작한다.(소문자는 리액트 컴포넌트로 인식 안 됨. HTML 태그와 구분하기 위함)
const Header = () => {
  return (
      <header>
        <h1>header</h1>
      </header>
  );
}

function App() {
  return (
      <div className="App">
          <Header /> {/*컴포넌트를 페이지에 렌더링*/}
      </div>
  );
}

export default App;
