import "../../assets/css/combo/index.css";
import React from "react";

const Combo = ({
    value,
    imageSrc,
    title,
    subTitle,
    color,
    nome,
    onCheckboxChange,
    text,
}) => {
    return (
        <main className="mainCombo1" style={{ backgroundColor: color }}>
            <div className="imgCombo1">
                <img src={imageSrc} alt="Combo 1" />
            </div>

            <div className="title">
                <h2>{title}</h2>
                <h4>{subTitle}</h4>
            </div>

            <div className="itensCombo1">
                <p>{text}</p>
            </div>
            <label>
                <input
                    type="checkbox"
                    name={nome}
                    value={value}
                    onChange={onCheckboxChange}
                />
                Valor: R$ {value},00
            </label>
        </main>
    );
};

export default Combo;
