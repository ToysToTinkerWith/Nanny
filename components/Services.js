import Contact from "./Contact"

import { Card, Grid, Typography } from '@material-ui/core'

export default function Services(props) {

    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={5}>
                <Card style={{margin: 15, border: "1px solid black", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.2)"}}>
                <Typography variant="h6" align="center"> Base Rate</Typography>
                <Typography variant="h5" align="center" style={{color: "white", backgroundColor: "#482880"}}>
                    $19/hr
                </Typography>
                <Typography variant="subtitle1" align="center">
                    Holiday Rate:  <b>$24/hr</b>
                </Typography>
                <Typography variant="subtitle1" align="center">
                    <b>$1</b> per additional child
                </Typography>
            </Card>

            <Card style={{margin: 15, border: "1px solid black", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.2)"}}>
                <Typography variant="h6" align="center"> Late Rate</Typography>
                <Typography variant="subtitle2" align="center"> (Less than one weeks notice) </Typography>
                <Typography variant="h5" align="center" style={{color: "white", backgroundColor: "#482880"}}>
                    $21/hr
                </Typography>
                <Typography variant="subtitle1" align="center">
                    Holiday Rate:  <b>$26/hr</b>
                </Typography>
                <Typography variant="subtitle1" align="center">
                    <b>$1</b> per additional child
                </Typography>
            </Card>

            <Card style={{margin: 15, border: "1px solid black", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.2)"}}>
                <Typography variant="h6" align="center"> Emergency Rate</Typography>
                <Typography variant="subtitle2" align="center"> (Less than one days notice) </Typography>

                <Typography variant="h5" align="center" style={{color: "white", backgroundColor: "#482880"}}>
                    $29/hr
                </Typography>
                <Typography variant="subtitle1" align="center">
                    Holiday Rate:  <b>$32/hr</b>
                </Typography>
                <Typography variant="subtitle1" align="center">
                    <b>$1</b> per additional child
                </Typography>
            </Card>
            <Card style={{margin: 15, border: "1px solid black", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.2)"}}>
                <Typography variant="h6" align="center"> Group Rate</Typography>
                <Typography variant="subtitle2" align="center"> (4 or more children) </Typography>

                <Typography variant="h5" align="center" style={{color: "white", backgroundColor: "#482880"}}>
                    $?/hr
                </Typography>
                <Typography variant="subtitle1" align="center">
                    Pricing may vary
                </Typography>
            </Card>

                </Grid>
                <Grid item xs={12} sm={7}>
                    <Contact />
                </Grid>
            </Grid>
            
        </div>
    )
}