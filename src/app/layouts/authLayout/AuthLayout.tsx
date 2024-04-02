import { ReactNode } from "react";

import css from "./AuthLayout.module.scss";

export function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <section className={css.auth}>
            {children}
            <div className={css.bg}>
                <h1>МЫЩага</h1>
                <h3>Закрытое сообщество общежитий</h3>
            </div>
        </section>
    );
}
