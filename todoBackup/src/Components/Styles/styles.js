import { makeStyles } from '@material-ui/core/styles';

const useAuthenticationStyle=makeStyles(theme=>({
    AuthenticationContainer: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
      },
      AuthenticationForm: {
        width: '35%',    
      },
      paper:{
        padding:theme.spacing(3)
      },
      TabBar:{
          width:'50%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
      },
      AuthenticationButton:{
          marginTop:theme.spacing(1)
      }
}));

const useTodoListStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  AddToto:{
    marginBlock:theme.spacing(2)
  },
  CardRoot: {    
    maxWidth:'50%',
  },
  CardTitle: {
    fontSize: 14,
  },
  TodoButton:{
    marginTop:theme.spacing(1)
  },
  AddTodoForm:{
    padding:theme.spacing(5),    
    marginTop:theme.spacing(15),
    position:'relative'
  },
  TodoClose:{
    position:'absolute',
    right:'3%',
    top:'1%'
  }
}));

export {useAuthenticationStyle, useTodoListStyles}
