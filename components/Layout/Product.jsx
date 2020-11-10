import { css } from '@emotion/core'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import NavDescription from './Product/NavDescription'
import ImgProduct from './Product/ImgProduct'
import ProductDescription from './Product/ProductDescription'
import SimilarProduct from './Product/SimilarProduct'

const ContentProduct = css`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    @media (min-width: 1359px) {
        
        flex-direction: row;
    }
`

function Product(){

        return(

            <>
                <Navbar/>
                <NavDescription/>
                <div css ={ContentProduct}>
                    <ImgProduct/>
                    <ProductDescription/>
                </div>
                <SimilarProduct/>
                <Footer/>  
            </>
        )
}
 
export default Product;