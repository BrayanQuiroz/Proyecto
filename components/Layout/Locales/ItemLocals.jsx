import { NewLocal, RestaurantContent, ImgRestaurant, ContentText, ButtonAdd } from './styles'

function ItemLocals(){

        return(

                <NewLocal>
                    <RestaurantContent> 
                        <ImgRestaurant>
                            <img src="/static/img/restaurant.jpg" alt=""/>
                        </ImgRestaurant>
                        <ContentText>
                            <p>Locos burgert</p>
                            <p>Comida rapida, batidos  </p>
                        </ContentText>
                        <ButtonAdd>
                            <button className="button"> Ver Local</button>
                        </ButtonAdd>
                    </RestaurantContent>
                </NewLocal>
        )
}
 
export default ItemLocals;