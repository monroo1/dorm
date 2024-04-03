import { memo } from "react";
import clsx from "clsx";

import css from "./Invite.module.scss";
import { IFindInvite } from "@/shared/types/Invite";

interface InviteProps {
    className?: string;
    invite: IFindInvite;
}

export const Invite = memo((props: InviteProps) => {
    const { className, invite } = props;

    const date = new Date(invite.attributes.createdAt);

    return (
        <div className={clsx(css.Invite, className)}>
            <p>{invite.attributes.email}</p>
            <p>{`${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`}</p>
            <div
                className={
                    invite.attributes.activated ? css.activated : css.inactive
                }
            >
                <p>{invite.attributes.activated ? "Принято" : "Отправлено"}</p>
            </div>
        </div>
    );
});
