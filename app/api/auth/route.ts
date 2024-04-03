import { notification } from 'antd';
import * as httpRequest from '@/lib/requests';

export const isLogin = async () => {
    const path = `auth/profile`
    try {
        const response = await httpRequest.get(path)
        return response.data;
    }catch (error) {
        console.log(error);
        
    }
}

export const register = async (body:any) => {
    // const config = {
    //     headers: { access_token: token },
    // };
    try {
        const res = await httpRequest.post(`auth/register`, body);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const login = async (body:any) => {
    // const config = {
    //     headers: { access_token: token },
    // };

    try {
        const res = await httpRequest.post(`auth/login`, body);
        console.log(res.message);
        
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const sendOTPForgotPw = async (body:any) => {
    // const config = {
    //     headers: { access_token: token },
    // };
    try {
        const res = await httpRequest.post(`user/forgotpassword`, body);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const confirmOTPForgotPw = async (body:any) => {
    // const config = {
    //     headers: { access_token: token },
    // };
    try {
        const res = await httpRequest.post(`user/forgotpassword/verify`, body);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const changeForgotPw = async (body:any) => {
    // const config = {
    //     headers: { access_token: token },
    // };
    try {
        const res = await httpRequest.post(`user/forgotpassword/success`, body);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const sendMailActive = async () => {
    // const config = {
    //     headers: { access_token: token },
    // };
    try {
        const res = await httpRequest.get(`user/activebutton`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const activeAccount = async (body: any) => {
    // const config = {
    //     headers: { access_token: token },
    // };
    try {
        const res = await httpRequest.post(`user/active`, body);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const logout = async () => {
    const path = `auth/logout`
    try {
        const response = await httpRequest.get(path)
        console.log(response.message);
        
    }catch (error) {
        console.log(error);
        
    }
}