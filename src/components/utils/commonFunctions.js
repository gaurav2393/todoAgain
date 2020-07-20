import { deleteCache, setCache } from '../utils/cache';
import { name, token, localStorage, cookie, userType } from '../utils/constants';


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
    deleteCache(userType,  localStorage);
}

const handleLogin = function ({nameValue, tokenValue, typeValue}) {
    setCache(name, nameValue, localStorage);
    setCache(token, tokenValue, cookie);
    setCache(userType, typeValue , localStorage)
}

export {
    checkLoggedIn,
    handleLogout,
    handleLogin
}
