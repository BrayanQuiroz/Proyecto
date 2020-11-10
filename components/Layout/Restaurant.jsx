import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Banner from './Restaurant/Banner'
import ItemsRestaurant from './Restaurant/ItemsRestaurant'

function Locals(){

        return(

            <>
                <Navbar/> 
                <Banner/>
                <ItemsRestaurant/>
                <Footer/>   
            </>
        )
}
 
export default Locals;