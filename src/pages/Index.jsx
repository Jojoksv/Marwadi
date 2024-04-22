import AboutUs from "../components/IndexComponents/AboutUs"
import AvisUtilisateurs from "../components/IndexComponents/AvisUtilisateurs"
import FirstSection from "../components/IndexComponents/FirstSection"
import Header from "../components/IndexComponents/Header"
import Partners from "../components/IndexComponents/Partners"
import Question from "../components/IndexComponents/Question"
import WhatWeOffer from "../components/IndexComponents/WhatWeOffer"
import '../styles/IndexGlobal.css'


function Index() {

  return (
    <div>
      <Header/>
      <FirstSection />
      <AboutUs />
      <WhatWeOffer />
      <AvisUtilisateurs />
      <Partners />
      <Question />
    </div>
  )
}

export default Index
