import { rtkApi } from "@/shared/api/rtkApi";
import { FeatureFlags } from "@/shared/types/featureFlags";

interface UpdateFeatureFlagsProps {
    userId: string;
    features: Partial<FeatureFlags>;
}

const featureFlagsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        updateFeatureFlags: build.mutation<void, UpdateFeatureFlagsProps>({
            query: ({ userId, features }) => ({
                method: "PATCH",
                url: `/users/${userId}`,
                body: {
                    features,
                },
            }),
        }),
    }),
});

export const updateFeatureFlagsMutation =
    featureFlagsApi.endpoints.updateFeatureFlags.initiate;
