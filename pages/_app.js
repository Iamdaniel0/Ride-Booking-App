
import Body from '@/components/body/main'
import Footer from '@/components/footer/footer'
import MainNavigation from '@/components/navigation/navigation'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <>
        <MainNavigation/> 
        {/* <Body/> */}
        <Component {...pageProps} />
        <Footer/>
    </>
  ) 
}
