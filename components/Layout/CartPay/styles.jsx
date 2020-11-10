import styled from '@emotion/styled'


export const ShoppingFooter = styled.div`

    background: white;

    .ShoppingFooterRow{

        padding: 1.5em 1.5em 1em 1.5em;
        border-top: 1px solid #c5d3df;

        .ShoppingFooterSubTotal{

            display: flex;
            justify-content: space-between;
        }
    }
`

export const ButtonShopping = styled.button`

    width: 100%;
    border: none;
    background: #FF8B00;
    color: white;
    padding: 0.7em 0;
    margin-top: 1em;
    border-radius: 8px;

    :hover {

        background: #cc6f00;
    }

    :active {

        transform: scale(0.95);
        transition: 0.2s;
    }
`