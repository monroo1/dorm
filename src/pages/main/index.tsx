import { createRouteView } from "atomic-router-react";
import { Main } from "./ui/Main";
import { authorizedRoute, currentRoute } from "./model";
import { PageLoader } from "@/shared/ui/pageLoader/PageLoader";

export const MainRoute = {
    view: createRouteView({
        route: authorizedRoute,
        view: Main,
        otherwise: PageLoader,
    }),
    route: currentRoute,
};
