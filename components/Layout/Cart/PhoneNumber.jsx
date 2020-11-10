import { Phone, RowSubTotal, PhoneTitle, PhoneInput } from './styles'


function PhoneNumber(){

    return(

        <Phone>
            <RowSubTotal>
                <PhoneTitle>
                    <span>Número de celular</span>
                </PhoneTitle>
                <PhoneInput>
                    <input type="text" placeholder=" Ingrese número de celular"/>
                </PhoneInput>
            </RowSubTotal>
        </Phone>
        )
}
 
export default PhoneNumber;