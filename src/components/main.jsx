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
import QuestionsAddAndRemove from './modules/questionsAddAndRemove';
import Header from './modules/header';
import headerExampleWithReducer from './modules/headerExampleWithReducer/reducer';
import PracticeTopics from './modules/practiceTopics';
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
    state: headerExampleWithReducer
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
    }
    
    async componentDidMount() {
        // const isLoggedIn = await checkLoggedIn();
    }

    render() {
        const { userName } = this.state;

        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route component={() => <Header userName={userName} />} />
                        <div>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route path='/blogs' component={Blogs} />
                                <Route path='/courses' component={ props => <Courses {...props} />} />
                                <Route path='/login' component={props => <Login {...props} /> } />
                                <Route path='/signup' component={props => <SignUp {...props} /> } />
                                <Route path='/questions' component={ props => <QuestionsAddAndRemove {...props} />} />
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
                            <Link to='/questions'>Question</Link>
                            <Link to='/practiceQuestions'>Practice Questions</Link>
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