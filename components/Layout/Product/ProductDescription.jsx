import { css } from '@emotion/core'
import AddComplement from './AddComplement'
import AddButton from './AddButton'

const Row = css `

    width: 95%;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
`

const ContainerProduct = css`

    
    font-family: "Roboto", sans-serif;
    width: 100%;

    @media (min-width: 768px) {
         
        height: 474px;
        padding: 2em 2em 2em 2rem;
    }

    @media (min-width: 1400px) {

        padding: 1.5em 1.5em 1.5em 0;
    }
`

const ContainerMain = css`

    width: 100%;
    background: white;

    @media (min-width: 768px) {

        width: 584px;
    }
`

const TitleProduct = css`

    padding-bottom: 0.5em;
    padding-top: 1em;

    @media (min-width: 768px) {

        padding-bottom: 0.3em;
        padding-top: 0em;
    }

    @media (min-width: 1400px) {

        padding-top: 1em;
    }

    @media (min-width: 768px) {

        h1 {
            font-size: 29px;
        }
    }
`

const TextDescription = css`

  color: #b3b3b3;
  text-align: justify;
  padding-top: 0.5em;
  padding-bottom: 0.5em;

    @media (min-width: 768px) {

        p {
            font-size: 15px;
        }
    }
`

function ProductDescription(){

        return(

            <>
                <div css ={ContainerMain}> 
                    <div  css ={[ContainerProduct, Row]}>
                        <div css ={TitleProduct}>
                            <h1>Hamburgesa de carne </h1>
                        </div>
                        <div>
                            <h3>Descripción:</h3>
                        </div>
                        <div css ={TextDescription}>
                            <p>La  hamburgesa tiene carne, lechuga, tomate y salsa el tiempo de espera es de 20 minutos</p>
                        </div>
                        <div>
                            <div>
                                <h3>Añadir extras:</h3>
                            </div>
                            <div css ={TextDescription}>
                                <p>Los pedidos extras requieren un poco más de tiempo aparte del pedido principal. Y para aumentar la cantidad de un extra, lo puede hacer en el carrito de compras.</p>
                            </div>
                            <AddComplement/>
                            <AddButton/>
                        </div>
                    </div>
                </div>
            </>
        )
}
 
export default ProductDescription;