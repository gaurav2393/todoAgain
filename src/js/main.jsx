import React from "react";
import ReactDOM from "react-dom";
import SecondaryNav from "./modules/secondaryCustomNavigation";

class Main extends React.Component {
    render(){
        return(
            <SecondaryNav/>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById("root"));