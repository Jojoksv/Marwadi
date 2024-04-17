
import '../../styles/FirstSection.css'
import linkedin from '../../assets/linkedin.svg'


function FirstSection(){
    return(
        <div className='firstHeaderSection'>
            <section className='firstSection'></section>
            <section className='secondtSection'>
                <div className='consulting'>
                    <img src={linkedin} alt="" />
                    <div>
                        <span>Get a free consult now</span>
                        <span><a href="tel:+22656565656">+(226) 56565656</a></span>
                    </div>
                </div>
                <div className='callSeparator'>
                    <div className='callManage center'>
                        <span className='circle pulse blue'><a href="tel:+22656565656">📞</a></span>
                    </div>
                </div>
                <div className='services'>
                    <div>
                        <h2>Professional And<br /> Dedicated Consulting Services</h2>
                        <span>yezig  ohedu hioefd ue egod g og go ge aes gia  dagk a oeadga s ogae ga ogeb eguef</span>
                    </div>
                    <a href=""><button>Apply now</button><span>→</span></a>
                </div>
            </section>
        </div>
    )
}
export default FirstSection