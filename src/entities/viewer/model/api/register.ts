import axios from "axios";
import { createEffect } from "effector";
import { IAuthResponse, IRegisterProps } from "@/shared/types/User";

export const registerFx = createEffect<IRegisterProps, IAuthResponse>(
    async (data) => {
        const dataFinally = data.numberRoom
            ? data
            : {
                  email: data.email,
                  password: data.password,
                  fio: data.fio,
                  dorm: data.dorm,
                  institute: data.institute,
                  username: data.username,
              };
        // eslint-disable-next-line no-return-await
        return await axios
            .post<IAuthResponse>(
                `http://localhost:1337/api/auth/local`,
                dataFinally,
                {
                    headers: { "Content-Type": "application/json" },
                },
            )
            .then((data) => data.data);
    },
);
