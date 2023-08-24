import { Input } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { IMaskInput } from 'react-imask';

export default function PhoneInput() {
  const id = useId();

  const useStyles = () => ({
    label: {
      marginBottom: "0.5rem",
    }
  });
  const classes = useStyles();

  return (
    <Input.Wrapper id={id} label="Phone number" maw={"100%"} mx="auto" labelProps={{ style: classes.label }}>
      <Input<any>
        component={IMaskInput}
        mask="+94 (000) 000-00-00"
        id={id}
        placeholder="+94 (000) 000-00-00"
        
      />
    </Input.Wrapper>
  );
}