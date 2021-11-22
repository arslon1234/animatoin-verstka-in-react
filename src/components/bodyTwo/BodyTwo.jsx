import './bodytwo.css'
import rectangle11 from '../../assets/images/Rectangle (11).png'
import { DriveEtaRounded } from '@material-ui/icons'

export default function BodyTwo() {
       return (
              <div className="body">
              <div className="body_info"  >
              <div className="bodytwoLeft" >
                           <h3 data-aos="fade-up-left">Wir heißen Sie <br /> online willkommen</h3>
                           <p>
                           Genau wie in unsere Geschäften, in denen wir unsere <br />
                            Kunden persönlich begrüßen dürfen, möchten wir dies <br />
                            auch in unserem Online-Store tun. Es ist uns eine Freude, <br />
                             Ihnen virtuelle Unterstützung durch unsere Consultants <br />
                              und passende Lieferoptionen anzubieten.
                           </p>
                           <button>Hilfe</button>
                     </div>
                     <div className="bodytwoRight" >
                           <img src={rectangle11} alt="" data-aos="zoom-in" />
                     </div>
              </div>
                    <div className="body-desc" >
                           <div className="desc" data-aos="zoom-in">‘As for me, I am tormented with an everlasting itch for things remote.</div>
                    </div>
                    
              </div>
       )
}
