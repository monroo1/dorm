import { chainAnonymous } from "@/entities/viewer";
import { routes } from "@/shared/config/routing";

export const currentRoute = routes.auth.signUp;
export const anonymousRoute = chainAnonymous(currentRoute, {
    otherwise: routes.discussions.open,
});
