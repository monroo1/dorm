export interface IUser {
    // id: number;
    // username: string;
    // email: string;
    // provider: string;
    // confirmed: boolean;
    // blocked: boolean;
    // createdAt: string;
    // updatedAt: string;
    // numberRoom?: number;
    // institute: string;
    // dorm: string;
    // fio: string;

    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    numberRoom: number;
    institute: string;
    fio: string;
}

export interface IAuthResponse {
    jwt: string;
    user: IUser;
}

export interface IRegisterProps {
    email: string;
    fio: string;
    dorm: string;
    numberRoom: string;
    institute: string;
    username: string;
    password: string;
}

export interface ILoginProps {
    password: string;
    identifier: string;
}
