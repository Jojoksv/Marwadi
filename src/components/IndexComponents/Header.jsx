
import { useEffect } from 'react';
import '../../styles/Header.css'
import discord from '../../assets/discord.svg'
import facebook from '../../assets/facebook.svg'


function Header(){


    useEffect(() => {
        const hamburgers = document.querySelectorAll(".hamburger");
        
    
        const toggleActive = function() {
          this.classList.toggle("is-active");
        };
     
        if (hamburgers.length > 0) {
          hamburgers.forEach(hamburger => {
            hamburger.addEventListener("click", toggleActive);
          });
        }
        return () => {
          if (hamburgers.length > 0) {
            hamburgers.forEach(hamburger => {
              hamburger.removeEventListener("click", toggleActive);
            });
          }
        };
      }, []);
    
      function openHover() {
        const linkHover = document.querySelectorAll(".toogleHover");
        linkHover.forEach(element => {
          element.classList.toggle('custom-class');
        });
      }
      


    return(
        <header>
            <nav>
                <div className='navbarContent'>
                    <div className="logo">
                        <h1><span>M</span>arwadi</h1>
                    </div>
                    <div className="navbarItems">
                        <div className='items'>
                            <div className="item">
                                <span>📞 Hotline Number</span>
                                <a href="tel:+22656565656">+226 56565656</a>
                            </div>
                            <div className="item">
                                <span>📧 Email Us</span>
                                <a href="mailto:marwadiuniversity@gmail.com">marwadiuniversity@gmail.com</a>
                            </div>
                        </div>
                        <div className='apply'>
                            <a href=""><button>Get Strated Now</button><span>→</span></a>
                        </div>
                    </div>
                </div>
            </nav>
            <section>
                <div className='sectionContent'>
                    <div className='socialLinks'>
                        <img src={facebook} alt="" />
                        <img src={discord} alt="" />
                        <img src={facebook} alt="" />
                        <img src={discord} alt="" />
                        <img src={facebook} alt="" />
                        <img src={discord} alt="" />
                    </div>
                    <div className='separator'></div>
                    <div className='navbarLinks'>
                        <div className='linksItems'>
                            <div className="navItems"><a href="">Home</a></div>
                            <div className="navItems"><a href="">About</a></div>
                            <div className="navItems"><a href="">Services</a></div>
                            <div className="navItems"><a href="">Contact</a></div>
                        </div>
                        <div className='headerMenu projetdevgenius joseph Kossouvi jojoksv devgenius'>
                            <button className="hamburger hamburger--spring" type="button" onClick={openHover}>
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}
export default Header