import Editor from "../component/Editor";

const Home = () => {
  return (
      <div>
          {/* 수정 기능 지원을 위한 임시 데이터 작성 */}
          <Editor
              initData={{
                  date: new Date().getTime(),
                  emotionId: 1,
                  content: "이전에 작성했던 일기",
              }}
              onSubmit={() => alert("작성 완료")}
          />
      </div>
  );
};

export default Home;