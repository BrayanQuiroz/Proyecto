import { css } from '@emotion/core'

const Row = css `

    width: 95%;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
`

const SimilarContainer = css`

    background: white;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-top: 1rem;
`
const SimilarRow = css`

    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const SimilarTitle = css`

    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: "Roboto", sans-serif;
    border-bottom: 1px solid #ccd8e3;
    margin-bottom: 1rem;

    p {
        
        padding-bottom: 0.5em;
        font-size: 18px;
        font-weight: 600;
    }
`

const SimiliarContent = css`

    width: 48.8%;
    margin-bottom: 0.5em;
    background: white;
    border-radius: 15px;
    margin-bottom: 1em;

    @media (min-width: 768px) {

        width: 16%;
    }
`

const SimilarImg = css`

    img {

        width: 100%;
        height: 100px;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }

    @media (min-width: 768px) {
  
        width: 100%;
        height: 100px;
    }   
`

const SimilarText = css`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .Name{

        padding-top: 0.2em;
        padding-bottom: 0.4em;



        p:nth-child(1) {

            font-size: 15px;
        }

        p:nth-child(2) {

            color: #aaa;
            font-size: 12px;
        }

        @media (min-width: 768px) {

            padding-top: 0.6em;
            padding-bottom: 0.6em;

            p:nth-child(1) {
                font-size: 18px;
            }

            p:nth-child(2) {

                font-size: 15px;
            }
        }
    }

    .Price{

        padding-top: 0.2em;

        @media (min-width: 768px) {

            padding-top: 0.6em;
            
            p {

                font-size: 18px;
            }
        }
    }
`
const SimilarAdd = css`

    display: flex;
    justify-content: center;

    button {

        width: 100%;
        border: none;
        padding: 0.5em 1em 0.5em 1em;
        background: #FF8B00;
        color: white;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        :active {

            color: #e6e6e6;
            background: #cc6f00;
            transition: 0.3s;
        }
    }

    @media (min-width: 768px) {

        width: 100%;

        button {
            width: 100%;
            font-size: 18px;
        }
    }
`

function SimilarProduct(){

        return(

            <>          
                <div css={[SimilarContainer, Row]}>
                    <div css ={ Row}>
                        <div css ={SimilarRow}>
                            <div css ={SimilarTitle}>
                                <p css ={Row}>Productos similares</p>
                            </div>
                            <div css ={[SimiliarContent, Row]}>
                                <div css ={SimilarImg}>
                                    <img src="/static/img/meat-3-desktop.jpg" alt=""/>
                                </div>
                                <div css ={[SimilarText, Row]}>
                                    <div className = "Name">
                                        <p>Crispy Chiken</p>
                                        <p>Pollo, verduras</p>
                                    </div>
                                    <div className = "Price">
                                        <p>S/. 50</p>
                                    </div>
                                </div>
                                <div css ={SimilarAdd}>
                                    <button>Ordenar ahora</button>
                                </div>
                            </div>
                            <div css ={[SimiliarContent, Row]}>
                                <div css ={SimilarImg}>
                                    <img src="/static/img/meat-3-desktop.jpg" alt=""/>
                                </div>
                                <div css ={[SimilarText, Row]}>
                                    <div className = "Name">
                                        <p>Crispy Chiken</p>
                                        <p>Pollo, verduras</p>
                                    </div>
                                    <div className = "Price">
                                        <p>S/. 50</p>
                                    </div>
                                </div>
                                <div css ={SimilarAdd}>
                                    <button>Ordenar ahora</button>
                                </div>
                            </div>
                            <div css ={[SimiliarContent, Row]}>
                                <div css ={SimilarImg}>
                                    <img src="/static/img/meat-3-desktop.jpg" alt=""/>
                                </div>
                                <div css ={[SimilarText, Row]}>
                                    <div className = "Name">
                                        <p>Crispy Chiken</p>
                                        <p>Pollo, verduras</p>
                                    </div>
                                    <div className = "Price">
                                        <p>S/. 50</p>
                                    </div>
                                </div>
                                <div css ={SimilarAdd}>
                                    <button>Ordenar ahora</button>
                                </div>
                            </div>
                            <div css ={[SimiliarContent, Row]}>
                                <div css ={SimilarImg}>
                                    <img src="/static/img/meat-3-desktop.jpg" alt=""/>
                                </div>
                                <div css ={[SimilarText, Row]}>
                                    <div className = "Name">
                                        <p>Crispy Chiken</p>
                                        <p>Pollo, verduras</p>
                                    </div>
                                    <div className = "Price">
                                        <p>S/. 50</p>
                                    </div>
                                </div>
                                <div css ={SimilarAdd}>
                                    <button>Ordenar ahora</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>      
        )
}
 
export default SimilarProduct;