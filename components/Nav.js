import React from 'react';

import { Button } from "@material-ui/core"


export default function Nav(props) {
  
    const navStyle = {
        position: "absolute",
        right: 0,
        top: 0
    }
    return (
      <div style={navStyle}>
          <Button color="secondary" onClick={() => props.setPage("home")}>Home</Button>
          <Button color="secondary" onClick={() => props.setPage("contact")}>Contact Us</Button>
          <Button color="secondary" onClick={() => props.setPage("owners")}>Meet The Owners</Button>
          <Button color="secondary" onClick={() => props.setPage("faq")}>FAQ</Button>
          <Button color="secondary" onClick={() => props.setPage("services")}>Services</Button>
          <Button color="secondary" onClick={() => props.setPage("nannies")}>For Nannies</Button>

      </div>
    )
  }
