import './Home.css';
import { useRef } from 'react';
export default function Home(){
    const videoRef = useRef(null);

    const handlePlay = () => {
        const elem = videoRef.current;
        if(elem){ //checking if ref was initiated
            if (elem.requestFullscreen) {
              elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
              elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE11 */
              elem.msRequestFullscreen();
            }
          }
    }
    return(
        <video autoPlay controls className="videoIntro" ref={videoRef} onPlay={handlePlay}>
            <source src="/ficostationIntro.mp4" type="video/mp4"/>
        </video>
    )
};