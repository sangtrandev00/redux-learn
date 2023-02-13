import {createSelector} from 'reselect';

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const prioritiesSelector = (state) => state.filters.priority;
export const todoListSelector = (state) => state.todoList;


// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state);

//     const todosRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filters.search);
//     })
        
//     return todosRemaining;
// };

// Reselect library is very good
// Có 1 selector phụ thuộc vào 1 selector khác thì dùng Thư viện này thì tuyệt cú mèo
export const todosRemainingSelector = createSelector(todoListSelector, filterStatusSelector, prioritiesSelector, searchTextSelector,  (todoList, status, priority, searchText) => {
    console.log('todoList', todoList);
    console.log('status: ', status);
    console.log('serachText: ', searchText);
    console.log('priority',priority)
    // status =>> 'All' 'Completed' 'todo',
    return todoList.filter((todo) => {

        if(status === 'All') {

            return priority.length ? todo.name.includes(searchText) && priority.includes(todo.priority) :  todo.name.includes(searchText);
        }

        return todo.name.includes(searchText) && (status === 'Completed' ? todo.completed : !todo.completed ) && (priority.length ?  priority.includes(todo.priority) : true) ;
    })
})

// create selector doesn't work in this cas


