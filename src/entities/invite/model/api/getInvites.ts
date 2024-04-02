import { createEffect } from "effector";
import axios from "axios";
import { IFindInviteResponse } from "@/shared/types/Invite";

export const getInviteFx = createEffect<string, IFindInviteResponse>(
    async (email) =>
        // eslint-disable-next-line no-return-await
        await axios
            .get<IFindInviteResponse>(
                `http://localhost:1337/api/invites?filters[email][$eq]=${email}`,
            )
            .then((data) => data.data),
);
