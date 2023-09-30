import { Decorator } from "@storybook/react";
import { setFeatureFlags } from "@/shared/lib/features";
import { getAllFeatureFlags } from "@/shared/lib/features/lib/setGetFeatures";

export const NewDesignDecorator: Decorator = (Story) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });
    return (
        <div className="app_redesigned">
            <Story />
        </div>
    );
};
