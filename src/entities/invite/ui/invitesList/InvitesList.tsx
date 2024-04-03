import { memo } from "react";
import clsx from "clsx";
import { useUnit } from "effector-react";

import { $invites } from "../../model";
import { Invite } from "../invite/Invite";

import css from "./InvitesList.module.scss";

interface InvitesListProps {
    className?: string;
}

export const InvitesList = memo((props: InvitesListProps) => {
    const { className } = props;

    const invites = useUnit($invites);

    return (
        <div className={clsx(css.InvitesList, className)}>
            {invites.length === 0 ? (
                <p>Список приглашений пуст</p>
            ) : (
                <>
                    {" "}
                    <div className={css.title}>
                        <p className={css.email}>Email</p>
                        <p className={css.date}>Дата отправки</p>
                        <p className={css.status}>Статус</p>
                    </div>
                    {invites.map((invite) => (
                        <Invite key={invite.id} invite={invite} />
                    ))}
                </>
            )}
        </div>
    );
});
