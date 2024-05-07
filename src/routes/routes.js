import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/pageNotFound/index.js";
import App from "../App.js";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
