import { createRouteView } from "atomic-router-react";
import { Main } from "./ui/Main";
import { authorizedRoute, currentRoute } from "./model";
import { PageLoader } from "@/shared/ui/pageLoader/PageLoader";
import { MainLayout } from "@/app/layouts/mainLayout/MainLayout";

export const MainRoute = {
    view: createRouteView({
        route: authorizedRoute,
        view: Main,
        otherwise: PageLoader,
    }),
    route: currentRoute,
    layout: MainLayout,
};
