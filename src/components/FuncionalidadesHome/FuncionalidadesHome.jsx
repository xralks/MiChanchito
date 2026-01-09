import "./FuncionalidadesHome.css";
import imgtelefono from "../../assets/imgtelefono.webp";

const FuncionalidadesHome = () => {
    return (
        <section className="seccionFuncionalidades">
            <div className="funcionalidadesseccion1">
                <h2> <span className="subrayado">Funcionalidades flexibles</span> para tu estilo de vida</h2>
            </div>
            <div className="contenedorFunciones">
                <div className="contenedorImgFuncionalidad">
                    <img src={imgtelefono} alt="hola" />
                </div>
                <div className="funcionalidadesseccion2">
                    <div className="funcionalidadItem">
                        <h3>Metas de <span className="subrayado">Ahorro</span></h3>
                        <p>Define objetivos financieros y monitorea tu progreso de ahorro en tiempo real.</p>
                    </div>
                    <div className="funcionalidadItem">
                        <h3><span className="subrayado">Visualización</span> con Gráficos</h3>
                        <p>Analiza tus gastos, ahorros y metas mediante gráficos claros e intuitivos para una mejor toma de decisiones.</p>
                    </div>
                    <div className="funcionalidadItem">
                        <h3><span className="subrayado">Control</span> de Gastos Hormiga</h3>
                        <p>Identifica y reduce pequeños gastos diarios con ayuda de inteligencia artificial.</p>
                    </div>
                    <div className="funcionalidadItem">
                        <h3>Comparación <span className="subrayado">Inteligente</span> de Precios</h3>
                        <p>Utiliza IA para analizar y comparar precios en la web, ayudándote a comprar siempre al mejor costo.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FuncionalidadesHome;

