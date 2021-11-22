import './aesop.css'
import aesop from '../../assets/images/Rectangle (7).png'
export default function AesopMenu() {
       return (
              <div className="aesop_menu">
                  <div className="aesop_title"  data-aos="zoom-in-right">
                         <p className="vC1">Vitamin C für Tag und Nacht</p>
                         <h3>Um die Struktur der Haut <br /> zu unterstützen</h3>   
                         <p className="vC2">
                         Vitamin C ist essentiell, um die Widerstandsfähigkeit der <br />
                          Haut zu erhöhen. Der effektive Inhaltsstoff kann sowohl <br />
                           morgens als auch abends angewendet werden und <br />
                            bietet bei langfristiger, regelmäßiger Anwendung <br />
                             enorme Vorteile für die Haut.
                         </p>   
                         <button>
                         Erfahren Sie mehr über Vitamin C
                         </button>
                  </div> 
                  <div className="aesop_img" data-aos="zoom-in-left">
                         <img src={aesop} alt="" />
                  </div> 
              </div>
       )
}
