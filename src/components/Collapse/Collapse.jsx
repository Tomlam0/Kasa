import React, { useState } from "react";

import collapseData from "../../assets/data/collapse.json";

import chevron from "../../assets/img/Icons/chevronUp.svg";

// On définir la prop "collapsible" pour le réutiliser dans la page produit
const Collapse = () => {
    // Création d'un tableau d'états pour suivre l'état de chaque collapse individuellement
    // On map les données du JSON et on le déclare en false car de base il est fermé
    const [isOpen, setIsOpen] = useState(collapseData.map(() => false));

    // Lors du clic sur un chevron, ajuste l'état de l'élément collapse correspondant
    // index est natif a la fonction map précédante
    const toggleCollapse = (index) => {
        const newIsOpen = [...isOpen];
        // si la valeur était a false elle passe a true
        newIsOpen[index] = !newIsOpen[index];
        setIsOpen(newIsOpen);
    };

    return (
        <section className="collapse-container collapse-container-about">
            {collapseData.map((data, index) => (
                <div className="collapse-item" key={data.id}>
                    <div className="collapse-bloc-title">
                        <h2>{data.title}</h2>

                        <div onClick={() => toggleCollapse(index)}>
                            <img
                                src={chevron}
                                alt="Icone chevron"
                                className={`chevron ${
                                    isOpen[index] ? "rotated" : ""
                                }`}
                            />
                        </div>
                    </div>
                    <div
                        className={`collapse-bloc-content ${
                            isOpen[index] ? "open" : ""
                        }`}
                    >
                        <h3
                            className={`collapse-content ${
                                isOpen[index] ? "open" : ""
                            }`}
                        >
                            {data.content}
                        </h3>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Collapse;
