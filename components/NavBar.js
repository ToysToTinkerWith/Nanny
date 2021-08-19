import React from "react"
import { AppBar, Typography, Toolbar, Grid, IconButton, makeStyles } from '@material-ui/core';

import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    buttons: {
    },
    button: {
        flexDirection: "column"
    },
    label: {
        
    }
  }));

export default function NavBar(props) {

    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" style={{borderRadius: 10, border: "1px solid black"}}>
                <Toolbar>
                    <Grid justifyContent="space-around" container>
                        <Grid item >
                            <IconButton size="small" color="secondary" onClick={() => props.setPage("home")}>
                            <img src="bnc.gif" alt="bnc" style={{width: "200px"}} />
                            </IconButton>
                        </Grid>
                        <Grid item style={{margin: "auto"}}>
                            <IconButton style={{margin: 30}} size="small" color="secondary" onClick={() => props.setPage("services")}>
                            <Typography variant="h6" align="center">
                                contact us
                            </Typography>
                            <EmailOutlinedIcon />
                              
                            </IconButton>
                            <IconButton style={{margin: 30}} size="small" color="secondary" onClick={() => props.setPage("owners")}>Meet The Owners</IconButton>
                            <IconButton style={{margin: 30}} size="small" color="secondary" onClick={() => props.setPage("faq")}>FAQ</IconButton>
                        </Grid>
                    </Grid>
                
                
                </Toolbar>
            </AppBar>
        </div>
    )
}