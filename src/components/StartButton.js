import { useSwiper } from 'swiper/react';
import FicostationButton from './FicostationButton/FicostationButton';
export default function StartButton(){
    const swiper = useSwiper();
    return(
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center'
        }}
        onClick={e => {
            swiper.slideNext()
            document.getElementById('videoIntro').play();
        }}
        >
        <FicostationButton
        text="Inizia il tour!"
        />
        </div>
        
    );
}