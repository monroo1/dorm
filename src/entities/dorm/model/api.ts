import { createEffect } from "effector";
import axios from "axios";
import { IGetDormsResponse } from "@/shared/types/Dorm";

export const getDormsFx = createEffect<void, IGetDormsResponse>(
    async () =>
        // eslint-disable-next-line no-return-await
        await axios
            .get<IGetDormsResponse>(
                `http://localhost:1337/api/dorms?fields[0]=dorm`,
            )
            .then((data) => data.data),
);
