import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function CardsLink({title, actionText, link}){
    return(
        <Card style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#e62e1f',
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <CardContent style={{
                display: 'flex',
                justifyContent: 'center'
            }}>

                <Typography sx={{ fontSize: 18, fontWeight: 700, fontFamily: 'Bright Young' }} color="#fff" gutterBottom>
                    {title}
                </Typography>
            
            </CardContent>
            <CardActions  style={{
                display: 'flex',
                backgroundColor: '#fff',
                border: '2px solid #e62e1f',
                justifyContent: 'center',
                width: '100%',
                borderRadius: 15
            }}>
                <Button href={link} size="large" style={{fontSize: 18, color: '#000', fontFamily: 'Bright Young'}}>{actionText}</Button>
            </CardActions>
            </Card>
    );
}