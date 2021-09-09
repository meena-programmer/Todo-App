
import { createTheme } from '@material-ui/core/styles';
const font =  "'ProductSans-Bold', Product Sans";

const theme = createTheme({

  typography: {
    fontFamily: font,     
  },
  palette: {
    type:'dark',
  },

});
  
export {theme}