import React from 'react';
import {AppBar, TextField, Tabs, Tab, FormControl, Paper,Button,Avatar, Grid} from '@material-ui/core';
import {useAuthenticationStyle} from './Styles/styles';
import {LockOpenRounded,Person} from '@material-ui/icons';
import {Link} from 'react-router-dom'

function TabPanel(props) {
  
  const classes = useAuthenticationStyle();     //stylesheet
  const { children, value, index} = props;

  return (
    <>
      {value === index && (
        <FormControl  className={classes.AuthenticationForm}>
            <Paper className={classes.paper} elevation={10}>
                {children}
            </Paper>
        </FormControl>
      )}
    </>
  );
}

export default function Authentication() {
  const [value, setValue] = React.useState(0);

  const classes = useAuthenticationStyle();     //stylesheet

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.AuthenticationContainer}>
        
      <AppBar position="static" className={classes.TabBar} color='transparent' elevation={0}>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab label="Sign IN" icon={
                                    <Avatar className={classes.avatar}>
                                        <Person/>
                                    </Avatar>}/>
          <Tab label="Sign UP" icon={
                                    <Avatar className={classes.avatar}>
                                        <LockOpenRounded/>
                                    </Avatar>}/>
        </Tabs>
      </AppBar>
      
      <TabPanel value={value} index={0}>
                <TextBox label="User Name"/>
                <TextBox type='password' label="Password"/> 
                <SubmitButton label='Sign IN'/>                                    
      </TabPanel>
      <TabPanel value={value} index={1}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <TextBox label="First Name"/>
                </Grid>
                <Grid item xs={6}>
                    <TextBox label="Last Name"/>
                </Grid>
            </Grid>
                <TextBox label="Email ID"/>
                <TextBox type='password' label="Password"/>            
                <TextBox type='password' label="Confirm Password"/>
                <SubmitButton label='Register'/>                                                  
      </TabPanel>
    </div>
  );
}


const TextBox=(props)=>{
    const {type, label}=props;
    return(
        <TextField
          label={label}
          type={type}
          variant="outlined"
          margin='dense'
          fullWidth
          required
        />
    )
}

const SubmitButton=(props)=>{

    const classes = useAuthenticationStyle();     //stylesheet
    const {label}=props;

    return(
        <Link to='/todolist' underline={false}><Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.AuthenticationButton}
          >
            {label}
          </Button>
        </Link>
    )
}