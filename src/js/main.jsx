import React from "react";
import ReactDOM from "react-dom";
import SecondaryNav from "./modules/secondaryCustomNavigation";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Blogs from './modules/blogs';
import Courses from './modules/courses';
import ErrorComp from './modules/error';
import Header from './modules/header';
import headerExampleWithReducer from './modules/headerExampleWithReducer/reducer';
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import rootSaga from "./sagas/sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

console.log('headerExampleWithReducer', headerExampleWithReducer);

const reducers = combineReducers({
    state: headerExampleWithReducer
});

const store = createStore(reducers,
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

class Main extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route component={Header} />
                        <div>
                            <Switch>
                                <Route exact path='/' component={SecondaryNav} />
                                <Route path='/blogs' component={Blogs} />
                                <Route path='/courses' component={ props => <Courses {...props} />} />
                                {/* <Route path='/courses' render={ props => <Courses {...props} />} /> */}
                                <Route path='/*' component={ErrorComp} />
                            </Switch>
                        </div>
                        <div>
                            <Link to='/'>Home</Link>
                            <Link to='/blogs'>Blogs</Link>
                            <Link to='/courses'>Courses</Link>
                            <Link to='/whatever/geg'>anything Else</Link>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById("root"));