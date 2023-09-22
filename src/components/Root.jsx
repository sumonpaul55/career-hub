
import { Outlet } from 'react-router'
import Footer from './footer/Footer'
import Header from './header/Header'

function Root() {
  return (
   <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
   </>
  )
}

export default Root