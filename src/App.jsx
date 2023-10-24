import { useState } from "react";
import "./App.css";
import Api from "./assets/components/Api";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Buscador from "./assets/components/Buscador";

function App() {
    const [filtro, setFiltro] = useState("");

    return (
        <div className="container">
            <Header />
            <Buscador filtro={filtro} setFiltro={setFiltro}></Buscador>
            <Api filtro={filtro}></Api>
            <Footer />
        </div>
    );
}

export default App;
