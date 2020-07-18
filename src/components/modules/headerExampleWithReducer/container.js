//connect ke liye
import { connect } from "react-redux";
// import Error from './error';
// import * as errorActions from './actions';
import Header from './header';

const mapStateToProps = (store) => {
    return {
        // showError: store.error.showError,
        // errMessage: store.error.errMessage,
        hi: 'sdsd'
    };
};

const matDispatchToProps = () => {
    // hideError: errorActions.hideError,
    return {
        whatUp: 'ad'
    }
};

export default connect(mapStateToProps)(Header);
