/**
 * @author [Alex Neo]
 * @email [alex.neo0115@gmail.com]
 * @create date 2022-01-12 18:08:03
 * @modify date 2022-01-12 18:08:03
 * @desc [create reducer]
*/

import { actionTypes } from "../action/index"


const initState = {
    todoMenu: [],
    counterList: []
}


const reducer = (state = initState, action) => {
    const tempTodo = state.todoMenu.map(list => list);

    switch (action.type){
        case actionTypes.ADD_MENU_ITEMS:
            const tempCount = state.counterList.map(list => list);
            //init data for menu items
            tempTodo.push(action.payload);
            tempCount.push({data: 0, name: "Counter"});
            return {
                todoMenu: tempTodo,
                counterList: tempCount
            };
        case actionTypes.INCREASE_COUNTER:
            const tempIncCount = state.counterList.map(list => list);
            //update array if exist
            const updatedCounter = tempIncCount.map((item, index) =>
                index === action.payload.index ?  {...tempIncCount[index], data: tempIncCount[index].data + action.payload.data} : item
            );            
            return {
                todoMenu: tempTodo,
                counterList: updatedCounter,
            };
        case actionTypes.DECREASE_COUNTER:
            const tempDecCount = state.counterList.map(list => list);
            //update array if exist
            const updatedDecCounter = tempDecCount.map((item, index) =>
                index === action.payload.index ?  {...tempDecCount[index], data:( tempDecCount[index].data - action.payload.data < 0? 0: tempDecCount[index].data - action.payload.data)} : item
            );
            return {
                todoMenu: tempTodo,
                counterList: updatedDecCounter,
            };

        case actionTypes.RENAME_COUNTER:
            const tempMyCount = state.counterList.map(list => list);
            //update array if exist
            const updatedMyCounter = tempMyCount.map((item, index) =>
                index === action.payload.index ?  {...tempMyCount[index], name: action.payload.data} : item
            );
            return {
                todoMenu: tempTodo,
                counterList: updatedMyCounter,
            };
        default:
            return state;
    }
}


export default reducer;