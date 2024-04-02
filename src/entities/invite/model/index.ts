import { sample } from "effector";
import { $viewer } from "@/entities/viewer";
import { sendInviteFx } from "./api/sendInvite";
import { IUser } from "@/shared/types/User";

export const $invites = $viewer.map((data) => data?.invites);

sample({
    source: $viewer,
    clock: sendInviteFx.doneData,
    fn: (prev, { data }): IUser | null => {
        if (!prev) {
            return null;
        }

        return {
            ...prev,
            invites: [
                ...prev.invites,
                {
                    id: data.id,
                    email: data.attributes.email,
                    activated: data.attributes.activated,
                    createdAt: data.attributes.createdAt,
                },
            ],
        };
    },
    target: $viewer,
});
