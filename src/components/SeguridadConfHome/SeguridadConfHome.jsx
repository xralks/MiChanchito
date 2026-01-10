import './SeguridadConfHome.css'

const SeguridadConfHome = () => {
    return (
        <section className='seccionSeguridadConf'>
            <div className="contenedorSeguridad">
                <h2>Seguridad y confianza</h2>
                <div className="contenedorItemSeguridad">
                    <div className="itemSeguridad">
                        <h3>No guardan datos bancarios sensibles</h3>
                        <p>Tu información bancaria nunca se almacena en nuestros servidores.</p>
                    </div>
                    <div className="itemSeguridad">
                        <h3>Cumplimiento de normativas</h3>
                        <p>Operamos bajo estándares legales y regulatorios de protección de datos.</p>
                    </div>
                    <div className="itemSeguridad">
                        <h3>Encriptación de datos</h3>
                        <p>Toda tu información está protegida con encriptación de nivel bancario.</p>
                    </div>
                </div>
                <div className="contenedorBarraProgreso">
                    <span className="labelProgreso">Seguridad</span>
                    <div className="barraProgreso">
                        <div className="progreso" style={{ width: "100%" }}></div>
                    </div>
                    <span className="porcentaje">100%</span>
                    <span className="labelProgreso">Protección de información</span>
                    <div className="barraProgreso">
                        <div className="progreso" style={{ width: "100%" }}></div>
                    </div>
                    <span className="porcentaje">100%</span>
                    <span className="labelProgreso">Confiabilidad</span>
                    <div className="barraProgreso">
                        <div className="progreso" style={{ width: "99%" }}></div>
                    </div>
                    <span className="porcentaje">99%</span>
                </div>

            </div>
        </section>
    );

};

export default SeguridadConfHome;