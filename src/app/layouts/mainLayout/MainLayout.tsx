import { ReactNode } from "react";
import { Header } from "@/widgets/header";

export function MainLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <main className="wrapper">{children}</main>
        </>
    );
}
