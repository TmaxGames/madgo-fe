import { request } from '@api/index';

export const requestMyProfile = async (email: string) => {
    const res = await request({
        method: 'POST',
        url: 'api/v1/lobby/myInfo',
        data: {
            id: email,
        },
    });

    return res;
};
