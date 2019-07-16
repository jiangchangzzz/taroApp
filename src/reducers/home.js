import { GET_HOME, GET_RECOMMEND } from '../constants/ActionType';

const initialState = {
    info: null,
    recommend: {
        list: [],
        hasMore: true,
        isFetch: false
    }
};

export default function home(state = initialState, action){
    switch(action.type){
        case GET_HOME:
            return {
                ...state,
                info: action.payload
            };

        case GET_RECOMMEND:
            return {
                ...state,
                recommend: {
                    list: [...state.recommend.list, ...action.payload.rcmdItemList],
                    hasMore: action.payload.hasMore,
                    isFetch: true
                }
            }

        default:
            return state;
    }
}

