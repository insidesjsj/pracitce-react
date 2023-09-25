import { useState } from "react";

function Body() {
    const [count, setCount] = useState(0);  // 인수로 초깃값을 전달.
    return (
        <div className="body">
            <h2>{count}</h2>
        </div>
    );
}

export default Body;