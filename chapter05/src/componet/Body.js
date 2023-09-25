function Body(props) {
    console.log(props); // {name: '안성준'}
    return (
        <div className="body">
        {props.name}은 {props.location}에 거주합니다.
        </div>
    );
}
export default Body;