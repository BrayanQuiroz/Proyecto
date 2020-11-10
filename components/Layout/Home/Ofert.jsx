import { Row, Title, OfertContent } from './styles'

function Ofert(){

        return(
    
            <Row >
                <Title>
                    <p>Ofertas de la semana</p>
                </Title>
                <OfertContent>
                    <div className="ImgContent"><img src="/static/img/oferta-1.jpg" alt=""/></div>
                    <div className="ImgContent"><img src="/static/img/oferta-2.jpg" alt=""/></div>
                    <div className="ImgContent"><img src="/static/img/oferta-2.jpg" alt=""/></div>
                    <div className="ImgContent"><img src="/static/img/oferta-3.jpg" alt=""/></div>
                    <div className="ImgContent"><img src="/static/img/oferta-4.jpg" alt=""/></div>
                    <div className="ImgContent"><img src="/static/img/oferta-4.jpg" alt=""/></div>
                </OfertContent>
            </Row>
        )
}
 
export default Ofert;