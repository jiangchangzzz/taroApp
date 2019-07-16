import { GET_HOME, GET_RECOMMEND } from '../constants/ActionType';
import { API_HOME, API_RECOMMEND } from '../constants/Api';
import { fetch } from '../utils/request';

export function getHome(){
    return (dispatch, getState) => {
        fetch({
            url:  API_HOME
        }).then(data => {
            dispatch({
                type: GET_HOME,
                payload: data
            });
        });
    }
}

export function getRecommend(){
    return (dispatch, getState) => {
        fetch({
            url: API_RECOMMEND
        }).then(data => {
            dispatch({
                type: GET_RECOMMEND,
                payload: data
            })
        });
    };
}