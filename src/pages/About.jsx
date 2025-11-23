import React from 'react';
import "../styles/Nosotros.css"

export const About = () => {
    return (
        <div className="nosotros-page-wrapper">
            <section className="hero">
                <h1 className="fs-1 text-center">Descubre Chile de manera única</h1>
            </section>

            <section className="contenido-nosotros px-3">
                <h2 className="text-center mb-4">Quiénes Somos</h2>
                <p className="text-center mb-5">
                    En <strong>Rutas Secretas</strong> nos apasiona mostrar la belleza de Chile más allá de los circuitos
                    turísticos tradicionales.
                    Nos especializamos en <strong>tours por lugares poco conocidos</strong>, pero igual de impresionantes y
                    memorables.
                </p>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card card-nosotros">
                            <img src="https://i0.wp.com/sinmordaza.com/wp-content/uploads/2019/01/PATAGONIA.jpg?fit=696%2C464&ssl=1"
                                className="card-img-top" alt="Patagonia" />
                            <div className="card-body">
                                <h5 className="card-title">Aventuras en la Patagonia</h5>
                                <p className="card-text">Senderos escondidos, glaciares y paisajes que pocos turistas conocen.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card card-nosotros">
                            <img src="https://mayurutour.com/wp-content/uploads/2020/01/Salar-de-surire.jpg"
                                className="card-img-top" alt="Desierto del Norte" />
                            <div className="card-body">
                                <h5 className="card-title">Rincones del Norte</h5>
                                <p className="card-text">Explora valles y salares poco visitados que guardan secretos
                                    milenarios.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card card-nosotros">
                            <img src="https://storage.googleapis.com/chile-travel-cdn/2021/07/lago-llanquihue_prin-min.jpg"
                                className="card-img-top" alt="Lagos del Sur" />
                            <div className="card-body">
                                <h5 className="card-title">Lagos del Sur</h5>
                                <p className="card-text">Rutas fluviales y bosques prístinos para disfrutar de la naturaleza en
                                    su estado más puro.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card card-nosotros">
                            <img src="https://cecinasllanquihue.cl/blog/wp-content/uploads/2021/09/shutterstock_311418290-scaled.jpg"
                                className="card-img-top" alt="Cultura Local" />
                            <div className="card-body">
                                <h5 className="card-title">Cultura y Tradición</h5>
                                <p className="card-text">Conéctate con la historia y la cultura local visitando pueblos y
                                    comunidades auténticas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};