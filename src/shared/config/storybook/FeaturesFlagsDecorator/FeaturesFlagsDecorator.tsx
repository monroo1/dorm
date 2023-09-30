import { ComponentType } from "@react-spring/web";
import { setFeatureFlags } from "@/shared/lib/features";
import { FeatureFlags } from "@/shared/types/featureFlags";

export const FeaturesFlagsDecorator =
    (features: FeatureFlags) => (Story: ComponentType) => {
        setFeatureFlags(features);
        return <Story />;
    };
