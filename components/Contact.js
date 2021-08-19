import React from 'react';

import { Card, TextField, Button, Typography } from "@material-ui/core"

export default class ViewProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: null,
          email: null,
          phone: null,
          message: null
          
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
      }

    handleUpload = () => {

    }

    handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
    [name]: value
    });
    }

    render() {

        return (
        <div>
            <Card style={{margin: 15, padding: 15, border: "1px solid black", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.2)"}}>
                <Typography variant="h6" align="center">
                    Contact
                </Typography>
                <div style={{width: "70%", display: "grid", margin: "auto"}}>
                    <br />
                    <TextField
                    color="secondary"
                    variant="outlined"
                    type="text"
                    label="Name"
                    name="name"
                    onChange={this.handleChange}
                    />
                    <br />
                    <TextField
                    color="secondary"
                    variant="outlined"
                    type="email"
                    label="Email"
                    name="email"
                    onChange={this.handleChange}
                    />
                    <br />
                    <TextField
                    color="secondary"
                    variant="outlined"
                    type="phone"
                    label="Phone"
                    name="phone"
                    onChange={this.handleChange}
                    />
                    <br />
                    <TextField
                    color="secondary"
                    variant="outlined"
                    type="text"
                    label="Message"
                    name="message"
                    multiline
                    rows={6}
                    onChange={this.handleChange}
                    />
                    <br />

                </div>
                <Typography variant="subtitle2" align="center">
                    *<b> $32</b> will be charged for cancellation less than one week prior to service.
                </Typography>
                <Typography variant="subtitle2" align="center">
                    *<b> $32</b> will be charged for any returned check, and client will be expected to pay this fee along with the current balance before services will resume.
                </Typography>
                <br />
                <Button 
                variant="outlined"
                style={{
                    display: "flex",
                    margin: "auto"
                }}
                onClick={() => this.handleUpload}
                >
                Send
                </Button>
                
            </Card>
        </div>
        )
    }

      

}