
import '../../styles/Question.css'

function Question(){
    return(
        <div className='questions'>
            <div className='questionTitle'>
                <h1>Des question ou <span>suggestions</span></h1>
                <p>
                    <span className='lineRed'></span>
                    <small className=''>N'hesitez pas à nous contacter, une equipe professionnelle est à votre service.</small>
                </p>
            </div>
            <div className='questionsLink'>
                <div>
                    <small>📞</small>
                    <span>Appelez-nous</span>
                    <a href="tel:+22656565656">+226 56565656 (Agence)</a>
                </div>
                <div className='nth2'>
                    <small>📧</small>
                    <span>Ecrivez-nous</span>
                    <a href="mailto:marwadi@gmail.com">marwadi@gmail.com</a>
                </div>
                <div>
                    <small>📍</small>
                    <span>Notre agence</span>
                    <span>Ouagadougou, Koulouba</span>
                </div>
            </div>
        </div>
    )
}
export default Question