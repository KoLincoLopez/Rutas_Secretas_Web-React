import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.css"

export const Home = () => {
  return (
    <div className="home-page-wrapper">
      <main>

        <section className="hero-slider hero-banner hero-style relative">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://termasgeometricas.cl/inicio/_TGE0864.jpg" className="d-block w-100" alt="Bosque y Termas" />
                <div className="carousel-caption d-md-block text-start">
                  <h5 className="display-4 fw-bold">Descubre la magia del sur</h5>
                  <p className="lead">Paisajes ocultos y experiencias sin multitudes.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://observatoriocielosur.cl/wp-content/uploads/2023/07/Guia-de-viaje-de-Valle-Cochamo.webp"
                  className="d-block w-100" alt="Lago y Montaña" />
                <div className="carousel-caption d-md-block text-start">
                  <h5 className="display-4 fw-bold">Explora lugares secretos</h5>
                  <p className="lead">Tours únicos en la naturaleza chilena.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://www.fundacionspa.cl/wp-content/uploads/2024/07/TOCONAO_2.webp" className="d-block w-100"
                  alt="Desierto y Montaña" />
                <div className="carousel-caption d-md-block text-start">
                  <h5 className="display-4 fw-bold">Vive la experiencia local</h5>
                  <p className="lead">Acompañado de guías expertos en cada región.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <section className="py-5 bg-light destacados-section">
          <div className="container">
            <h3 className="text-center mb-5 display-5 fw-light">Paquetes Destacados</h3>


              {/* Tarjeta 1 */}
              <div className="card custom-card">
                <img
                  src="https://mlz713kvh2ay.i.optimole.com/w:1000/h:750/q:mauto/ig:avif/https://alsurexpediciones.cl/wp-content/uploads/2017/08/kayak-petrohue-peulla.jpg"
                  className="card-img-top"
                  alt="Sur"
                />

                <div className="card-body">
                  <h4 className="card-title text-primary">Aventuras: Lagos y Volcanes</h4>

                  <p className="card-text">
                    Descubre la magia del sur entre lagos cristalinos y montañas imponentes.
                    Siente la energía de los volcanes y navega en aguas de un verde intenso.
                  </p>

                  <div className="price-button">
                    <span className="price">$399.835 CLP</span>
                    <Link to="/Detalle.html?id=1" className="btn btn-primary stretched-btn">
                      Ver Más
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tarjeta 2 */}
              <div className="card custom-card">
                <img
                  src="https://pbs.twimg.com/media/DUeITt_X4AAXb1C.jpg"
                  className="card-img-top"
                  alt="Chiloé"
                />

                <div className="card-body">
                  <h4 className="card-title text-primary">Encantos de Chiloé</h4>

                  <p className="card-text">
                    Sumérgete en la cultura y tradición de Chiloé. Palafitos de colores, mitos
                    que viven en cada rincón y sabores únicos de la isla.
                  </p>

                  <div className="price-button">
                    <span className="price">$361.756 CLP</span>
                    <Link to="/Detalle.html?id=2" className="btn btn-primary stretched-btn">
                      Ver Más
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tarjeta 3 */}
              <div className="card custom-card">
                <img
                  src="https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/11/06/interior-de-la-capilla-de-marmol-donde-se-muestra-el-lago-general-carrera-en-chile-1.jpeg"
                  className="card-img-top"
                  alt="Patagonia"
                />

                <div className="card-body">
                  <h4 className="card-title text-primary">Secretos de la Patagonia Norte</h4>

                  <p className="card-text">
                    Atrévete a explorar la Patagonia como nunca antes. Formaciones naturales
                    únicas y paisajes que parecen de otro mundo.
                  </p>

                  <div className="price-button">
                    <span className="price">$618.793 CLP</span>
                    <Link to="/Detalle.html?id=3" className="btn btn-primary stretched-btn">
                      Ver Más
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section className="nosotros py-5 my-5">
          <div className="container">
            <div className="nosotros-titulo text-center mb-5">
              <div className="line mx-3"></div>
              <h2 className="display-6 fw-bold text-dark">Nosotros</h2>
              <div className="line mx-3"></div>
            </div>

            <div className="row nosotros-content align-items-center g-5">
              <div className="col-lg-7 col-md-12 text">
                <p className="lead text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, id? Accusamus, quibusdam
                  id vero alias nobis ipsa deserunt necessitatibus praesentium ipsam harum, magni
                  deleniti reprehenderit nisi provident nam iste. Nemo! Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit.
                  Doloremque repellendus aliquid quas asperiores praesentium inventore officiis
                  temporibus ipsa in cupiditate, necessitatibus id soluta explicabo, iste laboriosam earum vel. Ea, nulla.
                </p>
              </div>

              <div className="col-lg-5 col-md-12 d-flex justify-content-center image">
                <img src="src\assets\Rutas_Secretas-removebg-preview.png" alt="Imagen de la tienda" className="rounded-3 shadow-lg img-fluid" style={{ maxWidth: '450px' }} />
              </div>
            </div>
          </div>
        </section>

        <section className="nosotros-invertido py-5 my-5">
          <div className="container">
            <div className="row nosotros-content flex-lg-row-reverse align-items-center g-5">

              <div className="col-lg-7 col-md-12 text">
                <p className="lead text-secondary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia sapiente provident culpa quod numquam illo exercitationem obcaecati iusto
                  temporibus, rem, ex consectetur, aperiam dolores? Rerum id quisquam commodi molestias minus.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi omnis culpa similique accusantium sint.
                  Debitis corrupti, dignissimos mollitia voluptatum maxime nobis molestias a, numquam nemo quam excepturi illo
                  laborum similique!
                </p>
                <Link to="/Contactos.html" className="btn btn-lg btn-success mt-3">Contáctanos</Link>
              </div>

              <div className="col-lg-5 col-md-12 d-flex justify-content-center image">
                <img
                  src="https://img.freepik.com/foto-gratis/personas-plano-medio-agencia-viajes_52683-136451.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Otra imagen de la empresa" className="rounded-3 shadow-lg img-fluid" style={{ maxWidth: '450px' }} />
              </div>
            </div>
          </div>
        </section>

        <section className="blog-home py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4 display-6 fw-bold">Descubre nuestros blogs</h2>
            <p className="text-center mb-5 lead text-secondary">Conoce historias, rutas secretas y consejos para explorar Chile de manera única.</p>

            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="blog-card position-relative overflow-hidden rounded-3 shadow-lg">
                  <img src="https://kamaleon.viajes/wp-content/uploads/2013/03/Explora-Salto-Chico-Torres-del-Paine_02.jpg"
                    className="img-fluid w-100" alt="Blog destacado" style={{ height: '400px', objectFit: 'cover' }} />
                  <div className="p-4 bg-white blog-summary shadow-sm">
                    <h5 className="blog-title fs-4 fw-bold text-primary">Explorando la Patagonia Secreta</h5>
                    <p className="blog-text text-secondary mb-0">
                      Descubre rutas poco conocidas y paisajes escondidos en la región más austral de Chile.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <h3 className="blog-title fs-2 fw-bold text-dark">Aventuras y Tips de Viaje</h3>
                <p className="blog-text lead text-secondary">
                  Sumérgete en artículos escritos por expertos viajeros. Desde cómo armar tu mochila, hasta los mejores miradores de la Carretera Austral.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Rutas en el Desierto de Atacama.</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Guía de Parques Nacionales.</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Cómo avistar fauna marina en el Pacífico.</li>
                </ul>
                <Link to="/Blogs.html" className="btn btn-primary btn-lg mt-3">Ver todos los blogs</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};