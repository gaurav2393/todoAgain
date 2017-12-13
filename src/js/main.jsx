import React from "react";
import ReactDOM from "react-dom";
import secondaryNav from "./modules/secondaryCustomNavigation";

class Main extends React.Component {
    render(){
        return(
            <p>Hi From React</p>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById("root"));