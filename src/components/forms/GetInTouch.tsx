import React, { useState } from 'react';
import { Input, Textarea, Select, Button, Checkbox, TextInput } from '@mantine/core';
import PhoneInput from '../input/phoneInput';

interface Props{
  text:string;
  contact:string;
}
function GetInTouchForm(props:Props) {

    const headerStyle = {
      fontSize: 'medium',
      color: `#64748B`
    };
    const header2Style = {
        fontSize: '2rem',
      };
  
    
    const useStyles = () => ({
      label: {
        marginBottom: "0.5rem",
        marginTop:"1rem",
      }
    });
    const classes = useStyles();


  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
    
    <p style={headerStyle}>{props.contact}</p>
    <h1 style={header2Style}>Get in touch</h1>
          <p style={{marginTop:"1rem"}}>{props.text}</p>
          <p style={{marginTop:0}}>Please fill out this form.</p>
    
    
    
    <form>
      <TextInput
        label="Full Name"
        labelProps={{ style: classes.label }}
        placeholder="Full Name"
        // value={name}
        // onChange={(event) => setName(event.target.value)}
      />
      <TextInput
        label="Email"
        type="email"
        placeholder="you@company.com"
        labelProps={{ style: classes.label }}
        // value={email}
        // onChange={(event) => setEmail(event.target.value)}
        
      />
      <div style={classes.label}>
        <PhoneInput/>
        </div>
      
      <Textarea
        label="Message"
        labelProps={{ style: classes.label }}
        // value={message}
        // onChange={(event) => setMessage(event.target.value)}
      />
      <Checkbox
  required
  style={classes.label}
  // checked={agree}
  // onChange={() => setAgree(!agree)}
  label={
    <>
      You agree to our friendly{' '}
      <a href="/privacy-policy">privacy policy</a>.
    </>
  }
/>
      <Button type="submit" style={{ alignSelf: 'flex-start', width:"100%", marginTop: '2rem' }}>Send</Button>
    </form>
    </div>
  );
}

export default GetInTouchForm;
