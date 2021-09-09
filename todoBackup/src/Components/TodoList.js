import React from 'react';
import { useTodoListStyles } from './Styles/styles';
import {AppBar, Toolbar, Typography, Button, IconButton, Paper, Modal} from '@material-ui/core';
import {Menu, EditRounded, DeleteRounded, DoneRounded, AddRounded, CloseRounded} from '@material-ui/icons';
import { Grid, Card, CardActions, CardContent, Avatar, TextField } from '@material-ui/core';
import {Link} from 'react-router-dom'

export default function TodoList() {
  const classes = useTodoListStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit">
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Todo List
          </Typography>
          <Link to='/'><Button color="inherit">Logout</Button></Link>
        </Toolbar>
      </AppBar>

      <Grid container direction='column' justifyContent='center' alignItems='center'>
            
              <Paper className={classes.AddToto}>
                  <Toolbar>
                    <IconButton onClick={handleOpen}><Avatar className={classes.avatar}><AddRounded/></Avatar></IconButton>
                    <Typography color='textSecondary'>Add Action to be done</Typography>
                  </Toolbar>

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    <Grid container justifyContent='center' alignItems='center'>
                    <Paper className={classes.AddTodoForm}>
                        <IconButton edge="end" onClick={handleClose} className={classes.TodoClose}>
                            <CloseRounded/>
                        </IconButton>
                        <Typography variant='h6' align='center'>Add Todo Action</Typography>
                        <TextBox label="Title"/>
                        <TextBox multiline='true' label="Description"/> 
                        <SubmitButton label='Add'/> 
                    </Paper>
                    </Grid>
                  </Modal>

              </Paper>
              <OutlinedCard/>

      </Grid>
    </div>
  );
}

function OutlinedCard() {
  const classes = useTodoListStyles();

  return (
    <Card variant="outlined" className={classes.CardRoot}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Action to be done today
        </Typography>        
        <Typography align='right' variant="body2" color="textSecondary">
          10 Sep 2021
        </Typography>
        <Typography variant="h5" component="h2">
          Title
        </Typography>
        <hr/>
        <Typography variant="body2" component="p" paragraph>
          well meaning and kindly.a benevolent smile
          well meaning and kindly.a benevolent smile
          well meaning and kindly.a benevolent smile
          well meaning and kindly.a benevolent smile
          well meaning and kindly.a benevolent smile
          well meaning and kindly.a benevolent smile
          well meaning and kindly.a benevolent smile
          well meaning and kindly.a benevolent smile
          well meaning and kindly.a benevolent smile
          well meaning and kindly.a benevolent smile
          well meaning and kindly.a benevolent smile
          well meaning and kindly.a benevolent smile
        </Typography>
      </CardContent>
      <CardActions>
            <IconButton color="inherit"><EditRounded/></IconButton>
            <IconButton color="inherit"><DeleteRounded color='secondary'/></IconButton>
            <IconButton color="inherit"><DoneRounded color='primary'/></IconButton>
      </CardActions>
    </Card>
  );
}

const TextBox=(props)=>{
    const {multiline, label}=props;
    return(
        <TextField
          label={label}          
          variant="outlined"
          margin='dense'
          fullWidth
          required
          multiline={multiline}
        />
    )
}

const SubmitButton=(props)=>{

    const classes = useTodoListStyles();     //stylesheet
    const {label}=props;

    return(
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.TodoButton}
          >
            {label}
          </Button>
    )
}