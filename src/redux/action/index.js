/**
 * @author [Alex Neo]
 * @email [alex.neo0115@gmail.com]
 * @create date 2022-01-12 18:08:03
 * @modify date 2022-01-12 18:08:03
 * @desc [create action]
*/

const ADD_MENU_ITEMS = "ADD_MENU_ITEMS";
const INCREASE_COUNTER = "INCR_COUNTER";
const DECREASE_COUNTER = "DEC_COUNTER";
const RENAME_COUNTER = "RENAME_COUNTER";


export const actionTypes = {
    ADD_MENU_ITEMS,
    INCREASE_COUNTER,
    DECREASE_COUNTER,
    RENAME_COUNTER
};

const addMenuItem = (payload) => {
    return {
        type: ADD_MENU_ITEMS,
        payload: payload
    }
}

const increaseCounter = (index, data) => {
    return {
        type: INCREASE_COUNTER,
        payload: { index, data }
    }
}

const decreaseCounter = (index, data) => {
    return {
        type: DECREASE_COUNTER,
        payload: { index, data }
    }
}

const renameCounter = (index, data) => {
    return {
        type: RENAME_COUNTER,
        payload: { index, data }
    }
}

export{
    addMenuItem,
    increaseCounter,
    decreaseCounter,
    renameCounter
}