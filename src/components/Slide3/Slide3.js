import { Grid } from '@mui/material';
import { EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardsLink from '../CardsLink';
import 'swiper/css/effect-cards';
export default function Slide3(){
    return(
        <Grid container spacing={2} style={{
            backgroundColor: '#000',
            height: '100vh'
        }}>
            <Grid item xs={12} style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '10px'
            }}>
                <img src='/ficostation/targhetta.png' width='100%' height='50%' alt="Logo"/>
            </Grid>
            <Grid item xs={12}>
                
                <Swiper
                modules={[EffectCards]}
                effect='cards'
                slidesPerView={1}
                >
                    <SwiperSlide>
                        <CardsLink
                        title="SALVA NUMERO IN RUBRICA"
                        actionText="Chiama"
                        link="tel:+393664036947"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardsLink
                        title="ESPLORA LA NOSTRA DRINK LIST" actionText="Drink List" link="tel:+393664036947"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardsLink title="Prenota ora!" actionText="Chiama" link="tel:+393664036947"/>
                    </SwiperSlide>
                </Swiper>
            </Grid>
        </Grid>
    );
}
// https://ficostation.it/wp-content/uploads/2022/11/Menu-Food.pdf