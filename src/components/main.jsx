import React from "react";
import ReactDOM from "react-dom";
import Home from "./modules/home";
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
import DoubtPage from './modules/doubtPage';
import DoubtsPageList from './modules/doubtsPageList';
import SignUp from './modules/signUp';
import Login from './modules/login';
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import rootSaga from "./sagas/sagas";
import createSagaMiddleware from "redux-saga";
// import { checkLoggedIn } from './utils/commonFunctions';
import { getCache } from './utils/cache';
import { localStorage, name } from './utils/constants';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    state: {}
});

const store = createStore(reducers,
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

class Main extends React.Component {
    constructor(props) {
        super(props);
        const userName = getCache(name, localStorage);
        this.state = {
            isLoggedIn: false,
            userName: userName || ''
        }
        this.setLoginDetails = this.setLoginDetails.bind(this);
        this.removeLogin = this.removeLogin.bind(this);
    }
    
    async componentDidMount() {
        // const isLoggedIn = await checkLoggedIn();
    }

    setLoginDetails(userData = {}) {
        if (userData.userId) {
            this.setState({
                isLoggedIn: true,
                userName: userData.userId
            });
        }
    }

    removeLogin() {
        this.setState({
            isLoggedIn: false,
            userName: ''
        })
    }

    render() {
        const { userName, isLoggedIn } = this.state;

        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route component={() => <Header userName={userName} removeLogin={this.removeLogin} />} />
                        <div>
                            <Switch>
                                <Route exact path='/' component={props => <Home {...props} isLoggedIn={isLoggedIn} />} />
                                <Route path='/blogs' component={Blogs} />
                                <Route path='/courses' component={ props => <Courses {...props} />} />
                                <Route path='/login' component={props => <Login {...props} setLoginDetails={this.setLoginDetails} /> } />
                                <Route path='/signup' component={props => <SignUp {...props} setLoginDetails={this.setLoginDetails} /> } />
                                <Route path='/practiceQuestions' component={ props => <PracticeTopics {...props} />} />
                                <Route path='/doubts/:id' component={props => <DoubtPage {...props} userName={userName} /> } />
                                <Route path='/doubts' component={props => <DoubtsPageList {...props} /> } />
                                {/* <Route path='/courses' render={ props => <Courses {...props} />} /> */}
                                <Route component={ErrorComp} />
                            </Switch>
                        </div>
                        <div>
                            <Link to='/'>Home</Link>
                            <Link to='/blogs'>Blogs</Link>
                            <Link to='/courses'>Courses</Link>
                            <Link to='/login'>Login</Link>
                            <Link to='/signup'>Sign Up</Link>
                            <Link to='/doubts'>Thread Detail</Link>
                            <Link to='/doubts'>Thread Listing</Link>
                            <Link to='/whatever/geg'>anything Else</Link>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById("root"));