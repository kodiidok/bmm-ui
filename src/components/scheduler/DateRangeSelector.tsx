import { useEffect, useState } from 'react';
import { DatePicker } from '@mantine/dates';


export default function DateRangeSelector() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [datePickerVisibility, setDatePickerVisibility] = useState<string>('none');
  const [formattedDateRange, setFormattedDateRange] = useState('Select Date Range');
  const [ncols, setNcols] = useState(7);

  useEffect(() => {
    if (dateRange[0] != null && dateRange[1] != null) {
      console.log(dateRange);
    }
  }, [dateRange]);

  const handleDatePickerVisibility = () => {
    datePickerVisibility === 'none' ? setDatePickerVisibility('block') : setDatePickerVisibility('none');
  }

  return (
    <div style={{ margin: 0, alignSelf: "center", position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'center', minWidth: '240px', backgroundColor: '#F1F3F5', padding: '0.5rem', borderRadius: '0.5rem' }} onClick={handleDatePickerVisibility}>
        <div>{formattedDateRange}</div>
      </div>
      <DatePicker style={{ position: 'absolute', zIndex: '10', backgroundColor: 'white', borderRadius: '0.5rem' }} type="range" allowSingleDateInRange value={dateRange} onChange={setDateRange} display={datePickerVisibility.toString()} />
    </div>
  );
}