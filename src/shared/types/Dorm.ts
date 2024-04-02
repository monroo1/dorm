export interface IDorm {
    id: number;
    attributes: {
        dorm: string;
    };
}
export interface IGetDormsResponse {
    data: IDorm[];
}
