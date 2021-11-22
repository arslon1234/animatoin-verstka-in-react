import './footer.css'

export default function Footer() {
       return (
              <div classNames="footer"  >
                    <div className="footertop">
                    <div className="footerOne">
                           <input data-aos="zoom-out-up" type="text" placeholder="E-Mail-Address" />
                           <p>
                           Melden Sie sich hier an, um regelmäßig von Aesop zu hören.
                           </p>
                    </div>
                     <div className="footerTwo">
                            <h4 data-aos="zoom-out-up">Ihre Bestellung</h4>
                            <div className="line"></div>
                            <p>Hilfe</p>
                            <p>Häufig gestellte Fragen</p>
                            <p>Versand und Rückgaben</p>
                            <p>Sendungsverfolgung</p>
                            <p>Guthaben der Gutscheinkarte</p>
                            <p>Impressum</p>
                     </div>
                     <div className="footerThree">
                            <h4>Services</h4>
                            <div className="line"></div>
                            <p>Firmengeschenkservice</p>
                     </div>
                     <div className="footerFour">
                            <h4 data-aos="zoom-out-up">Einstellungen</h4>
                            <div className="line"></div>
                            <p>Lieferung nach: Deutschland</p>
                            <p>Sprache: Deutsch</p>
                     </div>
                    </div>
                    <div className="footerdown">
                           <div className="downLeft">
                                  <h4 data-aos="zoom-out-up">Nachhaltigkeit</h4>
                                  <div className="line2"></div>
                                  <p>
                                  Alle Produkte von Aesop sind vegan und weder unsere <br />
                                   Inhaltsstoffe noch unsere Produkte werden an Tieren getestet. Unser Unternehmen ist mit dem Leaping <br />
                                    Bunny Siegel ausgezeichnet und B-Corp zertifiziert. <br />
                                  </p>
                           </div>
                           <div className="downCenter">
                                  <h4 data-aos="zoom-out-up">Über</h4>
                                  <div className="line2"></div>
                                   <p>Über Aesop</p>
                                   <p>Foundation</p>
                                   <p>Karriere</p>
                                   <p>Datenschutzrichtlinie</p>
                                   <p>Zugänglichkeit</p>
                           </div>
                           <div className="downRight">
                                  <h4 data-aos="zoom-out-up">Social Media</h4>
                                  <div className="line2"></div>
                                   <p>Instagram</p>
                                   <p>Twitter</p>
                                   <p>LinkedIn</p>
                           </div>
                    </div>
              </div>
       )
}
