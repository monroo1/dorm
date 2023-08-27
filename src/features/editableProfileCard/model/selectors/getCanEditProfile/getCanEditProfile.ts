import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import { getProfileData } from "../getProfileData/getProfileData";

export const getCanEditProfile = createSelector(
    getUserAuthData,
    getProfileData,
    (user, profile) => {
        if (!user || !profile) {
            return false;
        }
        return user?.id === profile?.id;
    },
);
