import { authRequest, request } from '@api/index';

interface RequestCrateUserParams {
    email: string;
    password: string;
    nickname: string;
}

interface RequestJoinUserParams {
    email: string;
    password: string;
}

export const requestCreateUser = ({ email, password, nickname }: RequestCrateUserParams) => {
    const res = authRequest({
        method: 'POST',
        url: 'security/v1/account/sign-up',
        data: {
            id: email,
            password: password,
            name: nickname,
        },
    });
    return res;
};

export const requestLoginUser = ({ email, password }: RequestJoinUserParams) => {
    const res = authRequest({
        method: 'POST',
        url: 'security/v1/jwt/login',
        data: {
            id: email,
            password,
        },
    });
    return res;
};

export const requestLogoutUser = (email: string) => {
    const res = request({
        method: 'POST',
        url: 'security/v1/session/logout',
        data: {
            accountId: email,
        },
    });
    return res;
};

export const requestRefreshToken = async () => {
    const res = request({
        method: 'POST',
        url: '/security/v1/jwt/refresh',
    });
    return res;
};
