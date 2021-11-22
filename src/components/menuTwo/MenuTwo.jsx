import './menutwo.css'
import recOne from '../../assets/images/Rectangle (8).png'
import recTwo from '../../assets/images/Rectangle (9).png'
import recThree from '../../assets/images/Rectangle (10).png'
// import aesop from '../../assets/images/Rectangle (7).png'

export default function MenuTwo() {
       return (
              <div className="menutwo" >
                    <div className="menutwoItem" data-aos="flip-left">
                           <img src={recOne} alt="" />
                           <p>Sublime Replenishing Night Masque</p>
                           <p>Eine Gel-Creme reich an den Vitaminen B, C, E und F</p>
                    </div>
                    <div className="menutwoItem" data-aos="flip-left">
                           <img src={recTwo} alt="" />
                           <p>Lucent Facial Concentrate</p>
                           <p>Ein schützendes Serum reich an Vitamin C</p>
                    </div>
                    <div className="menutwoItem" data-aos="flip-left">
                           <img src={recThree} alt="" />
                           <p>Damascan Rose Facial Treatment</p>
                           <p>Eine Mischung aus vitaminreichen, pflanzlichen Extrakten</p>
                    </div>
              </div>
       )
}
