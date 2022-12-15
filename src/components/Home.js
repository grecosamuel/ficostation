import './Home.css';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import StartButton from './StartButton';
import VideoIntro from './VideoIntro';
import Slide3 from './Slide3/Slide3';

export default function Home(){
    const swiper = useSwiper();
    return(
        <Swiper
        style={{
            backgroundColor: '#000'
        }}
        allowTouchMove={false}
        slidesPerView={1}>
            <SwiperSlide>
                <StartButton />
            </SwiperSlide>
            <SwiperSlide className='videoIntro' style={{
                width: '100vw',
                height: '100vh'
            }}>
                <VideoIntro />
            </SwiperSlide>
            <SwiperSlide
            onSlideChange
            style={{
                width: '100vw',
                height: '100vh'
            }}>
                <Slide3 />
            </SwiperSlide>
        </Swiper>
    );

};
