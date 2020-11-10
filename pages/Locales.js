import Head from 'next/head'
import Locales from '../components/Layout/Locales'


const Local = () => (

    <>
      <div>
        <Head>
          <link rel="stylesheet" href="./static/css/app.css"/>
          <link rel="stylesheet" type="text/css" href="./static/font/flaticon.css"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"></link>
          <title>Eat | Lo mejor para tu paladar</title>
        </Head> 
        <Locales>
        </Locales>
      </div>
    </>
)

export default Local
