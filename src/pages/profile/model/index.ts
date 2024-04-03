import { getInvitesFx } from "@/entities/invite";
import { chainAuthorized } from "@/entities/viewer";
import { routes } from "@/shared/config/routing";

export const currentRoute = routes.profile;
export const authorizedRoute = chainAuthorized(currentRoute, {
    otherwise: routes.auth.signIn.open,
});

currentRoute.opened.watch(() => getInvitesFx());
