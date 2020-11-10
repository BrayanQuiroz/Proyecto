import { css } from '@emotion/core'
import { Row,Title, OfertContent, TextItem, ButtonItem } from './styles'


function NewWeek(){

        return(
            
            <Row>
                <Title>
                    <p>Nuevos de la semana</p>
                </Title>
                <OfertContent>
                    <div  className="ImgContent-2">   
                        <div>
                            <img src="/static/img/meat-desktop.jpg" alt=""/>
                        </div>
                        <TextItem>
                            <div>
                                <p>Crispy Chiken</p>
                                <p className="textname">Pollo, verduras</p>
                            </div>
                            <div>
                                <p>S/. 50</p>
                            </div>
                        </TextItem>
                        <ButtonItem>
                            <button> Ordenar ahora</button>
                        </ButtonItem>
                    </div>
                </OfertContent>
            </Row>
        )
}
 
export default NewWeek;