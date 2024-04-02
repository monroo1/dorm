export interface IInvite {
    id: number;
    email: string;
    activated: boolean;
    createdAt: string;
}

interface IFindInvite {
    id: number;
    attributes: {
        email: string;
        activated: boolean;
    };
}

export interface IFindInviteResponse {
    data: [] | IFindInvite[];
}
