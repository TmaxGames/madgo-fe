import axios from 'axios';
import { getAccessToken } from './auth/accessToken';

type HTTPReqMethods = 'GET' | 'POST';

type RequestType = {
    method: HTTPReqMethods;
    url: string;
    params?: { [key: string]: string };
    data?: object;
};

export const request = async ({ method, url, params, data }: RequestType) => {
    const accessToken = getAccessToken();

    return axios({
        headers: {
            'Content-Type': 'application/json; charset=UTF=8',
            Authorization: accessToken ? `bearer ${accessToken}` : '',
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
