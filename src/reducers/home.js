import { GET_HOME } from '../constants/ActionType';

const initialState = {
    info: null
};

export default function home(state = initialState, action){
    switch(action.type){
        case GET_HOME:
            return {
                ...state,
                info: action.payload
            };

        default:
            return state;
    }
}

