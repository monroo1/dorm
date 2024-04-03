// export interface IInvite {
//     id: number;
//     email: string;
//     activated: boolean;
//     createdAt: string;
// }

export interface IFindInvite {
    id: number;
    attributes: {
        email: string;
        activated: boolean;
        createdAt: string;
    };
}

export interface IFindInvitesResponse {
    data: [] | IFindInvite[];
}
