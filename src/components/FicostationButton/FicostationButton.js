import Button from '@mui/material/Button';

export default function FicostationButton({ text }){
    return(
        <Button style={{
            backgroundColor: '#e62e1f',
            fontSize: 16,
            color: 'white',
        }}>
            {text}
        </Button>
    );
}