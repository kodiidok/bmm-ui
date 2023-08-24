import { Calendar } from "@mantine/dates";
import { useEffect, useState } from 'react';
import { DatePicker } from '@mantine/dates';


export default function DateRangeSelector() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [datePickerVisibility, setDatePickerVisibility] = useState<string>('none');

  useEffect(() => {
    if (dateRange[0] != null && dateRange[1] != null) {
      console.log(dateRange);
    }
  }, [dateRange]);

  const handleDatePickerVisibility = () => {
    datePickerVisibility === 'none' ? setDatePickerVisibility('block') : setDatePickerVisibility('none');
  }

  return (
    <div style={{ margin: 0, alignSelf: "center" }}>
      <div style={{ display: 'flex', justifyContent: 'center', minWidth: '258.733px', backgroundColor: '#F1F3F5', padding: '1rem', borderRadius: '0.5rem' }} onClick={handleDatePickerVisibility}>
        <div>Select Date Range</div>
      </div>
      <DatePicker type="range" allowSingleDateInRange value={dateRange} onChange={setDateRange} display={datePickerVisibility.toString()} />
    </div>
  );
}