import { ProductContainer, ProductRow, ImgProduct, ProductText } from './styles'


function Product(){

    return(

        <ProductContainer> 
            <ProductRow>
                <ImgProduct>
                    <img src="/static/img/meat-4.jpg" alt=""/>
                </ImgProduct>
                <ProductText>  
                    <h3>MilkShake</h3>
                    <p> Leche con helado</p>
                    <h4>S/. 49</h4>
                </ProductText>
            </ProductRow>
        </ProductContainer>
    )
}
 
export default Product;