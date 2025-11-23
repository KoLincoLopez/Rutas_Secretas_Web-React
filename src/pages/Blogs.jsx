import React from 'react';
import "../styles/blogs.css"

export const Blogs = () => {
  return (
    <>
    <br/><br/><br/>
    <section className="blog-section">
        <h1>Nuestro Blog de Viajes</h1>
        <p>Descubre experiencias únicas, consejos y relatos de aventuras por Chile.</p>

        <div className="container">
            <div className="card">
                <img src="https://picsum.photos/id/1018/800/400" className="card-img-top" alt="Patagonia" />
                <div className="card-body">
                    <h5 className="card-title">Explorando la Patagonia</h5>
                    <p className="card-text">Una guía para recorrer uno de los destinos más impresionantes de Chile.</p>
                    <a href="#" className="btn btn-primary">Leer más</a>
                </div>
            </div>
            <div className="card">
                <img src="https://picsum.photos/id/1025/800/400" className="card-img-top" alt="Atacama" />
                <div className="card-body">
                    <h5 className="card-title">Magia en el Desierto de Atacama</h5>
                    <p className="card-text">Descubre los paisajes surrealistas del desierto más árido del mundo.</p>
                    <a href="#" className="btn btn-primary">Leer más</a>
                </div>
            </div>
            <div className="card">
                <img src="https://picsum.photos/id/1039/800/400" className="card-img-top" alt="Valparaíso" />
                <div className="card-body">
                    <h5 className="card-title">Colores de Valparaíso</h5>
                    <p className="card-text">Arte urbano, cerros vibrantes y la magia bohemia del puerto principal.</p>
                    <a href="#" className="btn btn-primary">Leer más</a>
                </div>
            </div>
        </div>
    </section>
    <br/><br/><br/><br/>
    </>
  );
};