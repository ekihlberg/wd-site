import { useState } from 'react';
import './App.scss'
import eotEdinburgh from './assets/img/eot_edingburgh.jpg';
import eotstc from './assets/img/eot_star_clipper.jpg';
import useParallax from './hooks/useParallax';


function App() {

  const { offset: parallaxGreen, elementRef: greenRef } = useParallax(0.2, -50);
  const { offset: parallaxWhite, elementRef: whiteRef } = useParallax(0.1, -30);
  const { offset: img1, elementRef: imge1 } = useParallax(0.1, -100);
  const { offset: img2, elementRef: imge2 } = useParallax(0.3, -150);

  return (
    <>
    
    <div className='top_wrapper' ref={greenRef} style={{ transform: `translateY(${parallaxGreen}px)` }}>
        <div className='top-header-sub-green' >
          <div className='top-header-sub-white' ref={whiteRef} style={{ transform: `translateY(${parallaxWhite}px)` }}>
            <p className="top-header-subtext">
              21 september 2024
            </p>
            <h1 className="top-header-text">Emma <br />och<br />Tobias</h1>
          </div>
        </div>
      </div>
      <div className='section section_info section_info__dark'>
        <svg xmlns="http://www.w3.org/2000/svg" className='top_wave' viewBox="0 0 1440 320"><path fill="#2B3835" fill-opacity="1" d="M0,160L48,154.7C96,149,192,139,288,165.3C384,192,480,256,576,266.7C672,277,768,235,864,213.3C960,192,1056,192,1152,197.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div className='section_text'>
          <h3>VÅR SAGA</h3>
          <h2>Njuta, Äta , Mat....</h2>
          <p>Genom en gemensam passion för mat och upplevelser, som började med en matchning på en dejtingapp, formades en djup vänskap. Våra middagsbjudningar blev snabbt en central del av vårt umgänge, där vi turades om att skapa en varm och välkomnande atmosfär hemma hos varandra. Kvällarna var fyllda med skratt, läckra rätter och en känsla av samhörighet. I våra kök spirade en vänskap, kryddad med kärleken till matlagning och det glada sällskapet.</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className='bottom_wave' viewBox="0 0 1440 320">
          <path fill="#2B3835" fill-opacity="1" d="M0,96L48,90.7C96,85,192,75,288,106.7C384,139,480,213,576,208C672,203,768,117,864,101.3C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      <div className='section_wrapper'>
        <div className='section section_img section_img__light'>
          <img src={eotEdinburgh} alt="Edinburgh"  ref={imge1} style={{ transform: `translateY(${img1}px)` }} />
          <img src={eotstc} alt="Star Clipper" ref={imge2} style={{ transform: `translateY(${img2}px)` }} />
        </div>
      </div>
    </>
  )
}

export default App
