import { GET_HOME } from '../constants/ActionType';
import { API_HOME } from '../constants/Api';
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