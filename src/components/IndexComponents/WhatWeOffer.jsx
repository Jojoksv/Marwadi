
import '../../styles/WhatWeOffer.css'


function WhatWeOffer(){
    return(
        <div className='whatWeOffer'>
            <div className='firstWhatWeOffer'>
                <div className="offerPresent">
                    <h2>What <span>We Offer</span></h2>
                    <span className='lineRed'></span>
                </div>
                <div className='lineSeparator'>
                    <h1>BOURSE D'ETUDE EN INDE</h1>
                    <div className='bourseDesc'>
                        <p>Nous offrons des bourses aux etudiants avec des avanteges comme vous n'en avaez jamais vu</p>
                        <a href=""><button>READ MORE</button></a>
                    </div>
                </div>
            </div>
            <div className='secondWhatWeOffer'>
                <div className='inscrivez'>
                    <h1>INSCRIVEZ VOUS A TOUS LES CYCLES: LICENCE, MASTER, DOCTORAT</h1>
                </div>
                <div className='WhatWeOfferSec'>
                    <div className='scholar'>
                        <h1>SCOLARITE A MINI PRIX</h1>
                    </div>
                    <div className='billet'>
                        <h1>BILLET D'AVION + HEBERGEMENT + RESTAURATION = OFFERT</h1>
                    </div>
                    <div className='diplome'>
                        <h1>DIPLOMES RECONNUS A L'INTERNATIONAL</h1>
                    </div>
                    <div className='continuezU'>
                        <h1>CONTINUEZ VOTRE CARRIERE AUX USA OU AU CANADA</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhatWeOffer