import { useState } from "react";
import "./App.css";
import "./index.css";
import Combo from "./components/combos/combo.js";
import ImagemCombo1 from "./assets/images/combo1.jpg";
import ImagemCombo2 from "./assets/images/combo2.jpg";
import ImagemCombo3 from "./assets/images/combo3.jpg";

function App() {
    const [total, setTotal] = useState(0);

    const handleCheckboxChange = (event) => {
        const checkboxValue = parseInt(event.target.value);
        if (event.target.checked) {
            setTotal(total + checkboxValue);
        } else {
            setTotal(total - checkboxValue);
        }
    };
    const wpp = `https://wa.me/5511972541352?text=${encodeURIComponent(
        `Gostaria de finalizar a compra.\nTotal = ${total}`
    )}`;

    return (
        <main id="App">
            <h1>Verduras Orgânicas</h1>
            <div className="combos">
                <Combo
                    value={50}
                    imageSrc={ImagemCombo1}
                    title="Cesta Orgânica Pequena"
                    subTitle="Contém 4 tipos de verduras e 4 legumes"
                    color="#33ccff"
                    nome="combo1"
                    onCheckboxChange={handleCheckboxChange}
                    text="Cebola, Pimentão Verde, Pimentão Vermelho, Brócolis,
                    Berinjela, Cenoura, Cheiro Verde, Alho, Couve"
                />
                <Combo
                    value={75}
                    imageSrc={ImagemCombo2}
                    title="Cesta Orgânica Média"
                    subTitle="Contém 6 tipos de verduras e 5 legumes"
                    color="#66ff00"
                    nome="combo2"
                    onCheckboxChange={handleCheckboxChange}
                    text="Cebola, Pimentão Verde, Pimentão Vermelho, Brócolis,
                    Berinjela, Cenoura, Cheiro Verde, Alho, Couve"
                />
                <Combo
                    value={100}
                    imageSrc={ImagemCombo3}
                    title="Cesta Orgânica Grande"
                    subTitle="Contém 8 tipos de verduras e 6 legumes"
                    color="#ccff99"
                    nome="combo3"
                    onCheckboxChange={handleCheckboxChange}
                    text="Cebola, Pimentão Verde, Pimentão Vermelho, Brócolis,
                    Berinjela, Cenoura, Cheiro Verde, Alho, Couve"
                />
            </div>
            <footer>
                <h2>Total: R$ {total},00</h2>
                <a
                    href={wpp}
                    target="_blank"
                    rel="noreferrer"
                    alt="link do whatsapp"
                >
                    <button> Finalizar Compra </button>
                </a>
            </footer>
        </main>
    );
}

export default App;
