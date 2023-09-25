function Body() {
    function handleOnClick(e) {
        console.log(e);
        console.log(e.target.name);
    }
    return (
        <div className="body">
            <button name="A버튼" onClick={handleOnClick}>
                A버튼
            </button>
            <button name="B버튼" onClick={handleOnClick}>
                B버튼
            </button>
        </div>
    );
}

export default Body;