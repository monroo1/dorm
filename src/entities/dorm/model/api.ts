import { createEffect } from "effector";
import axios from "axios";
import { IDorm } from "@/shared/types/Dorm";

export const getDormsFx = createEffect<void, IDorm[]>(async () =>
    axios
        .get<IDorm[]>(`http://localhost:1337/api/dorms?fields[0]=dorme`)
        .then((data) => data.data),
);
