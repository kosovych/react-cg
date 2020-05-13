import * as actions from './actions';

const store = {
    users: [],
}

const reducer = (state = store, action) => {
    switch (action.type) {
        case actions.ADD_USER:
            return {
                ...state,
                users: state.users.concat(action.newPerson),
            };

        case actions.REMOVE_USER:
            return {
                ...state,
                users: state.users.filter( user => user.id !==  action.personId),
            };
    
        default:
            break;
    }
    return state;
}

export default reducer;