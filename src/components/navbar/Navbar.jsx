import './navbar.css'
import {useState} from 'react'
export default function Navbar() {
       const [open, setOpen] = useState(false)
       // function changeLogo(e){
       //        e.preventDefault()
       //        e.target.value
       // }
       return (
              <div className="navbar" data-aos="zoom-in">
                    <div className="navbar-header">
                           <div className="header-left">
                                  <ul>
                                         <li className={open?"logo":"d-none logo"}>Aesop.</li>
                                         <li className={open?"d-none list_item":"list_item"}>Einkaufen</li>
                                         <li className={open?"d-none list_item":"list_item"}>Lesen</li>
                                         <li className={open?"d-none list_item":"list_item"}>Standorte</li>
                                         <li className={open?"d-none list_item":"list_item"}>Suchen</li>
                                        
                                  </ul>
                           </div>
                           <div className="header-right">
                                  <ul>
                                         <li className={open?"d-none list_items":"list_items"}>Warenkorb</li>
                                         <li className={open?"d-none list_items":"list_items"}>Anmelden</li>
                                         <span className={open?" d-none bar":"bar"} onClick={(e)=>setOpen(!open)}><i class="fa-solid fa-bars"></i></span>
                                         <span className={open?" xmark":"d-none"} onClick={(e)=>setOpen(!open)}><i class="fa-solid fa-xmark"></i></span>
                                  </ul>
                           </div>
                    </div>
                    <div className="navbar-body">
                           <div className="navbar-body-title">
                                  <p>
                                  Gebändigt und geformt: <br />Formulierungen mit Funktion
                                  </p>
                           </div>
                           <div className="navbar-body-desc">
                                  <p>
                                  Mit Tame Hair Serum und Sculpt Hair Polish stellen wir <br />
                                   zwei neue Formulierungen vor, die dabei behilflich sind, <br />
                                    die Haare in Szene zu setzen, und gleichzeitig die <br />
                                     Haarwurzeln sorgsam einbeziehen.

                                  </p>
                           </div>
                    </div>
              </div>
       )
}
