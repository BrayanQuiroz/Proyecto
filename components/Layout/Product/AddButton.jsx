import { css } from '@emotion/core'

const ContainerQuantity = css`

    padding-bottom: 1em;

    @media (min-width: 768px) {
  
        padding-bottom: 0em;
        display: flex;
        justify-content: space-between;
    }

    h3 {

        padding-top: 1em;
        padding-bottom: 1em;
    }

    @media (min-width: 768px) {

        h3 {

            padding-top: 0.8em;
            padding-bottom: 0.8em;
        }
}
`

const ContentQuantity = css`

    @media (min-width: 768px) {
    
        width: 40%;

    }
`

const Quantity = css`

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const IconsQuantity = css`

    display: flex;

    .IconLess{

        cursor: pointer;
        border: 3px solid #FF8B00;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        padding: 0.3em 0.8em 0.2em 0.5em;

        .fa-minus {
            color: #FF8B00;
        }
    }

    .IconPlus{

        cursor: pointer;
        background: #FF8B00;
        padding: 0.5em 0.8em 0.2em 0.8em;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;

        .fa-plus {
            color: white;
        }
    }
`

const ContainerButton = css`

    padding-top: 1em;

    @media (min-width: 768px) {

        padding-bottom: 1em;
        width: 45%;
        padding-bottom: 0em;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column-reverse;
    }
`

const ButtonAdd = css`
 
    display: flex;
    color: white;
    width: 100%;
    border: none;
    background: #FF8B00;
    border-radius: 10px;
    padding: 0.8em 1em 0.8em 0;
    justify-content: flex-end;

    :active {
        
        background: #cc6f00;
        transform: scale(0.95);
        transition: 0.2s;
    }

    p:nth-child(1) {

        padding-right: 3.5em;
    }

    @media (min-width: 360px) {

        p:nth-child(1) {

            padding-right: 4em;
        }
    }

    @media (min-width: 375px) {

        p:nth-child(1) {
        padding-right: 5em;
        }
    }

    @media (min-width: 414px) {

        p:nth-child(1) {

            padding-right: 6em;
        }
    }

    @media (min-width: 768px) {

        p:nth-child(1) {

            padding-right: 2em;
        }
    }
`

function AddButton(){
    
        return(

            <>
                <div css ={ContainerQuantity}>
                    <div css ={ContentQuantity}> 
                        <h3>Cantidad:</h3>
                        <div css ={Quantity}>
                            <div>
                                <p>1 Plato</p>
                            </div>
                            <div css ={IconsQuantity}>
                                <div className = "IconLess"><i class="fas fa-minus"></i></div>
                                <div className = "IconPlus"><i class="fas fa-plus"></i></div>
                            </div>
                        </div>
                    </div>
                    <div css ={ContainerButton}>
                        <button css ={ButtonAdd}>
                            <p>Añadir pedido</p>
                            <p>S/. 15</p>
                        </button>
                    </div>
                </div>
            </>
        )
}
 
export default AddButton;