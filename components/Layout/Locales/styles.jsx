import styled from '@emotion/styled'

// Item Local
export const NewLocal = styled.div`

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; 
    width: 100%;
`

export const RestaurantContent = styled.div`

    width: 48%;
    margin-bottom: 0.5em;
    background: white;
    border-radius: 15px;
    margin-bottom: 1em;

    @media only screen and (min-width: 1080px) {
        
        width: 18%;
    }
`

export const ImgRestaurant = styled.div`

    img{


        width: 100%;
        height: 100px;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
`

export const ContentText = styled.div `

    
    width: 95%;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0.6em;
    padding-bottom: 0.6em;

    p:nth-of-type(odd){
        
        font-size: 18px;
    }

    p:nth-of-type(even){

        color: #aaa;
        font-size: 15px;
    }
`

export const ButtonAdd = styled.div`

    display: flex;
    justify-content: center;
    
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

// Restaurant Left
export const TitleRestaurant = styled.div `

    width: 17%;
    display:none;

    @media only screen and (min-width: 700px) {

        display: block;
    }

    p{

        border-left: 6px solid #FF8B00;
        margin-top: 2rem;
        font-size: 18px;
        padding: 0.5rem;
    }

    ul {
        white-space: nowrap;
        margin-top: 2rem;
    }

    ul li > a {

        display: block;
        padding-left: 1rem;
        margin-top: 1rem;
    }   

    ul li > a:hover {
        border-left: 3px solid #FF8B00;
        transition: 0.3s;
        margin-left: 1rem;
    }
`

// Restaurants
export const ZoneRestaurant = styled.div`

    width: 95%;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    font-family: "Roboto", sans-serif;
`

export const RestaurantRight = styled.div`

    width: 100%;

    .Headers{

        margin-top: 2rem;

        .HeadersTitle{

            padding: 0.5rem;
            margin-bottom: 2rem;
            border-left: 6px solid #FF8B00;
            font-family: "Roboto", sans-serif;

            p{

                font-size: 18px;
            }
        }
    }
`

export const ListMobil = styled.div `

    display: block;
    margin-bottom: 2rem;

    p{

        font-size: 18px;
        padding-left: 0.7rem;
        padding-bottom: 0.7rem;
        margin-top: 1rem;
        font-weight: 600;
    }


    .categories-ul{

        width: 100%;
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

    @media only screen and (min-width: 700px) {

        display: none;
    }
`