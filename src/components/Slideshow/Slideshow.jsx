import React from "react";

import chevron from "../../assets/img/Icons/chevronUp.svg";

const Slideshow = () => {
    return (
        <div className="slideshow-container">
            <img src="" alt="" className="slideshow-picture" />
            <div className="chevron-container">
                <img
                    src={chevron}
                    alt="Icone chevron"
                    className="chevron-left"
                />
                <img
                    src={chevron}
                    alt="Icone chevron"
                    className="chevron-right"
                />
            </div>
            <p className="slideshow-count">1/4</p>
        </div>
    );
};

export default Slideshow;
