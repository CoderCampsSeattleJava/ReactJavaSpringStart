const redux = require('redux');
const createStore = redux.createStore;

// InitialState
const initialState = {
    userId: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'ADD_USERID') {
        return {
            ...state,
            userId: state.userId + action.value
        };
    };
        return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});


// Dispatching Action
store.dispatch({type: 'ADD_USERID', value: 10 });
console.log(store.getState());


