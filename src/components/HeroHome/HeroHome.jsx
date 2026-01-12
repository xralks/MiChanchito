import "./HeroHome.css";

const HeroHome = () => {
    return (
        <section className="seccionHero">
            <div className="contenidoTextImg">
                <div className="textoHero">
                    <h1>
                        Bienvenido Mi Chanchit@ <span className="subrayado">Tu dinero, más claro que nunca</span>
                        <br />
                        Te ayudamos a ver en qué gastas y cómo puedes <span className="subrayado">ahorrar sin esfuerzo</span>
                    </h1>
                    <p>No dejes pasar estas oportunidades de ahorro.</p>
                    <div className="contenedorBotonesHero">
                        <a className="boton-primario" href="/Login">comenzar ahora</a>
                        <a className="boton-secundario" href="/Nosotros">ver más</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroHome;