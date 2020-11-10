import { Flex, Search, UlContainer, Contact, CartIcon } from './styles'
import Link from 'next/link'


function TextNav(){

        return(

            <Flex>   
                <Search>
                    <input type="text" placeholder="Buscar pedidos..."/>
                </Search>
                <UlContainer>
                    <ul className = "ul-list">
                        <li>
                            <Link href = "/">
                                <a className = "TextColor">Inicio</a>
                            </Link>
                        </li>
                        <li>
                            <Link href = "/Local">
                                <a className = "TextColor"  href="#">Locales</a>
                            </Link>
                        </li>
                        <li>
                            <Link href = "/Pedidos">
                                <a className = "TextColor"  href="#">Pedidos</a>
                            </Link>
                        </li>
                        <Contact><a href="#">Contactanos</a></Contact>
                    </ul>
                </UlContainer>
                <CartIcon><i className="flaticon-supermercado"></i></CartIcon>
            </Flex>
        )
}
 
export default TextNav;