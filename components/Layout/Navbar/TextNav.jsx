import React, { useState } from 'react'
import { Flex, Search, UlContainer, Contact, CartIcon, shopping } from '../Nav-none/styles'
import Link from 'next/link'
import FooterShopping from '../CartPay/Footer'



function TextNav() {

    const [cartOpen, setCartOpen] = useState(false)
    const widthCartContent = cartOpen ? "translateX(0%)": "translateX(100%)"

    const openCart = () =>{

        setCartOpen(true)
        document.body.style.overflow = "hideen"
    }
    const closeCart = () =>{

        setCartOpen(false)
        document.body.style.overflow = "scroll"
    }

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
                <CartIcon onClick = {openCart}>
                    <i  className="flaticon-supermercado"></i>
                </CartIcon>
                
                <shopping  style = {{ transform:widthCartContent }}>
          
                    <FooterShopping />
                </shopping>
            </Flex>
        )
}

// const ShoppingHeader = css`

//     background: white;
//     border-bottom: 1px solid #c5d3df;
// `
// const ShoppingTitle = css`

//     padding: 1.5em;
//     border-bottom: 1px solid #c5d3df;
// `
// const ShoppingRow = css`

//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `
// const ShoppingName = css`

//     p {
//     font-size: 40px;
//     font-family: "Mr Dafoe", cursive;
//     color: #FF8B00;
//     }
// `
// const ShoppingClose = css`

//     border: 1px solid #FF8B00;
//     padding: 0.5em 1em 0.5em 1em;
//     border-radius: 25px;
//     width: 100px;
//     height: 35px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     color: #FF8B00;
//     cursor: pointer;

//     :hover {

//         border: 0.2em solid #FF8B00;
//         transition: 0.2s;
//     }

//     :active {

//         transform: scale(0.9);
//         transition: 0.2s;
//     }

//     .shopping-close {

//         font-size: 0.9em;
//     }
// `
// const ShoppingProduct = css`

//     width: 100%;
//     overflow: auto;
//     padding: 0em 1.5em 0.9em 1em;
//     background: white;
//     height: 60vh;

//     @media (min-width: 700px) {
  
//         height: 74.3vh;
//     }
// `
// const ShoppingItems = css`

//     margin-top: 1em;
//     width: 100%;
//     border-bottom: 1px solid #c5d3df;
//     padding-bottom: 0.3em;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// `
// const ShoppingImg = css`

//     display: flex;

//     img {

//         width: 75px;
//         height: 55px;

//         @media (min-width: 700px) {

//             width: 90px;
//             height: 70px;
//         }
//     }
// `
// const ShoppingDescription = css`

//     margin-left: 1em;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;

//     @media (min-width: 350px) {

//         /* margin-left: 0.5em; */
//     }
// `
// const ShoppingProductName = css`

//     p {

//         font-size: 14px;

//         @media (min-width: 700px) {

//             font-size: 16px;
//         }
//     }
// `
// const ShoppingDelete = css`

//     color: red;
//     border-bottom: 1px solid red;
//     width: 42px;

//     span {

//         font-size: 12px;
//         cursor: pointer;
//         padding-top: 0.2em;
//         display: block;

//         span:active {

//             transform: scale(0.95);
//             transition: 0.2s;
//         }

//         @media (min-width: 700px) {

//             font-size: 14px;
//             width: 80px;
//         }
//     }

//     @media (min-width: 70px) {

//         width: 50px;        
//     }

//     :active {

//         transform: scale(0.8);
//         transition: 0.2s;
//     }
// `
// const ShoppingIcons = css`

//     display: flex;
    
//     .Less{

//         border: 3px solid #FF8B00;
//         border-top-left-radius: 15px;
//         border-bottom-left-radius: 15px;
//         padding: 0.2em 0.3em 0.1em 0.2em;
//         cursor: pointer;

//         i {

//             font-size: 14px;
//         }

//         .fa-minus {

//             color: #FF8B00;
//         }

//         :focus {

//             outline: 1px solid red;
//         }

//         :active {

//             transform: scale(0.95);
//             border: 3px solid #cc6f00;
//         }

//         @media (min-width: 700px) {

//             padding: 0.3em 0.5em 0.1em 0.4em;
//         }
//     }

//     .Number{    

//         border-top: 3px solid #FF8B00;
//         border-bottom: 3px solid #FF8B00;
//         padding-left: 0.5em;
//         padding-right: 0.5em;
//         padding-top: 0.2em;

        
//         @media (min-width: 700px) {
    
//             padding-top: 0.3em;
//         }
//     }

//     .Pluss{

//         background: #FF8B00;
//         padding: 0.2em 0.5em 0.1em 0.4em;
//         border-top-right-radius: 15px;
//         border-bottom-right-radius: 15px;
//         cursor: pointer;
//         color:white;

//         i {

//             font-size: 14px;
//         }

//         :active {

//             transform: scale(0.95);
//             background: #cc6f00;
//             transition: 0.2s;
//         }


//         @media (min-width: 700px) {
 
//             padding: 0.4em 0.6em 0.5em 0.5em;
//         }
//     }
// `

// function CartHear(props){

//     const { closeCart } = props

//     return(

//         <div css ={ShoppingHeader}>
//             <div css ={ShoppingTitle}>
//                 <div css ={ShoppingRow}>
//                     <div css ={ShoppingName}>
//                         <small>Tu orden en</small>
//                         <p>Victory</p>
//                     </div>
//                     <div css ={ShoppingClose} onClick = {closeCart}>
//                         <i className="fas fa-times shopping-close"></i><span>Cerrar</span>
//                     </div>
//                 </div>
//             </div>
//             <div css ={ShoppingProduct}>
//                 <div css ={ShoppingItems}> 
//                     <div css ={ShoppingImg}><img src="/static/img/meat-3-desktop.jpg" alt=""/>
//                         <div css ={ShoppingDescription}>
//                             <div css ={ShoppingProductName}>
//                                 <p>MilkShake </p>
//                             </div>
//                             <div css ={ShoppingDelete}>
//                                 <span>Eliminar</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div >
//                         <div css ={ShoppingIcons}>
//                             <div className = "Less">
//                                 <i className="fas fa-minus"></i>
//                             </div>
//                             <div className = "Number">
//                                 <span>1</span>
//                             </div>
//                             <div className = "Pluss">
//                                 <i className="fas fa-plus"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div><span>S/. 14.5</span></div>
//                 </div>
//             </div>
//         </div>
//     )
// }
 
export default TextNav;
