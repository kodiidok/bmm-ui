import { useRef } from 'react';
import { ActionIcon } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';

export default function InputTime() {
  const ref = useRef<HTMLInputElement>();
  const useStyles = () => ({
    label: {
      marginBottom: "0.5rem",
    }
  });
  const classes = useStyles();

  return (
    <TimeInput
      label="Time"
      ref={ref}
      labelProps={{ style: classes.label }}
      rightSection={
        <ActionIcon onClick={() => ref.current.showPicker()}>
          <IconClock size="1rem" stroke={1.5} />
        </ActionIcon>
      }
      maw={400}
      mx="auto"
    />
  );
}