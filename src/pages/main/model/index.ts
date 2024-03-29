import { chainAuthorized } from "@/entities/viewer";
import { routes } from "@/shared/config/routing";

export const currentRoute = routes.discussions;
export const authorizedRoute = chainAuthorized(currentRoute, {
    otherwise: routes.auth.signIn.open,
});
