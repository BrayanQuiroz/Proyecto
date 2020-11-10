import { Row, OfertContent, Title, TextItem, ButtonItem } from './styles'


function Restaurant(){

        return(

            <Row>
                <Title>
                    <p>Locales de comida y restaurants</p>
                </Title>
                <OfertContent>
                    <div  className="ImgContent-2">   
                        <div>
                            <img src="/static/img/restaurant.jpg" alt=""/>
                        </div>
                        <TextItem>
                            <div>
                                <p>Crispy Chiken</p>
                                <p className="textname">Pollo, verduras</p>
                            </div>
                        </TextItem>
                        <ButtonItem>
                            <button> Ver Local</button>
                        </ButtonItem>
                    </div>
                </OfertContent>
            </Row>
        )
}
 
export default Restaurant;