const initState = [
        {
            id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'
        },
        {
            id: 2, name: 'Learn React', completed: true, priority: 'High'
        },
        {
            id: 3, name: 'Learn Redux', completed: false, priority: 'Low'
        }
    ]

const todoListReducer = (state = initState, action) => {

    // Action: {type:todoList/addTodo , payload: {id: 45, name:'Leanr Football , completed: false, priority: 'High'}}

    // console.log({state,action})

    switch (action.type) {
        case 'todoList/addTodo':
            return  [
                    ...state,
                    action.payload
                ]
        case 'todoList/toggleTodo':
            // Update toggle to store redux
            return state.map((todo) => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo); 
        
        default:
            return state;
    }
}

export default todoListReducer;