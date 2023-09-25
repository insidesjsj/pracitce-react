function Body(props) {
    console.log(props); // {name: '안성준'}
    return <div className="body">{props.name}</div>;
}
export default Body;