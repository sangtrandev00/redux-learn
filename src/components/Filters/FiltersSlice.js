const initState = {
        search: '',
        status: 'All',
        priority: []
}
const filtersReducer = (state = initState, action) => {

    // Action: {type:todoList/addTodo , payload: {id: 45, name:'Leanr Football , completed: false, priority: 'High'}}

    // console.log({state,action})

    switch (action.type) {

        case 'filters/searchFilterChange':

            return {
                    ...state,
                    search: action.payload,
            };

        case 'filters/statusFilterChange':
            return {
                ...state,
                status: action.payload
            }

        case 'filters/priorityFilterChange':
            return {
                ...state,
                priority: action.payload
            }
        
        default:
            return state;
    }

}

export default filtersReducer;