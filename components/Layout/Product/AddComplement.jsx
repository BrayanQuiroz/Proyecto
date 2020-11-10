import { css } from '@emotion/core'

const OptionOne = css`

    padding-bottom: 0.5em;
    border-bottom: 1px solid #ccc;
    width: 100%;
    padding-top: 0.5em;
    display: flex;
    justify-content: space-between;

    label {

        display: inline-block;
        position: relative;
        -webkit-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        width: 100%;
    }

    label:before {

        content: "";
        width: 11px;
        height: 11px;
        display: inline-block;
        border: 3px solid #FF8B00;
        background: none;
        border-radius: 50%;
        position: absolute;
        left: 94.5%;
        bottom: 1px;
    }

    input[type=checkbox] {

        display: none;
    }

    input[type=checkbox]:checked + label {

        width: 100%;
        background: #FF8B00;
        color: white;
        padding-left: 1em;
        border-radius: 25px;
        transition: all 0.3s;
    }

    input[type=checkbox]:checked + label:before {

        border: 3px solid #fff;
        background: white;
        bottom: 1px;
        transition: all 0.3s;
    }

    input[type=checkbox]:checked + label + p {

        color: white;
        transition: all 0.3s;
    }

    p {

        left: 77%;
        position: absolute;
        display: block;
    }

    @media (min-width: 300px) {
        
         p {

            left: 72%;
        }
    }

    @media (min-width: 360px) {

            p {

                left: 70%;
            }
    }

    @media (min-width: 768px) {

         p {

            left: 68%;
        }
    }

    @media (min-width: 1020px) {

        p {

            left: 65%;
        }
    }

    @media (min-width: 1359px) {

        p {

            left: 83%;
        }
    }

    @media (min-width: 1400px) {

        p {

            left: 81.5%;
        }
    }

    @media (min-width: 1600px) {

        p {

            left: 77.2%;
        }
    }

    @media (min-width: 1900px) {
        p {

            left: 73.7%;
        }
    }

    @media (min-width: 2400px) {

        p {

            left: 68%;
        }
    }
`

function AddComplement(){

        return(

            <>  
                <div>
                    <div css ={OptionOne}>
                        <input type="checkbox" id="a"/>
                        <label for="a">Soda</label>
                        <p>+ S/.7</p>
                    </div>
                    <div css ={OptionOne}>
                        <input type="checkbox" id="b"/>
                        <label for="b">Milkshake</label>
                        <p>+ S/.15</p>
                    </div>
                    <div css ={OptionOne}>
                        <input type="checkbox" id="c"/>
                        <label for="c">Papas fritas</label>
                        <p>+ S/.8</p>
                    </div>
                </div>
            </>
        )
}   
    
export default AddComplement;