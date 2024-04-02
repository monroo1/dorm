import { RouterProvider } from "atomic-router-react";
import { Pages } from "@/pages";
import { router } from "@/shared/config/routing";

import "./styles/index.scss";

export function App() {
    return (
        <RouterProvider router={router}>
            <Pages />
        </RouterProvider>
    );
}
