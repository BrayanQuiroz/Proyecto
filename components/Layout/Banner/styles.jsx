import styled from '@emotion/styled'

export const Row = styled.div`

    width: 95%;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
`

export const BannerMain = styled.div`

    img{
        
        display: none;
    }

    @media (min-width: 768px) {

        img{

            width: 100%;
            height: 350px;
            display: block;
        }
    }

`