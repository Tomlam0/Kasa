import React from "react";

import emptyStar from "../../assets/img/Icons/emptyStar.svg";

import styles from "./rate.module.scss";

const Rate = ({ score, rating }) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(score);
        } else {
            stars.push(emptyStar);
        }
    }

    return (
        <div className={styles.container}>
            {stars.map((star, index) => (
                <img
                    key={index}
                    src={star}
                    alt="étoile"
                    className={styles.star}
                />
            ))}
        </div>
    );
};

export default Rate;
