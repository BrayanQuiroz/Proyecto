import styled from '@emotion/styled'

export const Row = styled.div`

    width: 95%;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
`

export const Title = styled.div`

    border-left: 6px solid #FF8B00;
    padding: 0.5em 0 0.5em 0.5em;
    font-family: "Roboto", sans-serif;
    margin-top: 1.5em;
    margin-bottom: 1em;
    color: #7d7d7d;
    font-size: 20px;
`

export const OfertContent = styled.div`

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    

    .ImgContent{

        img{

            width: 100%;
            height: 150px;
            border: 10px;

        }

        @media (min-width: 1366px){

            img{

                height: 180px;

            }
            
        }
    }


    .ImgContent-2{

        background: white;
        
        img{

            width: 100%;
            height: 100px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        @media (min-width: 1366px){

            img{

                height: 120px;

            }
        }
    }


    @media (min-width: 768px) { 

        .ImgContent, .ImgContent-2{
            
            width: 16%;
        }
    }    
`
export const TextItem = styled.div`

    display:flex;
    justify-content:space-between;
    margin:0.5rem;

    .textname{
        
        font-size:14px;
        color: #7d7d7d;
    }
`

export const ButtonItem = styled.div`

    button{

        border: none;
        width: 100%;
        padding: 0.5em 1em 0.5em 1em;
        background: #FF8B00;
        color: white;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
`
