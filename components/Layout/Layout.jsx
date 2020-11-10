import Banned from './Banner/Banner'
import Navbar from './Navbar/Navbar'
import Ofert from './Home/Ofert'
import NewWeek from './Home/NewWeek'
import Restaurant from './Home/Restaurant'
import Footer from './Footer/Footer'

function Layout(){

        return(
            <>
            <Navbar/>
            <Banned/>
            <Ofert/>
            <NewWeek/>
            <Restaurant/>
            <Footer/>
            
            {/* <main>
                {props.children}
            </main> */}

            </>
         )
}
 
export default Layout;