import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/app";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { ForceUpdateProvider } from "@/shared/render/forceUpdate";
import "@/shared/config/i18n/i18n";
import "@/app/styles/index.scss";

const container = document.getElementById("root");
if (!container) {
    throw new Error("Не найден контейнер приложения!");
}
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ForceUpdateProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ForceUpdateProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
