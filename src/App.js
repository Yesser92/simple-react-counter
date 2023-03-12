import React from "react";
import Counter from "./components/counter.js";
import Header from "./components/Header.js";

class App extends React.Component {
    render() {
        return (
        
        < div >
            <Header  />
            <Counter/>
        </div >
        )
}
}
export default App;