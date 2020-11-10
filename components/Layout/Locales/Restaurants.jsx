import ItemLocals from './ItemLocals'
import RestaurantLeft from './RestaurantLeft'
import { ZoneRestaurant,RestaurantRight, ListMobil } from './styles'


function Restaurants(){

    return(
        
        <ZoneRestaurant>
            <RestaurantLeft/>
            <RestaurantRight>
                <header className = "Headers">
                    <div className = "HeadersTitle">
                        <p>Restaurantes en tu zona:</p>
                    </div>
                </header>
                <ListMobil>
                    <p>Categorias:</p>
                        <ul className = "categories-ul">
                            <li><a href="">Todos</a></li>
                            <li><a href="">Pollo a la plancha</a></li>
                            <li><a href="">Pescado</a></li>
                            <li><a href="">Comida rapida</a></li>
                            <li><a href="">Vegetariano</a></li>
                    </ul>
                </ListMobil>
                <ItemLocals/>
            </RestaurantRight>
        </ZoneRestaurant>
    )
}
 
export default Restaurants;