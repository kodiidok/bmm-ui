import React, { useState } from 'react';
import { Input, Textarea, Select, Button, Checkbox, TextInput } from '@mantine/core';
import InputTime from '../input/timeInput';
import DateInput from '../input/dateInput';
import SelectInput from '../input/selectInput';
import PhoneInput from '../input/phoneInput';

interface Props{
  text:string;
}

function BookingRequestForm(props:Props) {

    const headerStyle = {
      fontSize: 'large',
      color: `#64748B`
    };
    const header2Style = {
        fontSize: '2rem',
      };
  
    const formField = {
        marginTop:"1rem",
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
    
    <p style={headerStyle}>{props.text}</p>
    <h1 style={header2Style}>Booking Request</h1>
    
    
    
    <form>
      <TextInput
        label="Full Name"
        placeholder="Full Name"
        labelProps={{ style: classes.label }}
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
      <div style={formField}>
        <PhoneInput/>
        </div>
      <div style={formField}>
        <SelectInput label="Booking Type" placeholder="Select Booking Type"/>
        </div>
      
      

      
      <div style={{display:"flex", flexDirection:"row", gap:"1rem"}}>
        <div style={{...formField,flex:1}}><InputTime/></div>
        <div style={{...formField,flex:1.5}}><DateInput/></div>
      
      
      </div>
      <TextInput
        label="Address Line 1"
        placeholder="Address Line 1"
        labelProps={{ style: classes.label }}
        // value={name}
        // onChange={(event) => setName(event.target.value)}
        
      />
      <TextInput
        label="Address Line 2"
        placeholder="Address Line 2"
        labelProps={{ style: classes.label }}
        // value={name}
        // onChange={(event) => setName(event.target.value)}
        
      />
      <TextInput
        label="City"
        placeholder="City"
        labelProps={{ style: classes.label }}
        // value={name}
        // onChange={(event) => setName(event.target.value)}
        
      />

      <Textarea
        label="Message"
        labelProps={{ style: classes.label }}
        // value={message}
        // onChange={(event) => setMessage(event.target.value)}
      />
      <Checkbox
  required
  style={formField}
  // checked={agree}
  // onChange={() => setAgree(!agree)}
  label={
    <>
      I have read and agree to the friendly{' '}
      <a href="/privacy-policy"> privacy policy</a>.
    </>
  }
/>
      <Button type="submit" style={{ alignSelf: 'flex-start', width:"100%", marginTop: '2rem' }}>Place Booking</Button>
    </form>
    </div>
  );
}

export default BookingRequestForm;
