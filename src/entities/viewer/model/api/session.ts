import { createEffect } from "effector";
import axios from "axios";
import { LOCAL_TOKEN } from "@/shared/consts/localstorage";
import { IUser } from "@/shared/types/User";

export const getSessionFx = createEffect<void, IUser>(
    async () =>
        // eslint-disable-next-line no-return-await
        await axios
            .get<IUser>(
                `http://localhost:1337/api/users/me?populate[dorm][fields][0]=dorm&populate[previewImage][fields][1]=url&populate[previewImage][fields][2]=name&populate[invites][fields][3]=email&populate[invites][fields][4]=activated&populate[invites][fields][5]=createdAt`,
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
