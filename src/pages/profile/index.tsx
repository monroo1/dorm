import { createRouteView } from "atomic-router-react";
import { authorizedRoute, currentRoute } from "./model";
import { PageLoader } from "@/shared/ui/pageLoader/PageLoader";
import { Profile } from "./ui/Profile";
import { MainLayout } from "@/app/layouts/mainLayout/MainLayout";

export const ProfileRoute = {
    view: createRouteView({
        route: authorizedRoute,
        view: Profile,

        otherwise: PageLoader,
    }),
    route: currentRoute,
    layout: MainLayout,
};
