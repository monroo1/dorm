import { createStore, sample } from "effector";
import { sendInviteFx } from "./api/sendInvite";
import { IFindInvite } from "@/shared/types/Invite";
import { getInvitesFx } from "./api/getInvites";

export const $invites = createStore<[] | IFindInvite[]>([]);

sample({
    clock: getInvitesFx.doneData,
    fn: ({ data }) => data,
    target: $invites,
});

sample({
    source: $invites,
    clock: sendInviteFx.doneData,
    fn: (prev, { data }): IFindInvite[] => [...prev, data],
    target: $invites,
});
