import { createStore } from "redux";

const systemMessages =  {
    "historicPage": 'Historic of episodes',
    "errorPage": 'Ops... These route not exists! Return to the home page "/"',
    "newEpisodePage": 'Generate a new episode with those two fields bellow'
}

const newEpisodeLabels = {
    "charactersNumberLabel": "Choose the numbers of characters that you wanna on your episode:",
    "localesNumberLabel": "Now, choose the numbers of locations that you wanna on your episode:"
}

const INITIAL_STATE = {
    data: [systemMessages, newEpisodeLabels]
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