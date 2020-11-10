import styled from '@emotion/styled'
import { css } from "@emotion/core"

const Row = css `

    width: 95%;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
`

export const FooterMain = styled.footer  `

    ${Row};
    color: #CCCCCC;
    font-family: "Montserrat", sans-serif;
    margin-top: 0.5em;
    font-size: 14px;
    background:white;
`

export const FotterOne = styled.div `  

    .download{

        display:block;
        margin-top: 1.5rem;

        @media (min-width: 700px) {

            margin-top: 0rem;
        }
    }

    ul{

        padding-left: 0;
        margin-top: 0.2em;
    }

    ul > li{

        padding-top: 0.8em;
        font-size: 14px;
        list-style: none;
    }

    span {

        font-weight: 600;
        font-size: 16px;
    }
`

export const FooterTop = styled.div`

    background: white;
    color: black;
    padding-bottom: 1em; 
    ${Row};   

    .FooterTop{

        
        display: flex;
        justify-content: space-between;
        padding-top: 2em;
        padding-bottom: 2em;
        flex-wrap: wrap;
        background:white;

        @media (min-width: 700px) {

            width: 45%;
        }
    } 
`

export const FooterBottom = styled.div`

    background: #454545;

    .FooterBottom{

        ${Row};   
        font-size: 14px;
        padding: 1em 0 1em 0;
        display: flex;
        font-size: 12px;
        flex-wrap: wrap;
        align-items: center;

        @media (min-width: 700px) {

            font-size: 14px;
            align-items: center;
            justify-content: space-between;
        }
    }

    .FooterText{

        @media (max-width: 700px) {
            
            width: 100%;
            text-align:center;
        }

        i{
            margin-top: 0.5rem;
            padding-right: 0.5rem;
            font-size: 15px;
        }
    }
`

// const ImgFooter = css`

//     border-radius: 6px;
// `