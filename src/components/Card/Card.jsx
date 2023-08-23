import React, { useState, useEffect } from "react";

import locationData from "../../assets/data/logements.json";

const Card = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        setLocations(locationData);
    }, []);

    return (
        <section className="card-container">
            {locations.map((location, index) => (
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
