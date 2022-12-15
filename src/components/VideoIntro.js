import { useRef } from "react";
import { useSwiper } from 'swiper/react';
import Button from '@mui/material/Button';
export default function VideoIntro(){
    const videoRef = useRef(null);
    const swiper = useSwiper();
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
    };

    const handleEnd = () => {
        swiper.slideNext();
        document.getElementById('videoIntro').webkitExitFullscreen();
        document.webkitExitFullscreen();
        document.mozCancelFullscreen();
        document.exitFullscreen();
    }

return(
    <>
    <video id="videoIntro" className="videoIntro" ref={videoRef} onPlay={handlePlay} onEnded={handleEnd}>
        <source src="/FicoIntroClip.mp4" type="video/mp4"/>
    </video>
    <Button className="skipButton" onClick={e => { swiper.slideNext(); }} style={{
        position: 'absolute',
        zIndex: 999
    }}>
        Skip
    </Button>
    </>
)
}