import React from 'react';
import "../styles/blogs.css"

export const Blogs = () => {
    const BlogListItem = ({ month, day, imageUrl, title, metaLine1, metaLine2, description, linkText }) => (
        <div className="blog-item-list-item">
            
            <div className="blog-item-date">
                <span className="blog-item-month">{month}</span>
                <span className="blog-item-day">{day}</span>
            </div>

            <div className="blog-item-image">
                <img src={imageUrl} alt={title} />
            </div>

            <div className="blog-item-details">
                <h3 className="blog-item-title">{title}</h3>
                <p className="blog-item-meta">
                    {metaLine1}
                    <br />
                    {metaLine2}
                </p>
                <p className="blog-item-description">
                    {description}
                </p>
                <a href="#" className="blog-item-link">
                    {linkText} <span className="arrow">→</span>
                </a>
            </div>
        </div>
    );

    return (
        <>
            <br /><br /><br />
            <section className="blog-section">
                <h1>Nuestro Blog de Viajes</h1>
                <p>Descubre experiencias únicas, consejos y relatos de aventuras por Chile.</p>

                <div className="blog-list-container">
                    {/* Primer Artículo del Blog */}
                    <BlogListItem
                        month="JUN"
                        day="23"
                        imageUrl="https://www.ecocamp.travel/hubfs/Patagonia%20United%20/Mirador%20el%20Toro%20Lookout.jpg"
                        title="Explorando la Patagonia Chilena"
                        metaLine1="Torres del Paine, Magallanes"
                        metaLine2="Guía de viaje y tips de fotografía"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, id? Accusamus, quibusdam id vero alias nobis ipsa."
                        linkText="Ver Artículo Completo"
                    />

                    {/* Segundo Artículo del Blog */}
                    <BlogListItem
                        month="JUL"
                        day="04"
                        imageUrl="https://ecotripschile.com/wp-content/uploads/2020/05/tour-miscanti-tour-astronomico.jpg"
                        title="Magia en el Desierto de Atacama"
                        metaLine1="San Pedro de Atacama, Antofagasta"
                        metaLine2="Cielos nocturnos y géiseres"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, id? Accusamus, quibusdam id vero alias nobis ipsa."
                        linkText="Ver Artículo Completo"
                    />

                    {/* Tercer Artículo del Blog */}
                    <BlogListItem
                        month="AUG"
                        day="30"
                        imageUrl="https://www.santiagotours.org/uploads/fotos/foto_4682_c.jpg"
                        title="Colores de Valparaíso"
                        metaLine1="Cerros de Valparaíso, V Región"
                        metaLine2="Arte urbano, funiculares y gastronomía"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, id? Accusamus, quibusdam id vero alias nobis ipsa."
                        linkText="Ver Artículo Completo"
                    />

                    {/* Cuarta Artículo del Blog */}
                    <BlogListItem
                        month="ENE"
                        day="10"
                        imageUrl="https://www.santiagotours.org/uploads/fotos/original/foto_4767_.jpg"
                        title="En la Nieve"
                        metaLine1="Cordillera de Los Andes"
                        metaLine2="Diversion en Alturas"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, id? Accusamus, quibusdam id vero alias nobis ipsa."
                        linkText="Ver Artículo Completo"
                    />
                </div>
            </section>
            <br /><br /><br /><br />
        </>
    );
};