/**
 * @author [Alex Neo]
 * @email [alex.neo0115@gmail.com]
 * @create date 2022-01-12 18:08:03
 * @modify date 2022-01-12 18:08:03
 * @desc [create store]
*/

import { createStore } from "redux";

import reducer from "redux/reducer";

const store = createStore(reducer);

export default store;