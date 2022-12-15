import { Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function Slide3(){
    return(
        <Grid container spacing={2} style={{
            backgroundColor: '#000',
            height: '100vh'
        }}>
            <Grid item xs={12}>
                <img src='/ficostation/targhetta.png' width='100%' height='50%' alt="Logo"/>
            </Grid>
            <Grid item xs={12}>
                
                <Swiper
                slidesPerView={1}
                >
                    <SwiperSlide>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Chiama subito!
                                </Typography>
                            
                            </CardContent>
                            <CardActions>
                                <Button href="tel:+393664036947" size="small">Aggiungi numero</Button>
                            </CardActions>
                            </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Scrivici su whatsapp!
                                </Typography>
                            
                            </CardContent>
                            <CardActions>
                                <Button href="https://wa.me/+393664036947" size="small">Whatsapp</Button>
                            </CardActions>
                            </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Esplora la nostra drink list
                                </Typography>
                            
                            </CardContent>
                            <CardActions>
                                <Button href="https://ficostation.it/wp-content/uploads/2022/11/Drink-List.pdf" size="small">ESPLORA</Button>
                            </CardActions>
                            </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    I nostri vini
                                </Typography>
                            
                            </CardContent>
                            <CardActions>
                                <Button href="https://ficostation.it/wp-content/uploads/2022/11/Wine.pdf" size="small">ESPLORA</Button>
                            </CardActions>
                            </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                   Gusta il nostro aperitivo
                                </Typography>
                            
                            </CardContent>
                            <CardActions>
                                <Button href="https://ficostation.it/wp-content/uploads/2022/11/Aperitivi.pdf" size="small">ESPLORA</Button>
                            </CardActions>
                            </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                   Assapora i nostri piatti
                                </Typography>
                            
                            </CardContent>
                            <CardActions>
                                <Button href="https://ficostation.it/wp-content/uploads/2022/11/Menu-Food.pdf" size="small">ESPLORA</Button>
                            </CardActions>
                            </Card>
                    </SwiperSlide>
                </Swiper>
            </Grid>
        </Grid>
    );
}
// https://ficostation.it/wp-content/uploads/2022/11/Menu-Food.pdf