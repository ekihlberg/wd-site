import React, { useState } from 'react';
import cbild from './assets/img/IMG_8165.JPG';
import kbild from './assets/img/IMG_8170.JPG';

// Mock implementation of useParallax hook (replace with your actual implementation)
const useParallax = (speed, offset) => {
  const [position, setPosition] = useState(0);
  const ref = React.useRef(null);

  // Dummy implementation for illustration
  // Add your actual parallax logic here
  React.useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const newPosition = window.scrollY * speed + offset;
        setPosition(newPosition);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, offset]);

  return { offset: position, elementRef: ref };
};

function Toast() {
  const { offset: img1, elementRef: imge1 } = useParallax(0.1, -10);
  const { offset: img2, elementRef: imge2 } = useParallax(0.3, -50);

  return (
    <>
    <div className="section">
    <div className="section_text_wrapper">
        <h3></h3>
        <h2>Våra Toastmastrar</h2>
        <p>Låt oss presentera våra två toastmasters: Kristian Ehrendahl, storebror till Tobbe, och Clara Kihlberg, lillasyster till Emma. De kommer guida oss genom kvällen. Om du vill hålla tal under middagen, kontakta dem gärna via mail på toastmaster@ehrendahl.se</p>
        <a className="button" href="mailto:toastmaster@ehrendahl.se" target='_blank'>Mail här</a>
        </div>
        <div className='section_wrapper'>
        <div className='section section_img__light section_img_toast'>
            <img src={cbild} className="toast1" alt="Edinburgh" ref={imge1} />
            <img src={kbild} className="toast2" alt="Star Clipper" ref={imge2} />
            </div>
        </div>
      </div>
    </>
  );
}

export default Toast;
