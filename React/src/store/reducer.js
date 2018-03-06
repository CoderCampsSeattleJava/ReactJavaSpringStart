// InitialState
const initialState = {
    userId: [],

};

// Reducer
const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'USER_ID':
            return {
                ...state,
                userId: action.payload
            };            
    
    default:
    return state;
    }
};

export default reducer;



