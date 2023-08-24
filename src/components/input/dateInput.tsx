import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

export default function DateInput() {
  const [value, setValue] = useState<Date | null>(null);
  const useStyles = () => ({
    label: {
      marginBottom: "0.5rem",
    }
  });
  const classes = useStyles();

  return (
    <DatePickerInput
      label="Date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      labelProps={{ style: classes.label }}
      mx="auto"
      maw={400}
    />
  );
}