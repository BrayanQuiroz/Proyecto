import { CartPrice, RowSubTotal, PriceProductRow, PriceTotal, PriceTotalRow } from './styles'


function Price(){

    return(

            <CartPrice>
                <RowSubTotal>
                    <PriceProductRow>
                        <p>MilkShake</p>
                        <p>S./ 49</p>
                    </PriceProductRow>
                    <PriceProductRow>
                        <p>Pollo Brosther</p>
                        <p>S./ 49</p>
                    </PriceProductRow>
                    <PriceProductRow>
                        <p>Hamburguesa</p>
                        <p>S./ 49</p>
                    </PriceProductRow>
                </RowSubTotal>
                <PriceTotalRow>
                    <PriceTotal>
                        <h2>Total</h2>
                        <h2>S/. 147</h2>
                    </PriceTotal>
                </PriceTotalRow>
            </CartPrice>
        )     
}
 
export default Price;