import './menu.css'
import menuItem1 from '../../assets/images/Rectangle (4).png'
import menuItem2 from '../../assets/images/Rectangle (5).png'
import menuItem3 from '../../assets/images/Rectangle (6).png'
export default function Menu() {
       return (
              <div className="menu">
                     <div className="menu-item" data-aos="flip-up">
                            <img src={menuItem1} alt="" />
                            <p>Rose Hair & Scalp Moisturising Masque</p>
                            <p>Hält Kopfhaut und Haar in bestem Zustand</p>
                     </div>
                     <div className="menu-item" data-aos="flip-up">
                            <img src={menuItem2} alt="" />
                            <p>Classic Shampoo</p>
                            <p>Eine milde, aber dennoch effektive Reinigung</p>
                     </div>
                     <div className="menu-item" data-aos="flip-up">
                            <img src={menuItem3} alt="" />
                            <p>Classic Conditioner</p>
                            <p>Eine leichte, nährstoffreiche Pflege</p>
                     </div>
              </div>
       )
}
