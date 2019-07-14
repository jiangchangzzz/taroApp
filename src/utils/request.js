import Taro from '@tarojs/taro'

export function fetch(options){
    return Taro.request(options)
        .then(res => {
            if(res.statusCode !== 200){
                return Promise.reject(res);
            }

            return res.data;
        });
}