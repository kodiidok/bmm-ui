import { Icon360, IconX } from '@tabler/icons-react';
import React, { useState } from 'react';
import {Button} from '@mantine/core';

function RequestResponse() {

  return (
    
      
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "30vh" }}>
          <h2>Thank You!</h2>
          <p style={{marginTop:"2rem"}}>We'll reach out to you within </p>
          <p style={{marginTop:0}}>3 business days.</p>
          <Button style={{marginTop:"2rem"}} >Close <IconX/></Button>
        </div>
     
    
  );
}

export default RequestResponse;
