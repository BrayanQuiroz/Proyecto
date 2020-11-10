import React from 'react'
import { NavContainer, RowMain, ContainerNav, LogoContent } from './styles'
import TextNav from './TextNav'

function Navbar(){

    return(

        <NavContainer>
            <RowMain>
                <ContainerNav>
                    <a href="#" id="content">  
                        <i className="fas fa-bars"></i>
                    </a>
                    <LogoContent>
                        <img src="/static/img/logo.png" alt=""/>
                        <a>Victory</a>
                    </LogoContent>
                    <TextNav/>
                </ContainerNav>
            </RowMain>
        </NavContainer>
    )
}
 
export default Navbar;