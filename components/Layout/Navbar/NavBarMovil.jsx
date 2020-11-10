import { css } from '@emotion/core'

const Row = css `

    width: 93%;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
`
const shopping = css`

    height: 100vh;
    position: fixed;
    top: 0;
    right:0;
    background: white;
    font-family: "Roboto", sans-serif;
    transition: all 0.3s linear;
    z-index: 2;
    display:none;

    @media (max-width: 768px) {
  
        height: 92.7vh;
        display:block;
    }   

    @media (min-width: 350px) {

        width: 100%;
    }
    @media (min-width: 1000px) {

        width: 500px;
    }
` 
const TitleNav = css`

    display: flex;
    justify-content:space-between;
    width: 100%;
    padding-left: 40%;
    padding-top: 0.7rem;
    padding-bottom: 1em;

    button{

        border:2px solid #FF8B00;
        background: white;
        color:#FF8B00;
        border-radius: 25px;
     }

     a{

         color:#FF8B00;
         font-family: "Mr Dafoe",cursive;
         font-size: 23px;

     }
`
const Perfil = css`

     display: flex;
     margin-bottom: 2rem;

     .PerfilImg{

         width: 45px;
         height: 45px;
         background: blueviolet;
         border-radius: 25px;
         margin-right: 0.5rem;
     }

     .TextPerfil{

        font-weight: bold;
        color: #332927;
        font-size: 22px;
     }
`
const MyAccount = css`


    height: 70vh;
    .TitleAccount{
        
        border-bottom: 1px solid #e5edef;

        h4{

            font-size: 14px;
            padding-bottom: 0.8rem;
        }
    }

    ul{

        padding-top: 0.5rem;
        font-size: 14px;

        .fas{
                color:#FF8B00;
                padding-bottom: 1.5rem;
        }

        .FasOne{

            padding-right: 0.7rem;
            padding-top: 0.8rem;
        }

        .FasTwo{

            padding-right: 0.6rem;
        }
    }


`

function NavBarMovil()  {
    return ( 

        <div css ={shopping}>
            <div css ={Row}>
                <div css ={TitleNav}>
                    <a href="">Victory</a>
                    <button>Cerrar</button>
                </div>
                <div css ={Perfil}>
                    <div className = "PerfilImg">
                        <img src="" alt=""/>
                    </div>
                    <h6 className ="TextPerfil">Brayan</h6>
                </div>
                <div css ={MyAccount}>
                    <div className = "TitleAccount">
                        <h4>Mi cuenta</h4>
                    </div>
                    <ul>
                        <li>
                            <i className="fas fa-cog FasOne"></i>
                            <a href="">Ajustes de cuenta</a>
                        </li>

                        <li>
                            <i className="fas fa-ticket-alt FasTwo"></i>
                            <a href="">Ingresar cupón</a>
                        </li>
                        <li>
                            <i className="fas fa-shopping-basket FasTwo"></i>
                            <a href="">Ultimas ordenes</a>
                        </li>
                        <li>
                            <i className="fas fa-exclamation-circle FasTwo"></i>
                            <a href=""> Centro de Ayuda</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button>Cerrar sesión</button>
                </div>
            </div>
        </div>
     );
}
 
export default NavBarMovil;