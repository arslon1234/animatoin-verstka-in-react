import './bodyone.css'
import imgOne from '../../assets/images/Rectangle (1).png'
import imgTwo from '../../assets/images/Rectangle (3).png'
export default function BodyOne() {
       return (
              <div className="body_one">
                    <div className="body-one-left"  data-aos="flip-left">
                           <img src={imgOne} alt="" />
                    </div>
                    <div className="body-one-right" data-aos="flip-right">
                          <div className="body-one-logo">
                                 <span>
                                 Schließen
                                 </span>
                          </div>
                          <div className="body-slupt">
                                 <div className="slupt-img">
                                        <img src={imgTwo} alt="" />
                                 </div>
                                 <div className="slupt-info">
                                   <h3>Sculpt Hair Polish</h3>
                                   <p className="p1">
                                   Ein Gel, das Präzision und Geschmeidigkeit vereint
                                   </p>
                                   <p className="p2">
                                   Das Sculpt Hair Polish ist ein Styling-Gel mit einzigartigem Halt. <br />
                                    Fest und doch flexibel, das Resultat ist stets eine sorgfältig <br />
                                     komponierte Frisur – ob kurz oder lang, akribisch oder betont <br />
                                      lässig.

                                   </p>
                                   <button className="btn1">
                                   Zum Warenkorb hinzufügen — 27,00 €
                                   </button>
                                   <button className="btn2">
                                   Sculpt Hair Polish entdecken
                                   </button>
                                 </div>
                          </div>
                    </div>
              </div>
       )
}
