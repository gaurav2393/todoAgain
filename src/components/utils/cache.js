import { localStorage } from './constants';

const setCookie = (key, value) => {
    try {
        if (key && value) {
            document.cookie = `${key}=${value}`;
        }
    } catch(error) {
        logger.error('Unable to set Cookie', {key, value, error});
    }
}

const readCookie = (key) => {
    let cachedData;
    try {
        if (key) {
            const targetKey = `${key}=`;
            const allCookies = document.cookie;
            const cookieArry = allCookies.split(';');
            const resultCookie = cookieArry.find(cookie => cookie.trim().indexOf(targetKey) === 0);
            cachedData = resultCookie ? resultCookie.trim().substring(targetKey.length) : '';
        }
    } catch(error) {
        logger.error('Unable to read Cookie', {key});
    }
    return cachedData;
}

var setStorage = (key, value, storageType) => {
    try {
        if (key && value) {
            window[localStorage].setItem(key, JSON.stringify(value));
        }
    } catch(error) {
        logger.error('Unable to set in storage', {key, value, storageType, error});
    }
}

var getStorage = (key, storageType) => {
    try {
        if (key) {
            const data = window[storageType].getItem(key);
            return data ? JSON.parse(data) : '';
        }
    } catch(error) {
        logger.error('Unable to read Storage', {key, storageType});
        return '';
    }
    return '';
}

var setCache = (key, value, storageType) => {
    if (storageType === localStorage) {
        setStorage(key, value, storageType);
    } else {
        setCookie(key, value);
    }
}

var getCache = (key, storageType) => {
    let cachedData = null;
    if (storageType === localStorage) {
        cachedData = getStorage(key, storageType);
    } else {
        cachedData = readCookie(key);
    }
    return cachedData;
}

const deleteCookie = (key) => {
    try {
        if (key) {
            const date = new Date();
            const day = date.getDate();
            date.setDate(day - 1);
            document.cookie = `${key}=;expires=${date}`;
        }
    } catch(error) {
        logger.error('Unable to delete Cookie', {key, error});
    }
}

const deleteFromStorage = (key, storageType) => {
    try {
        if (key) {
            window[storageType].removeItem(key);
        }
    } catch(error) {
        logger.error('Unable to delete Storage', {key, storageType, error});
    }
}

var deleteCache = (key, storageType) => {
    if (!storageType) {
        logger.info('storageType not defined', key);
    }

    if (storageType === localStorage) {
        deleteFromStorage(key, storageType)
    } else {
        deleteCookie(key)
    }
}


export {
    setCache,
    getCache,
    deleteCache
}
