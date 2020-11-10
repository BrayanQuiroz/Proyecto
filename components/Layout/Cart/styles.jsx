import styled from '@emotion/styled'
import {css} from '@emotion/core'


const rows = css`

    width: 95%;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
`

// Button

export const ButtonRow = styled.div`

    ${rows};
    font-family: "Roboto", sans-serif;
    position: relative;
    margin-top: 1em;
    margin-bottom: 1em;

    button {

        width: 100%;
        border: none;
        background: #FF8B00;
        color: white;
        padding: 1em 0 1em 0;
        border-radius: 10px;
    }


    @media (min-width: 1360px) {

        position: initial;
        bottom: 0;
        width: 400px;
    }   
`
// Comment

export const ComentContainer = styled.div`

    ${rows};
    position: relative;
    background: white;
    border-radius: 10px;
    padding-bottom: 1em;
    padding-top: 1em;
    font-family: "Roboto", sans-serif;
    margin-bottom: 1em;
    margin-top: 1em;

    @media (min-width: 760px) {

        width: 600px;
    }

    @media (min-width: 1360px) {

        width: 400px;
        position: initial;
        bottom: 0;    
    }
`

export const RowSubTotal = styled.div `

    width: 90%;
    max-width: 1208px;
    margin-left: auto;
    margin-right: auto;
`

export const PhoneTitle = styled.div`

    padding-bottom: 1em;

    span {

        font-size: 22px;
        font-weight: 600;
    }
`

export const PhoneTextarea = styled.div`

    textarea {

        width: 100%;
        border: 2px solid #FF8B00;
        border-radius: 10px;
        padding: 0.5em;
    }
`


// METHOD

export const Paymet = styled.div`

    ${rows};
    position: relative;
    background: white;
    border-radius: 10px;
    padding-bottom: 1em;
    padding-top: 1em;
    font-family: "Roboto", sans-serif;

    @media (min-width: 760px) {

        width: 600px;  
    }
    @media (min-width: 1360px) {

        width: 400px;
        position: inherit;
    }
`

export const PaymetTitle = styled.div`

    padding-bottom: 1em;

    span {

        font-size: 22px;
        font-weight: 600;
    }
`

export const PaddindOne = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1em; 
`
export const ImgPaymetCart = styled.div`

    img{
        width: 60px;
        height: 40px;
        margin-right: 1em;
    }

`

export const RadioContainer = styled.div`

    label{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        font-family: sans-serif;

        input {

            display: none;
        }

        .circle {

            display: inline-block;
            width: 17px;
            height: 17px;
            background: #FF8B00;
            position: absolute;
            left: 132%;
            top: 0;
            border-radius: 50px;
            top: 10px;
        }

        @media (min-width: 359px) {

            .circle {

                margin-left: 0.2em;
            }
        }

        .circles {

            display: inline-block;
            width: 17px;
            height: 17px;
            background: #FF8B00;
            position: absolute;
            left: 122%;
            top: 10px;
            border-radius: 50px;
        }

        input:checked + .circle:after {
            content: "";
            height: 9px;
            width: 9px;
            background: white;
            position: absolute;
            border-radius: 50%;
            left: 25%;
            top: 25%;
        }

        @media (min-width: 359px) {

            input:checked + .circle:after {
                left: 23%;
                top: 24%;   
            }
        }

        input:checked + .circles:after {
            content: "";
            height: 9px;
            width: 9px;
            background: white;
            position: absolute;
            border-radius: 50%;
            left: 25%;
            top: 25%;
        }

        @media (min-width: 359px) {

            input:checked + .circles:after {
                left: 23%;
                top: 23%;
            }
        }


    }
`


// PhoneNumber

export const Phone = styled.div`

    ${rows};
    position: relative;
    background: white;
    border-radius: 10px;
    padding-bottom: 1em;
    padding-top: 1em;
    font-family: "Roboto", sans-serif;
    margin-bottom: 1em;
    margin-top: 1em;

    @media (min-width: 760px) {

        width: 600px;
    }

    @media (min-width: 1360px) {

        width: 400px;
        bottom: 0px; 
        height: 125px;   
    }
`


export const PhoneInput = styled.div`

    input {

        width: 100%;
        border: 2px solid #FF8B00;
        border-radius: 10px;
        padding: 0.5em;
    }
`



// PRICE

export const CartPrice = styled.div`

    ${rows};
    font-family: "Roboto", sans-serif;
    background: white;
    height: 100%;
    border-radius: 10px;
    position: relative;
    margin-top: 2em;

    @media (min-width: 760px) {

        width: 600px;
    }

    @media (min-width: 1360px) {

        width: 400px;
        position: initial;
        bottom: 0;
    }
`

export const PriceProductRow = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 0.5em;

    :nth-child(1) {

        padding-top: 1em;
    }

    :last-child {

        padding-bottom: 1em;
    }
`

export const PriceTotalRow = styled.div`

    padding-bottom: 1em;
    border-top: 1px solid #d3dde6;

`


export const PriceTotal = styled.div`

    ${rows};
    padding-top: 1em;
    display: flex;
    justify-content: space-between;
`


// Product

export const ProductContainer = styled.div`

    ${rows};
    font-family: "Roboto", sans-serif;
    background: white;
    height: 100%;
    border-radius: 10px;
    position: relative;
    margin-top: 1em;

    @media (min-width: 760px) {

        width: 600px;
    }

    @media (min-width: 1360px) {
        
        width: 400px;
        position: initial;
    }
`

export const ProductRow = styled.div`
 
    ${rows};
    display: flex;
    height: 100%;
    padding-top: 1em;

    :last-child {
        padding-bottom: 1em;
    }
`

export const ImgProduct = styled.div`

    width: 80px;
    height: 65px;

    img {

        width: 80px;
        height: 65px;
    }
`

export const ProductText = styled.div`

    padding-left: 0.5em;

    h4{
        color: #FF8B00;
    }
`