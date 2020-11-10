import { css } from '@emotion/core'

const Row = css `

    width: 95%;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
`

const Affiliates = css `

    border-bottom: 1px solid #ccd8e3;
    height: 40px;
    display: none;
    margin-bottom: 1em;
    position: -webkit-sticky;
    position: sticky;
    top: 61px;
    background: #f7f7f7;
    z-index: 1;

    @media (min-width: 768px) {

        display: block;
    }
`
const AffiliatesRow = css`

    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    font-size: 14px;

    a {

        color: #7d7d7d;
        margin-left: 0.5em;
        margin-right: 0.5em;
    }

`

function NavDescription(){

        return(

            <nav css ={Affiliates}>
                <div css ={[AffiliatesRow, Row]}>
                    <a href="">Home</a>
                    <span>{">"}</span>
                    <a href="">Afiliado</a>
                    <span>{">"}</span>
                    <a href="">Tienda</a>
                </div>
            </nav>
        )
}
 
export default NavDescription;