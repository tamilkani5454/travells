import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context/context";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
    <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
    }}>
        <AppProvider>
            <App />
        </AppProvider>
    </BrowserRouter>
);
