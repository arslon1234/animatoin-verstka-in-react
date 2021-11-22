import './App.css'
import {useEffect} from "react"
import AesopMenu from './components/aesop-menu/AesopMenu'
import BodyOne from './components/bodyOne/BodyOne'
import BodyTwo from './components/bodyTwo/BodyTwo'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HeaderD from './components/headerDown/HeaderD'
import Menu from './components/menu/Menu'
import MenuTwo from './components/menuTwo/MenuTwo'
import Navbar from './components/navbar/Navbar'
import 'aos/dist/aos.css';
import "aos/dist/aos"
import AOS from "aos";

export default function App() {
       useEffect(() => {
              AOS.init({
                     duration : 2000
                 });
       }, [])

     
       return (
              <div className="app">
               <Header/>
               <HeaderD/>
               <Navbar/>
               <BodyOne/>
               <Menu/>
               <AesopMenu/>
               <MenuTwo/>
               <BodyTwo/>
               <Footer/>
              </div>
              
       )
}
