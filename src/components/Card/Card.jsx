import React from "react";
import { useState, useEffect } from "react";

const Card = () => {
    //locationData sera un tableau vide lors du premier rendu
    const [locationData, setLocationData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("logements.json");
            const data = await response.json();
            setLocationData(data);
        }
        fetchData();
    }, []);

    return (
        <section className="card-container">
            {locationData.map((location, index) => (
                <div className="card" key={index}>
                    <div className="card-overlay">
                        <img
                            src={location.cover}
                            alt={location.title}
                            className="card-picture"
                        />
                        <h2 className="card-title">{location.title}</h2>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Card;
