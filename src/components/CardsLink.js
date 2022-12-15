import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
export default function CardsLink({title, actionText, link}){
    return(
        <Card style={{
            backgroundColor: '#e62e1f',
            borderRadius: 20,
        }}>
            <CardContent style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Button href={link} size="small" style={{fontSize: 24, color: '#fff', fontFamily: 'Bright Young'}}>{actionText}</Button>
            </CardContent>
            </Card>
    );
}