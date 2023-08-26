import React from "react";

import { useNavigate } from "react-router-dom";

import styles from "./card.module.scss";

const Card = ({ location }) => {
    const navigate = useNavigate();

    return (
        <div
            className={styles.card}
            onClick={() => navigate("/logement/" + location.id)}
        >
            <div className={styles.cardOverlay}>
                <img
                    src={location.cover}
                    alt={location.title}
                    className={styles.picture}
                />
                <h2 className={styles.title}>{location.title}</h2>
            </div>
        </div>
    );
};

export default Card;
