import React from "react";
import ReactDOM from "react-dom";

class Main extends React.Component {
    render(){
        return(
            <p>Hi From React</p>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById("root"));