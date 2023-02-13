// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: {id: 45, name:'Learn Football', completed: false, priority: 'High'},
// }

export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodo',
        payload: todoId
    }
}



export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}

// priorities is an array
export const priorityFilterChange = (priorities) => {
    return {
        type: 'filters/priorityFilterChange',
        payload: priorities
    }
}
// const actionCreator = () => {

// }