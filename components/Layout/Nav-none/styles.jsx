import styled from '@emotion/styled'
import {css} from '@emotion/core'


export const NavContainer = styled.nav`

    border-bottom: 1px solid #FF8B00;
    position: sticky;
    top: 0;
    z-index:1;
    background: white;
    display: none;

    @media only screen and (min-width: 1020px) {

        display: block;
    }
`

export const  RowMain  = styled.div`

    width:100%;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;

    i{

        /* display: none; */
    }
`

const DFlex = css `

    display: flex;
    align-items: center; 

`

export const ContainerNav = styled.div`

    display: flex;
    width: 100%;
    height: 60px; 
    font-family: 'Lato', sans-serif;
    justify-content: space-between;

    i{
            
        color:#FF8B00;
        font-size: 25px;
    }
`

export const LogoContent = styled.div`

    ${DFlex}
    img{

        left: 500px;
        margin-right: 0.5em;
        height: 40px;
    }

    a{

        display:none;
    }

    @media (min-width: 768px) {

        a{

            display:block;
            font-family: "Mr Dafoe", cursive;
            color: #FF8B00;
            font-size: 2.4rem;
            cursor: pointer;
        }
    }   
`

// TextNav

export const Flex = styled.div `
    
    display: flex;
    align-items: center; 
`

export const Search = styled.div`

    margin-right: 0.8rem;
    width: 100%;
    input{

        border: none;
        border-radius: 5px;
        width: 100%;
        padding-top: 0.7rem;
        padding-bottom: 0.7rem;
        padding-left: 1rem;
        border-radius: 6px;
        background: #F7F7F7;
        margin-right: 2rem;
    }

    @media (min-width: 768px) {

        input {

            padding-left: 1em;
            padding-top: 0.7rem;
            padding-bottom: 0.7rem;
            border-radius: 6px;
            width: 400px;
            background: #F7F7F7;
        }
    }

    input::placeholder {
        color: #9d9d9d;
        font-weight: 600;
        font-size: 14px;
    }
`

export const UlContainer = styled.div `
    
    display: none;

    @media (min-width: 768px) {
        display: block;
    }

    .ul-list{

        display: flex;

        li {

            display: flex;
            align-items: center;
            margin-left: 1.5em;
            margin-right: 1.5em;
            font-size: 14px;
            font-family: "Lato", sans-serif;
            justify-content: center;
        }

        a.TextColor{

            color: #7d7d7d;
        }

        a.TextColor:hover{

            color:#FF8B00;
        }
    }
`

export const Contact = styled.li `

    a{

        border: 2px solid #FF8B00;
        padding: 0.4em;
        padding-left: 1.5em;
        padding-right: 1.5em;
        border-radius: 5px;
        font-size: 14px;
        color:#FF8B00;
    }

    

    a:hover{

        background: #FF8B00;
        color:white;
    }
`
export const CartIcon = styled.button `

    color: red;
    cursor: pointer;
    background: none;
    border: none;
`


// Carpeta Nav

export const Row = styled.div `

    width: 95%;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
`
export const NavContainerTwo = styled.nav`

    border-bottom: 1px solid #FF8B00;
    position: sticky;
    top: 0;
    z-index:1;
    background: white;
`

// Text Nav

// const DFlex = css `

//     display: flex;
//     align-items: center; 
//     width: 80%;
// `

export const shopping = styled.div`

    height: 100vh;
    width: 500px;
    position: fixed;
    top: 0;
    right:0;
    background: #e6ecf1;
    font-family: "Roboto", sans-serif;
    /* transform: translateX(100%); */
    width: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s linear;
    z-index: 2;

    @media (max-width: 768px) {

        height: 92.7vh;
    }

    @media (min-width: 350px) {

        width: 100%;
    }
    @media (min-width: 1000px) {

        width: 500px;
    }
`

export const DFlexTwo = css `

    display: flex;
    align-items: center; 
    width: 80%;
`