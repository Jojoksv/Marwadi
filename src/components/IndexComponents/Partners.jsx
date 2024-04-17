
import '../../styles/Partners.css'
import { useEffect } from 'react';
import patern from '../../assets/patern.png'
import patern1 from '../../assets/patern1.png'
import patern2 from '../../assets/patern2.png'
import patern3 from '../../assets/patern3.png'
import patern4 from '../../assets/patern4.png'
import patern5 from '../../assets/patern5.png'
import patern6 from '../../assets/patern6.png'
import patern7 from '../../assets/patern7.png'
import patern8 from '../../assets/patern8.png'
import patern10 from '../../assets/patern10.png'
import patern11 from '../../assets/patern11.png'
import patern12 from '../../assets/patern12.png'
import patern13 from '../../assets/patern13.gif'
import patern9 from '../../assets/patern9.png'


function Partners(){

    useEffect(() => {
        const scrollContainer = document.querySelector('.UniPaternContent');
        const content = document.querySelector('.UniPaternScroll');
    
        content.innerHTML += content.innerHTML;
    
        // Ajustez la vitesse du défilement en modifiant cette variable
        const scrollSpeed = 1;
    
        function scroll() {
          scrollContainer.scrollLeft >= content.scrollWidth / 2
            ? (scrollContainer.scrollLeft -= content.scrollWidth / 2)
            : (scrollContainer.scrollLeft += scrollSpeed);
          requestAnimationFrame(scroll);
        }
    
        scroll();
      }, []);
  


    return(
        <div className='partners'>
            <div className='partnersContent'>
                <div className="filierePartner">
                    <h1>Nos <span>Filières</span> et <span>Partenaires</span></h1>
                    <p>
                        <div className="redline"></div>
                        <span className='parternDesc'>Nous travaillons en etroite collaboration avec plus de 50 pays et universités partenaires pour vous offir un cadre favoriable pour votre succes scolaire</span>
                    </p>
                </div>
                <div className='filereName'>
                    <div className='fill'>
                        <span>Nos filières</span>
                        <div className='redline'></div>
                    </div>
                    <div className='filiereItems'>
                        <div className='item'>Engineering</div>
                        <div className='item'>Pharmacy</div>
                        <div className='item'>Computer Application</div>
                        <div className='item'>Science</div>
                        <div className='item'>Management</div>
                        <div className='item'>Physiotherapy</div>
                        <div className='item'>Arts</div>
                        <div className='item'>Mechanical Engineering</div>
                        <div className='item'>Civil Ebgineering</div>
                        <div className='item'>Chemical Engineering</div>
                        <div className='item'>Electrical Engineering</div>
                        <div className='item'>Information & Communication</div>
                        <div className='item'>Technology</div>
                        <div className='item'>Informatique & Telecommunication</div>
                        <div className='item'>Informatique</div>
                        <div className='item'>Informatique</div>
                        <div className='item'>Informatique</div>
                        <div className='item'>Informatique</div>
                    </div>
                </div>
            </div>
            <div className='UniPatern'>
                <div className='AvisTitle'>
                    <h1>Nos<span> Partenaires</span></h1>
                    <p>
                        <span className='lineRed'></span>
                        <small>Découvrez les partenaires qui ont su nous faire confiance</small>
                    </p>
                </div>
                <div className='UniPaternContent'>
                    <div className='UniPaternScroll'>
                        <img src={patern} alt="" />
                        <img src={patern1} alt="" />
                        <img src={patern2} alt="" />
                        <img src={patern3} alt="" />
                        <img src={patern4} alt="" />
                        <img src={patern5} alt="" />
                        <img src={patern6} alt="" />
                        <img src={patern7} alt="" />
                        <img src={patern8} alt="" />
                        <img src={patern9} alt="" />
                        <img src={patern10} alt="" />
                        <img src={patern11} alt="" />
                        <img src={patern12} alt="" />
                        <img src={patern13} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Partners