function Body({name, location, favorList}) {
    console.log(name, location, favorList);
    return (
        <div className="body">
        {name}은 {location}에 거주합니다.
        <br/>
        {favorList.length}개의 음식을 좋아합니다.
        </div>
    );
}

// 실무에서는 백엔드 서버가 제공하는 데이터를 Props로 주고받는 경우가 많다.
// 이 때 예상치 못한 서버 오류로 인해 정상적인 값을 받지 못하면 오류가 발생한다
// defaultProps를 이용하면 효율적으로 이런 오류를 방지
Body.defaultProps = {
    favorList: [],
};
export default Body;