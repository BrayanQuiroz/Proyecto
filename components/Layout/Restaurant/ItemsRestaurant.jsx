import { css } from "@emotion/core"

const Row = css `

    width: 95%;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
`

const RestaurantContent = css `

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const ImgRestaurant = css`

    img{

        width: 100%;
        height: 100px;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
`

const TitleRestaurant = css`

    width: 100%;
    margin-top: 1.5em;
    margin-bottom: 1em;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    border-left: 6px solid #FF8B00;
    padding: 0.5em 0 0.5em 0.5em;
    font-family: "Roboto", sans-serif;
`

const ItemContent = css`

    width: 48%;
    margin-bottom: 0.5em;
    background: white;
    border-radius: 15px;
    margin-bottom: 1em;

    @media only screen and (min-width: 1300px) {
        
        width: 16.5%;
    }
`
const ContentText = css`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    p:nth-child(2) {
        
        font-size: 15px;
        color: #aaa;
    }
`
const NameContent = css`

    padding-top: 0.6em;
    padding-bottom: 0.6em;
`

const Categories = css `

    width: 100%;

    p {

        font-size: 21px;
        padding-left: 0.7rem;
        padding-bottom: 0.7rem;
        margin-top: 1rem;
        font-weight: 600;
    }

    .categories-ul{

        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 0;
        overflow: auto;
        padding-bottom: 1rem;
        border-bottom: 2px solid #FF8B00;

        li{

            list-style: none;
            background: #FF8B00;
            margin-left: 0.8rem;
            padding: 0.5rem;
            border-radius: 5px;
        }

        li a {
            color: white;
            white-space: nowrap;
        }
    }
`

const ButtonAdd = css`

    button{

        width: 100%;
        border: none;
        padding: 0.5em 1em 0.5em 1em;
        background: #FF8B00;
        color: white;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
`

function ItemsRestaurant(){

        return(
            
            <>

                <div css ={[Categories, Row]}>
                    <p>Categorias:</p>
                    <ul className = "categories-ul">
                        <li><a href="">Todos</a></li>
                        <li><a href="">Nuggets</a></li>
                        <li><a href="">Milkshake</a></li>
                        <li><a href="">Hamburguesa </a></li>
                        <li><a href="">Pollo a la plancha</a></li>
                    </ul>
                </div>
                <div css ={[RestaurantContent, Row]}> 
                    <div css ={TitleRestaurant}>
                        <p>Platos para pedidos:</p>
                    </div>
                    <div css ={ItemContent}>    
                        <div css ={ImgRestaurant}>
                            <img src="/static/img/meat-3.jpg" alt=""/>
                        </div>
                        <div css ={[ContentText, Row]}>
                            <div css ={NameContent}>
                                <p>Hamburgesa</p>
                                <p>Pollo, verduras</p>
                            </div>
                            <div css ={NameContent}>
                                <p>S/. 10</p>
                            </div>
                        </div>
                        <div css ={ButtonAdd}>
                            <button>Ordenar ahora</button>
                        </div>
                    </div>
                    <div css ={ItemContent}>    
                        <div css ={ImgRestaurant}>
                            <img src="/static/img/meat-3.jpg" alt=""/>
                        </div>
                        <div css ={[ContentText, Row]}>
                            <div css ={NameContent}>
                                <p>Hamburgesa</p>
                                <p>Pollo, verduras</p>
                            </div>
                            <div css ={NameContent}>
                                <p>S/. 10</p>
                            </div>
                        </div>
                        <div css ={ButtonAdd}>
                            <button>Ordenar ahora</button>
                        </div>
                    </div>
                </div>
            </>
        )
}
 
export default ItemsRestaurant;