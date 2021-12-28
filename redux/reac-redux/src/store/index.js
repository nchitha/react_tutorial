import {createStore} from 'redux';
import {createSlice,configureStore} from '@reduxjs/toolkit';
import counterReducer  from './counter';

import authReducer from './auth';
// const counterReducer = (state = {counter: 0,showCounter:true } ,action) =>{
//     if(action.type == 'increment'){
//         console.log(action.type);
//         return {
//             counter:state.counter + 1,
//             showCounter:state.showCOunter
//         }
//     }
//     if(action.type == 'increase'){
//         console.log(action.type);
//         return {
//             counter:state.counter + action.amount,
//             showCounter:state.showCOunter
//         }
//     }
//     if(action.type == 'decrement'){
//         return {
//             counter:state.counter - 1,
//             showCounter:state.showCOunter
//         }
//     }
//     if(action.type ==='toogle'){
//         return {
//             showCounter: !state.showCounter,
//             counter:state.counter
//         }
//     }
//     return state;
// }
//const store = createStore(counterReducer);
// const store = configureStore({
//     reducer: counterSlice.reducer
// });
const store = configureStore({
    reducer: {counter:counterReducer,auth:authReducer}
});

// store.dispatch({type:"increment"});
// store.dispatch({type:"decrement"});


export default store;