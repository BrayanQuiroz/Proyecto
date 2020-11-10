import { css } from "@emotion/core"

const Row = css `

    @media only screen and (min-width: 1025px) {
        
        width: 95%;
        max-width: 1500px;
        margin-left: auto;
        margin-right: auto;
    }
`

const BannerContent = css`

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 1.3rem;
`
const ImgBanner = css`

    width: 100%;
    height: 280px;

    @media only screen and (min-width: 1300px) {
        
        height: 320px;
    }
`

const NameRestaurant = css`

    color: white;

    .NameRestaurant {

        position: absolute;
        top: 14rem;
        left: 1rem;
    }

    @media only screen and (min-width: 1300px) {

        .NameRestaurant {

            position: absolute;
            top: 13rem;
            left: 3rem;
        }
    }

    @media only screen and (min-width: 1599px) {

        .NameRestaurant {

            position: absolute;
            top: 13rem;
            left: 4rem;
        }
    }

    @media only screen and (min-width: 1919px) {

        .NameRestaurant {

            position: absolute;
            top: 13rem;
            left: 14.5rem;
        }
    }

    @media only screen and (min-width: 2550px) {

        .NameRestaurant {

            position: absolute;
            top: 13rem;
            left: 34.5rem;
        }
    }

    @media only screen and (min-width: 1030px) {

        .NameRestaurant {

            
            font-size: 34px;
        }
    }
`

const IconContent = css `

    display: none;
`
const HorarioContent = css`

    .ContentHorario{

        position: absolute;
        top: 16.3rem;
        left: 1.1rem;
        color:white;
    }


    @media only screen and (min-width: 1300px) {
        
        .ContentHorario {

            top: 15.5rem;
            left: 3rem;
        }
    }

    @media only screen and (min-width: 1599px) {

        .ContentHorario {

            top: 15.5rem;
            left: 4rem;
        }
    }

    @media only screen and (min-width: 1918px) {

        .ContentHorario {

            top: 15.5rem;
            left: 15rem;
        }
    }

    @media only screen and (min-width: 2550px) {

        .ContentHorario {

            top: 15.5rem;
            left: 34.5rem;
        }
    }




`

function Banner(){

        return(

            <>
                <div css ={[BannerContent, Row]}>
                    <div>
                        <img css ={ImgBanner} src="/static/img/rest-fondo.jpg" alt=""/>
                    </div>
                    <div css ={IconContent}>
                        <i className="fas fa-arrow-left"></i>
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div css ={[NameRestaurant]}><h1 className = "NameRestaurant">Locos Burger</h1></div>
                    <div css ={HorarioContent}>
                        <i css ={IconContent} className="fas fa-clock"> </i>
                        <div className = "ContentHorario">
                            <p>Horario de atención: </p>
                            <p>5pm - 12pm</p>
                        </div>
                    </div>
                </div>
            </>
        )
}
 
export default Banner;