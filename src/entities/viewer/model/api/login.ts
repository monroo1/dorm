import axios from "axios";
import { createEffect } from "effector";
import { IAuthResponse, ILoginProps } from "@/shared/types/User";

export const loginFx = createEffect<ILoginProps, IAuthResponse>(
    async (data) =>
        // eslint-disable-next-line no-return-await
        await axios
            .post<IAuthResponse>(`http://localhost:1337/api/auth/local`, data, {
                headers: { "Content-Type": "application/json" },
            })
            .then((data) => data.data),
);
