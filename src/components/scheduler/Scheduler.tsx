
import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { ScrollArea, createStyles, useMantineTheme } from '@mantine/core';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';

export interface DateInfo {
  day: string;
  month: string;
  date: number;
}

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    overflow: 'hidden',
    border: `2px solid ${theme.colors.gray[2]}`,
    backgroundColor: theme.colors.gray[2],
    gap: '2px'
  },
  scrollableContainer: {
    display: 'flex',
    textAlign: 'center',
    overflowX: 'auto',
    gap: '2px'
  },
  month: {
    width: 'min-content',
    // borderRight: `2px solid ${theme.colors.gray[2]}`,
  },
  monthName: {
    padding: '0.5rem',
    fontWeight: 'bold',
    color: theme.colors.gray[5],
    paddingBottom: '0.5rem',
    minHeight: 20,
  },
  hrLine: {
    height: 2,
    backgroundColor: theme.colors.gray[2],
  },
  datesWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '2px',
  },
  dateCell: {
    minWidth: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  timeCell: {
    minWidth: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  day: {
    minHeight: 20,
    backgroundColor: 'white',
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray[6],
    padding: '0.5rem'
  },
  timeColumn: {
    width: 100,
    borderRight: `2px solid ${theme.colors.gray[2]}`,
  },
  timeLabel: {
    padding: '0.5rem',
    backgroundColor: theme.colors.gray[2],
    borderRight: `2px solid ${theme.colors.gray[2]}`,
  },
  morningLabel: {
    padding: '0.5rem',
    backgroundColor: theme.colors.gray[2],
    borderRight: `2px solid ${theme.colors.gray[2]}`,
  },
  eveningLabel: {
    padding: '0.5rem',
    backgroundColor: theme.colors.gray[2],
  },
  schedule: {
    margin: 0,
    alignSelf: "center",
    color: "#495057"
  },
  scheduleContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
    height: "35px",
    paddingBottom: "1rem",
  },
  datePickerContainer: {
    margin: 0,
    alignSelf: "center",
    position: 'relative'
  },
  viewDateRange: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '240px',
    backgroundColor: '#F1F3F5',
    padding: '0.5rem',
    borderRadius: '0.5rem',
    gap: '0.5rem'
  },
  datePicker: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'white',
    borderRadius: '0.5rem',
  },
  dateSlotContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  dateSlot: {
    minHeight: '100px',
    // border: '1px solid gray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: `2px solid ${theme.colors.gray[0]}`,
  }
}));

export function createDateArrayFromRange(dateRange: [Date | null, Date | null]): DateInfo[] {

  const [startDate, endDate] = dateRange;

  if (!startDate || !endDate) {
    return [];
  }

  const dateArray: DateInfo[] = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const day = currentDate.toLocaleString('en-US', { weekday: 'short' });
    const month = currentDate.toLocaleString('en-US', { month: 'short' });
    const date = currentDate.getDate();

    dateArray.push({ day, month, date });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateArray;
}

export const createSchedule = (dateArray: DateInfo[]) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const groupedDates: { [month: string]: DateInfo[] } = {};

  dateArray.forEach(dateInfo => {
    if (!groupedDates[dateInfo.month]) {
      groupedDates[dateInfo.month] = [];
    }
    groupedDates[dateInfo.month].push(dateInfo);
  });

  return (
    <div className={classes.container}>
      <div className={classes.month}>
        <div className={classes.monthName} style={{ textAlign: 'left', backgroundColor: theme.colors.gray[8] }}></div>
        <div className={classes.hrLine} style={{ backgroundColor: theme.colors.gray[8] }} />
        <div className={classes.datesWrapper}>
          <div className={classes.timeCell}>
            <div style={{ width: '100%' }}>
              <div
                className={classes.day}
                style={{ backgroundColor: theme.colors.gray[8] }}
              ></div>
              <div
                className={classes.dateSlotContainer}
                style={{ color: theme.colors.gray[6] }}
              >
                <div
                  className={classes.dateSlot}
                  style={{ backgroundColor: theme.colors.gray[8] }}
                ><WbSunnyRoundedIcon /></div>
                <div
                  className={classes.dateSlot}
                  style={{ backgroundColor: theme.colors.gray[8] }}
                ><DarkModeRoundedIcon /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollArea>
        <div className={classes.scrollableContainer}>
          {Object.entries(groupedDates).map(([month, dates], index) => (
            <div
              key={index}
              className={classes.month}
            >
              <div className={classes.monthName} style={{
                backgroundColor: index % 2 === 0 ? theme.colors.gray[1] : theme.colors.gray[0]
              }}>{month}</div>
              <div className={classes.hrLine} />
              <div className={classes.datesWrapper}>
                {dates.map((dateInfo, dateIndex) => (
                  <div
                    key={dateIndex}
                    className={classes.dateCell}
                  >
                    <div style={{ width: '100%' }}>
                      <div className={classes.day}>{month === '' ? '' : `${dateInfo.day} ${dateInfo.date}`}</div>
                      <div className={classes.dateSlotContainer}>
                        <div className={classes.dateSlot}></div>
                        <div className={classes.dateSlot}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div >
  );
};


export default function Sheduler() {

  const { classes } = useStyles();

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [datePickerVisibility, setDatePickerVisibility] = useState<string>('none');
  const [formattedDateRange, setFormattedDateRange] = useState('Select Date Range');
  const [year, setYear] = useState(2023);
  const [ncols, setNcols] = useState(7);

  useEffect(() => {
    const currentDate = new Date();
    const seventhDate = new Date();
    seventhDate.setDate(currentDate.getDate() + 7);
    setDateRange([currentDate, seventhDate]);
  }, []);

  useEffect(() => {
    if (dateRange[0] != null && dateRange[1] != null) {
      formatDataRange(dateRange);
    }
  }, [dateRange]);

  const handleDatePickerVisibility = () => {
    datePickerVisibility === 'none' ? setDatePickerVisibility('block') : setDatePickerVisibility('none');
  }

  const formatDataRange = (dateRange: [Date | null, Date | null]) => {
    const [start, end] = dateRange;
    let formattedStart = '';
    let formattedEnd = '';
    if (start && end) {
      formattedStart = start.toDateString().substring(4, 10);
      formattedEnd = end.toDateString().substring(4, 10);
    }
    formattedStart === formattedEnd ? setFormattedDateRange(formattedStart) : setFormattedDateRange(`${formattedStart} - ${formattedEnd}`);
  }

  return (
    <div>
      <div className={classes.scheduleContainer}>
        <h2 className={classes.schedule}>Schedule</h2>
        <div className={classes.datePickerContainer}>
          <div className={classes.viewDateRange} onClick={handleDatePickerVisibility}>
            <div style={{ fontSize: '0.9rem', paddingLeft: '0.5rem' }}>
              {formattedDateRange}
            </div>
            <EventRoundedIcon />
          </div>
          <DatePicker className={classes.datePicker} type="range" allowSingleDateInRange value={dateRange} onChange={setDateRange} display={datePickerVisibility.toString()} />
        </div>
      </div>
      {createSchedule(createDateArrayFromRange(dateRange))}
    </div >
  );
}