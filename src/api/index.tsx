import axios from 'axios';

type HTTPReqMethods = 'GET' | 'POST';

type RequestType = {
    method: HTTPReqMethods;
    url: string;
    params?: { [key: string]: string };
    data?: object;
};

export const request = async ({ method, url, params, data }: RequestType) => {
    return axios({
        headers: {
            'Content-Type': 'application/json; charset=UTF=8',
        },
        method,
        url,
        data,
        params: { ...params },
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            return error.response.data;
        });
};
