import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <BrowserRouter>
            {/* Si une erreur quelconque arrive en cours de route */}
            <Routes errorElement={<NotFound />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* Toute autres pages que celles mentionnées seront des pages d'erreur 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
