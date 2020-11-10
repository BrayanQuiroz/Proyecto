import { css } from '@emotion/core'
import NavNone from './Nav-none/Navbar'
import Price from './Cart/Price'
import Product from './Cart/Product'
import Phone from './Cart/PhoneNumber'
import Coment from './Cart/Coment'
import MethodPay from './Cart/Method'
import ButtonPay from './Cart/Button'

const PriceRow = css`

    @media (min-width: 760px) {

        display: flex;
        justify-content: center;
    }
`
const PriceContainer = css`

    font-family: "Roboto", sans-serif;
    background: #FF8B00;
    height: 30vmax;

    @media (min-width: 760px) {

        width: 650px;
        height: 30vmax;
        margin-top: 2em;
        border-radius: 10px;
    }

    @media (min-width: 1360px) {

        width: 950px;
        height: 0;
        margin-top: 2em;
        border-radius: 10px;
        color: black;
        background: red;
    }
`
const PriceTitle = css`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2em;
    color: white;

    @media (min-width: 1360px) {
        
        color: black;
        padding-top: 0em;
        border-left: #FF8B00 6px solid;

        h1 {
        
            margin-left: 0.5em;
        }

        a {

            cursor: pointer;
            font-weight: bold;
            padding: 0.5em 1em 0.5em 1em;
            border-radius: 15px;    
        }

        a:hover {

            background: #e67d00;
            transition: 0.3s;
        }

    }
`
const PriceContent = css`

    @media (min-width: 1360px) {

        display: flex;
        flex-wrap: wrap;
    }
`

function Cart(){
    
        return(

            <>
                <NavNone/>

                <div css ={PriceRow}>
                    <div css ={PriceContainer}>
                        <div css={PriceTitle}>
                            <h1>Pedidos</h1><a>Cerrar</a>
                        </div>
                        <div css ={PriceContent}>
                            <Price/>
                            <Product/>
                            <Phone/>
                            <Coment/>
                            <MethodPay/>
                            <ButtonPay/>
                        </div>
                    </div>
                </div>
            </>
        )
}
 
export default Cart;