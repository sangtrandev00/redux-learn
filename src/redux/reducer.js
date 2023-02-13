import { combineReducers } from 'redux';

import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodosSlice";

// const rootReducer = combineReducers({
//     filters: filtersReducer,
//     todoList: todoListReducer
// })


// const rootReducer = (state = {}, action) => {

//     // Action: {type:todoList/addTodo , payload: {id: 45, name:'Leanr Football , completed: false, priority: 'High'}}

//     console.log({state,action})
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList,action),
//     }
// }

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer
})

export default rootReducer;