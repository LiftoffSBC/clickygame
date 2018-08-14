import React from "react";
import "./PonyCard.css";

const PonyCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectPony(props.type)}
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.type} src={props.image} />
            </a>
        </div>
    </div>
);

export default PonyCard;
