import { ShoppingFooter, ButtonShopping } from './styles'


function Footer(){

    return(

        <ShoppingFooter>
            <div className = "ShoppingFooterRow">
                <div className = "ShoppingFooterSubTotal">
                    <p>SubTotal: </p>
                    <p>S/. 14.50</p>
                </div>
                <ButtonShopping>Continuar</ButtonShopping>
            </div>
        </ShoppingFooter>
    )
}
 
export default Footer;