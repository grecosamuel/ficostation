import { Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardsLink from '../CardsLink';
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
                style={{
                    height: '75%'
                }}
                slidesPerView={1}
                >
                    <SwiperSlide style={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: '100%'
                    }}>
                        <CardsLink
                        title="SALVA NUMERO IN RUBRICA"
                        actionText="Chiama"
                        link="tel:+393664036947"/>
                    </SwiperSlide>
                    <SwiperSlide style={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: '100%'
                    }}>
                        <CardsLink
                        title="ESPLORA LA NOSTRA DRINK LIST" actionText="Drink List" link="tel:+393664036947"/>
                    </SwiperSlide>
                    <SwiperSlide style={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: '100%'
                    }}>
                        <CardsLink title="Prenota ora!" actionText="Chiama" link="tel:+393664036947"/>
                    </SwiperSlide>
                </Swiper>
            </Grid>
        </Grid>
    );
}
// https://ficostation.it/wp-content/uploads/2022/11/Menu-Food.pdf