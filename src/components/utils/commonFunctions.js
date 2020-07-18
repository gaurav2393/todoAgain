import { deleteCache, setCache } from '../utils/cache';
import { name, token, localStorage, cookie } from '../utils/constants';


// This function checks whether the token in jwt is valid or not.
// It should be backend process so should not effect component rendering
const checkLoggedIn = function () {
    return Promise(resolve => {
        resolve(10);
    })
}

const handleLogout = function () {
    deleteCache(name, localStorage);
    deleteCache(token, cookie);
}

const handleLogin = function ({nameValue, tokenValue}) {
    setCache(name, nameValue, localStorage);
    setCache(token, tokenValue, cookie);
}

export {
    checkLoggedIn,
    handleLogout,
    handleLogin
}