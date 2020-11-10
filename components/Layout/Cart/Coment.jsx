import { ComentContainer, RowSubTotal, PhoneTitle, PhoneTextarea } from './styles'


function Coment(){

    return(

        <ComentContainer>
            <RowSubTotal>
                <PhoneTitle>
                    <span>Comentarios</span>
                </PhoneTitle>
                <PhoneTextarea>
                    <textarea name="" cols="30" rows="5" placeholder="Descripción de su casa, el monto con el que va  apagar"></textarea>
                </PhoneTextarea>
            </RowSubTotal>
        </ComentContainer>
    )  
}
 
export default Coment;