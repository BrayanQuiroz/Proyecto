import { Paymet, RowSubTotal, PaymetTitle, PaymetCart, PaddindOne, RadioContainer, ImgPaymetCart } from './styles'


function Method(){
        
    return(

        <Paymet>
            <RowSubTotal>
                <PaymetTitle>
                    <span>Métodos de pago</span>
                </PaymetTitle>
                <PaddindOne>
                    <RadioContainer>
                        <label htmlFor ="visa" >
                            <ImgPaymetCart>
                                <img src="/static/img/visa.jpg" alt=""/>
                            </ImgPaymetCart>
                            <p>Pagar con tarjeta débito</p>
                            <input type="radio" name="pago" id="visa"/>
                            <span className = "circles"></span>
                        </label>
                    </RadioContainer>
                </PaddindOne>
                <PaddindOne>
                    <RadioContainer>
                        <label htmlFor ="entrega" >
                            <ImgPaymetCart>
                                <img  src="/static/img/entrega.jpg" alt=""/>
                                <span>Pagar contra entrega</span>
                                <input type="radio" name="pago" id="entrega"/>
                                <span className = "circle"></span>
                            </ImgPaymetCart>
                        </label>
                    </RadioContainer>
                </PaddindOne>
            </RowSubTotal>
        </Paymet>
    )
}
 
export default Method;