import React from "react";
import ReactDOM from "react-dom";
import SecondaryNav from "./modules/secondaryCustomNavigation";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Blog from './modules/blog';
import ErrorComp from './modules/error';

class Main extends React.Component {
    render(){
        return(
            <Router>
                <div>
                    <div>
                        <Switch>
                            <Route exact path='/' component={SecondaryNav} />
                            <Route path='/blogs' component={Blog} />
                            <Route path='/*' component={ErrorComp} />
                        </Switch>
                    </div>
                    <div>
                        <Link to='/'>Home</Link>
                        <Link to='/blogs'>Blogs</Link>
                        <Link to='/whatever/geg'>anything Else</Link>
                    </div>  
                </div>
            </Router>            
        );
    }
}
ReactDOM.render(<Main />, document.getElementById("root"));