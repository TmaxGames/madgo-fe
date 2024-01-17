import { request } from '@api/index';

interface RequestCrateUserParams {
    email: string;
    password: string;
    nickname: string;
}

interface RequestJoinUserParams {
    email: string;
    password: string;
}

export const requestCreateUser = async ({ email, password, nickname }: RequestCrateUserParams) => {
    const res = await request({
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

export const requestLoginUser = async ({ email, password }: RequestJoinUserParams) => {
    const res = await request({
        method: 'POST',
        url: 'security/v1/session/login',
        data: {
            accountId: email,
            password,
        },
    });
    return res;
};

export const requestLogoutUser = async (email: string) => {
    const res = await request({
        method: 'POST',
        url: 'security/v1/session/logout',
        data: {
            accountId: email,
        },
    });
    return res;
};
