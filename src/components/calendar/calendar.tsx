import React, { useState } from 'react';
import { Table, Text } from '@mantine/core'; 
import styles from '@/styles/Calendar.module.css'; // Import your CSS styles
// import styles from '@/styles/page.module.css';
import NavbarItem from '@/components/navbar/navBarItem';

interface Props {
  dates: string[]; // Array of date strings (e.g., ["Aug 1", "Aug 2", ...])
  times: string[]; // Array of time strings (e.g., ["9:00 AM", "10:00 AM", ...])
  notifications: string[][]; // 2D array of notification content
}

const CalendarNotification: React.FC<Props> = ({ dates, times, notifications }) => {
  const itemList = ['Day', 'Week', 'Month', 'Year'];
  const [selectedItem, setSelectedItem] = useState(itemList[0]);
  return (
    <div>
    <nav className={styles.navbar}>
      
      <ul className={styles.navbarList}>
        {itemList.map((item) => (
          <li
            key={item}
            className={`${styles.navbarItem} ${selectedItem === item ? styles.activeItem : ''}`}
          >
            {/* <NavbarItem text={item} onClick={() => setSelectedItem(item)} /> */}
          </li>
        ))}
      </ul>
    </nav>
 

    <div className={styles.calendarContainer}>
      <Table striped className={styles.calendarTable}>
        <thead>
          <tr>
            <th className={styles.timeCell}></th>
            {dates.map((date, index) => (
              <th key={index}>
                <Text size="xs">{date}</Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, rowIndex) => (
            <tr key={rowIndex}>
              <td className={`${styles.timeCell} ${styles.cell}`}> {/* Apply custom styles */}
                <Text size="xs">{time}</Text>
              </td>
              {notifications[rowIndex].map((notification, colIndex) => (
                <td key={colIndex} className={`${styles.notificationCell} ${styles.cell}`}> {/* Apply custom styles */}
                  <Text size="sm">{notification}</Text>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div> </div>
  );
};


export default CalendarNotification;