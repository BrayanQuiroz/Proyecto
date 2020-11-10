import { FooterMain, FooterTop, FotterOne, FooterBottom,  } from './styles'


function Footer(){

    return(

        <FooterMain>
            <FooterTop>
                <div className = "FooterTop" >
                    <FotterOne>
                        <span>Categorías</span>
                        <ul>
                        <li><a href="">Tiendas</a></li>
                        <li><a href="">Locales</a></li>
                        <li><a href="">Reservas </a></li>
                        </ul>
                    </FotterOne>
                    <FotterOne>
                        <span>Información de interés</span>
                        <ul>
                            <li><a href="">Términos y condiciones</a></li>
                            <li><a href="">Aviso de privacidad</a></li>
                            <li><a href="">Quiero ser Repartidor</a></li>
                            <li><a href="">Trabaja con nosotros</a></li>
                        </ul>
                    </FotterOne>
                    <FotterOne>
                        <span className = "download">Descarga la App</span>
                        <ul> 
                            <li>
                                <img src="/static/img/android.png" alt=""/>
                            </li>
                        </ul>
                    </FotterOne>
                </div>
            </FooterTop>
            <FooterBottom>
                <div className = "FooterBottom">
                    <div className = "FooterText">
                        <span>Copyright © 2018 Footer. Todos los derechos reservados.</span>
                    </div>
                    <div className = "FooterText">
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </FooterBottom>
            <script src="app.js"></script>
        </FooterMain>
    )
}

export default Footer;