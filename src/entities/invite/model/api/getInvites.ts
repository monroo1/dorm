import { createEffect } from "effector";
import axios from "axios";
import { IFindInvitesResponse } from "@/shared/types/Invite";
import { LOCAL_TOKEN } from "@/shared/consts/localstorage";

export const getInvitesFx = createEffect<void, IFindInvitesResponse>(
    async () =>
        // eslint-disable-next-line no-return-await
        await axios
            .get<IFindInvitesResponse>(`http://localhost:1337/api/invites`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        LOCAL_TOKEN,
                    )}`,
                },
            })
            .then((data) => data.data),
);
