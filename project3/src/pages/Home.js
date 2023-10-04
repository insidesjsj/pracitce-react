import {useSearchParams} from "react-router-dom";

const Home = () => {
  // 쿼리스트링으로 값 불러오기
  const [searchParams, setSearchParams] = useSearchParams();  // useSearchParams: useState처럼 배열 형태로 값을 반환.
                                                                              // 첫번째 요소는 조회, 수정이 가능한 메서드를 포함하고 있는 쿼리스트링 객체. 두번째 요소는 이 객체를 업데이트 하는 함수.
  console.log(searchParams.get("sort"));  // http://localhost:3000/?sort=latest로 접속시 콘솔에 latest 출력

  return (
      <div>Home 페이지 입니다.</div>
  );
};

export default Home;