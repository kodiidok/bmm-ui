import React, { useState } from 'react';
import { Input, Textarea, Select, Button, Checkbox, TextInput } from '@mantine/core';
import PhoneInput from '../input/phoneInput';
import { TicketCard } from '../carousel/ticketCard';

interface Props{
  text:string;
  title:string;
}
function EventTickets(props:Props) {

    const headerStyle = {
      fontSize: 'small',
      color: `#64748B`,
      marginBottom:"3rem",
      marginTop:"-0.2rem"
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
    
    
    <h1 style={header2Style}>{props.title}</h1>
          <p style={headerStyle}>{props.text}</p>
          <div style={{display:"flex",flexDirection:"row", gap:"1.5rem"}}>
          <TicketCard title="ranghala" text="Front Row Premium Ticket" price="5000 RS" seatAvailability="17 tickets Remaining"/>
          <TicketCard title="ranghala" text="Front Row Premium Ticket" price="5000 RS" seatAvailability="17 tickets Remaining"/>
          <TicketCard title="ranghala" text="Front Row Premium Ticket" price="5000 RS" seatAvailability="17 tickets Remaining"/>
          <TicketCard title="ranghala" text="Front Row Premium Ticket" price="5000 RS" seatAvailability="17 tickets Remaining"/>
    </div>

    </div>
  );
}

export default EventTickets;
