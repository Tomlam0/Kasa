import React from "react";

import { useNavigate } from "react-router-dom";

const Error404 = () => {
    const navigate = useNavigate();

    return (
        <section className="error-container">
            <p className="error-404">404</p>
            <p className="error-tagline">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <p className="error-backward" onClick={() => navigate("/")}>
                Retourner sur la page d’accueil
            </p>
        </section>
    );
};

export default Error404;
