import { createEffect } from "effector";
import axios from "axios";
import { LOCAL_TOKEN } from "@/shared/consts/localstorage";

interface ISendInviteResponse {
    data: {
        id: number;
        attributes: {
            activated: boolean;
            email: string;
            createdAt: string;
        };
    };
}

export const sendInviteFx = createEffect<string, ISendInviteResponse>(
    async (email) =>
        // eslint-disable-next-line no-return-await
        await axios
            .post<ISendInviteResponse>(
                `http://localhost:1337/api/invites`,
                {
                    data: {
                        email,
                    },
                },
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            LOCAL_TOKEN,
                        )}`,
                    },
                },
            )
            .then((data) => data.data),
);
