import React from "react";
import { useState } from "react";

const Collapse = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="collapse-container">
            <div className="collapse-item">
                <div className="collapse-title">
                    <h2>Fiabilité</h2>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="chevron-up"
                    >
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="chevron-down"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
                <p className="content-active">
                    Les annonces postées sur Kasa garantissent une fiabilité
                    totale. Les photos sont conformes aux logements, et toutes
                    les informations sont régulièrement vérifiées par nos
                    équipes.
                </p>
            </div>
        </section>
    );
};

export default Collapse;
