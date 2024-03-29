import { createRoot } from "react-dom/client";
import { App } from "./app";
import { appStarted } from "./shared/config/init";

const container = document.getElementById("root");
if (!container) {
    throw new Error("Не найден контейнер приложения!");
}
const root = createRoot(container);

appStarted();
root.render(<App />);
