import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button";
import { useCounterActions } from "../model/slice/counterSlice";
import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { decrement, increment, add } = useCounterActions();

    const handleDec = () => {
        decrement();
    };

    const handleInc = () => {
        increment();
    };

    const handleAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={handleInc} data-testid="increment-btn">
                {t("Increment")}
            </Button>
            <Button onClick={handleDec} data-testid="decrement-btn">
                {t("Decrement")}
            </Button>
            <Button onClick={handleAddFive} data-testid="add-btn">
                {t("add 5")}
            </Button>
        </div>
    );
};
