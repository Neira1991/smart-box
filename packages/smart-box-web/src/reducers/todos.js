const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        }
        case 'TOGGLE_TODO': {
            const newState = state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
            return newState;
        }
        default:
            return state;
    }
};

export default todos;
