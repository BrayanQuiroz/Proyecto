import { css } from '@emotion/core'

const ImgContent = css`

    display: flex;

    img {
        width: 100%;
    }

    @media (min-width: 768px) {

        padding: 2em;
        background: white;

        img {

            width: 520px;
            height: 410px;
        }
    }
`

function ImgProduct(){

        return(

            <div css ={ImgContent}>
                <img src="./static/img/product-1-desktop.jpg" alt=""/>
            </div>
        )
}
 
export default ImgProduct;