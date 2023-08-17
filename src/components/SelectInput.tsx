import { Autocomplete } from '@mantine/core';

interface Props {
  label: string;
  placeholder?: string; // Add a placeholder prop
}

export default function SelectInput({ label, placeholder }: Props) {
  const selectOptions = placeholder ? [placeholder, ...['React', 'Vue', 'Angular', 'Svelte']] : ['React', 'Vue', 'Angular', 'Svelte'];
  const useStyles = () => ({
    label: {
      marginBottom: "0.5rem",
    }
  });
  const classes = useStyles();


  return (
    <Autocomplete
      label={label}
      placeholder={placeholder} 
      labelProps={{ style: classes.label }}
      data={selectOptions}
    />
  );
}
