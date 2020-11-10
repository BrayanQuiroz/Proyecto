import { NavContainerTwo, RowMain, LogoContent, ContainerNav } from '../Nav-none/styles'
import TextNav from './TextNav'
import Mobil from './NavBarMovil'


function Navbar(){

    return(

        <NavContainerTwo>
            <RowMain>
                <ContainerNav>
                    <a href="">
                        <i className="fas fa-bars" ></i>
                    </a>
                    <Mobil />
                    <LogoContent>
                        <img  src="/static/img/logo.png" alt=""/>
                        <a>Victory</a>
                    </LogoContent>
                    <TextNav/>
                </ContainerNav>
            </RowMain>
        </NavContainerTwo>
    ) 
}
 
export default Navbar;