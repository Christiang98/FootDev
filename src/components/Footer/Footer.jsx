import React from 'react'
import "./Footer.css"
export const Footer = () => {
    return (
        <>
            <footer>
                <div className="contenedor-footer-content">
                    <div className="containerSlogan">
                        <h2 className="brand">FootDev</h2>
                        <p className="p">Siguiendo el mundo del deporte</p>
                    </div>
                    <div className="social-media">
                        <div className='firstRedes'>
                            {/* REDES DE ALEXIS */}
                            <div className='RedesAlexis'>
                                <h5>Alexis Martinez</h5>
                                <a href="https://github.com/AlecefeMartinez" class="social-media-icon"  target="_blank">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                                <a href="https://www.instagram.com/martinezalexis_/?igshid=YmMyMTA2M2Y%3D" class="social-media-icon"  target="_blank">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </div>
                            {/* REDES DE CHRISTIAN */}
                            <div className="RedesChris">
                                <h5>Christian Garcia</h5>
                                <a href="https://github.com/Christiang98" class="social-media-icon"  target="_blank">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                                <a href="https://www.instagram.com/chris_gaarcia/" class="social-media-icon"  target="_blank">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </div>
                        </div>
                        <div className='secondRedes'>
                            {/* REDES DE LUCAS */}
                            <div className="RedesLucas">
                                <h5>Lucas Esttamatti</h5>
                                <a href="https://github.com/LucasEsttamatti" class="social-media-icon"  target="_blank">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>

                                <a href="https://www.instagram.com/esttamatti._/" class="social-media-icon"  target="_blank">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </div>
                            {/* REDES DE WILLIAM */}
                            <div className="RedesWilliam">
                                <h5>William Coca</h5>
                                <a href="https://github.com/Cocaw" class="social-media-icon"  target="_blank">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                                <a href="https://www.instagram.com/wcoca/" class="social-media-icon"  target="_blank">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer