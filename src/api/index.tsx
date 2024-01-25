import axios from 'axios';
import { getAccessToken, setAccessToken } from './auth/accessToken';
import { requestRefreshToken } from './auth';

type HTTPReqMethods = 'GET' | 'POST';

type RequestType = {
    method: HTTPReqMethods;
    url: string;
    params?: { [key: string]: string };
    data?: object;
};

export const authRequest = async ({ method, url, params, data }: RequestType) => {
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

export const request = ({ method, url, params, data }: RequestType) => {
    const requestInstance = axios.create({
        method,
        url,
        params: { ...params },
        data,
    });

    requestInstance.interceptors.request.use((config) => {
        const accessToken = getAccessToken();
        config.headers.Authorization = `Bearer ${accessToken}`;
        config.headers.accountId = 'test2@tmax.co.kr';
        return config;
    });

    requestInstance.interceptors.response.use(
        async (res) => {
            return res.data;
        },
        async (error) => {
            const {
                config,
                response: { status },
            } = error;

            if (status === 401) {
                if (error.response.data.message === 'Unauthorized') {
                    const originRequest = config;
                    const res = await requestRefreshToken();

                    setAccessToken(res.data.accessToken);
                    if (res) {
                        originRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
                    }
                }
                return axios(config);
            } else {
                return Promise.reject(error);
            }
        }
    );
};
