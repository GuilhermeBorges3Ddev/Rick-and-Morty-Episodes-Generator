import { createStore } from "redux";

const systemMessages =  {
    "historicPage": 'Historic of episodes',
    "errorPage": 'Ops... These route not exists! Return to the home page "/"'
}

const INITIAL_STATE = {
    data: [systemMessages]
};

function mainReducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'ADD_MESSAGE':
            return {...state, data: [...state.data, action.content]};
        default:
            return state;
    }
}

const store = createStore(mainReducer);

export default store;