
import '../../styles/AboutUs.css'
import { useState, useRef } from 'react'
import school4 from '../../assets/school4.jpg'
import school6 from '../../assets/school6.jpg'
import schoolVideo from '../../assets/indiaVideo.mp4'



function AboutUs(){

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        const video = videoRef.current;
        if(video.paused){
            video.play();
            setIsPlaying(true);
        }else {
            video.paused();
            setIsPlaying(false);
        }
    }
    return(
        <div className='aboutUs'>
            <div className='Expertise'>
                <div className='titleExper'>
                    <h2>Our <span>Expertise</span></h2>
                    <span className='lineRed'></span>
                    <h1>25 years of success in supporting students</h1>
                </div>
                <div className='describExper'>
                    <p>For a quarter of a centery, whe have been poineers in supporting students to obtain sholarships, 
                        desmonstrating a long history of efficiency and dedication to academic achievement.
                    </p>
                    <button><a href="">Read More</a></button>
                </div>
            </div>
            <div className='aboutUsContent'>
                <div className='firstAbout'>
                    <img src={school4} alt="" />
                    <img src={school6} alt="" />
                </div>
                <div className='secondAbout center'>
                    <video className='indiaVideo' controls>
                        <source src={schoolVideo} type="video/mp4" />
                    </video>
                    <button onClick={togglePlay} className='videoClic circle pulseO orange'>{isPlaying ? 'Pause' : 'Play'}</button>
                </div> 
                <div className='thirdAbout'>
                    <span className='redLine'></span>
                    <span>ABOUT US</span>
                    <h1>We Are Dedicated To Support You</h1>
                    <p>Our commitment to your sucess is our top priority. We are dedicated to providing you with 
                        comprehensive and personalized support at every step of your journey.
                    </p>
                    <button><a href="">MORE ABOUT US</a></button>
                    <div className='notation'>
                        <h1>2.2k+</h1>
                        <div>
                            <p>(700+ Reviews) <span>⭐⭐⭐⭐⭐</span></p>
                            <span>From Students Leaved</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs