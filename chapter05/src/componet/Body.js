function Body() {
    const numA = 19;
    const numB = 200;

    /* 조건문을 이용한 조건부 렌더링 */
    if (numB % 2 === 0 ){
        return <div>{numB}은(는) 짝수입니다.</div>;
    } else {
        return <div>{numB}은(는) 홀수입니다.</div>
    }

    return (
        /* 삼항 연산자를 활용한 조건부 렌더링 */
        <>
            <h2>
                {numA}은(는) {numA % 2 === 0 ? "짝수" : "홀수"}입니다.
            </h2>
        </>
    );
}
export default Body;