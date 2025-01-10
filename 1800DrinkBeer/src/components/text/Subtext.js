
import Typography from '@mui/material/Typography';
const Subtext = () => {
  return (
    <Typography
      variant="h5"
      component="p"
      sx={{
        fontFamily: '"Bebas Neue", sans-serif',
        color: 'text.primary',               
        letterSpacing: 2,                    
        marginBottom: 10,                       
      }}
    >
    The Game Carter and Dominic made to make you drink beer. 
       </Typography>
  );
};

export default Subtext;
