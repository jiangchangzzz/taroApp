import { GET_HOME, GET_RECOMMEND } from '../constants/ActionType';
import { API_HOME, API_RECOMMEND } from '../constants/Api';
import { fetch } from '../utils/request';
import homeData from '../data/home';
import recommendData from '../data/recommend';

export function getHome(){
    if(process.env.TARO_ENV !== 'h5'){
        return {
            type: GET_HOME,
            payload: homeData
        }
    } else {
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
}

export function getRecommend(){
    if(process.env.TARO_ENV !== 'h5'){
        return {
            type: GET_RECOMMEND,
            payload: recommendData
        }
    } else {
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
}