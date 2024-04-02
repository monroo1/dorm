import { createStore, sample } from "effector";
import { getDormsFx } from "./api";

export const $dorms = createStore<{ id: number; name: string }[] | null>(null);

sample({
    clock: getDormsFx.doneData,
    fn: (data) =>
        data.data.map((item) => ({ id: item.id, name: item.attributes.dorm })),
    target: $dorms,
});
