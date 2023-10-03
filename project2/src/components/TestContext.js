import React, {useContext} from "react";
import Header from "../components/Header";

const MyContext = React.createContext(defaultValue);

function App () {
    const data = 'data';
    return (
        <div>
            <Header />
            <MyContext.Provider value={data}>
                <Body />
            </MyContext.Provider>
        </div>
    )
}

function Main () {
    const data = useContext(MyContext);
}