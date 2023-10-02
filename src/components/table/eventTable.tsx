import React from "react";
import { Table } from "@mantine/core";
import styles from '@/styles/eventTable.module.css';

interface EventTableProps {
  events: any
}

const EventTable = ({ events }: EventTableProps) => {

  const handleRowClick = (id: any) => {
    // Handle the click event here
    console.log(`Row ${id} clicked`);
  };

  return (
    <div className={styles['tableContainer']}>
      <Table className={styles['table']}>
        <tbody className={styles['tableBody']}>
          {events.map((item: any, index: number) => (
            <tr
              key={item.id}
              onClick={() => handleRowClick(item.id)}
              className={styles['tableRow']}
            >
              <td className={index % 2 === 0 ? styles['tableData1'] : styles['tableData2']}>
                <div>
                  {/* extract the date portion from 2023-09-13T12:30:00.000Z in the following format, Monday, 13th of September */}
                  {item.customFields.dateTime}
                </div>
                {/* extract the time portion from 2023-09-13T12:30:00.000Z and show Morning Session 10.00 AM */}
                {/* {item.customFields.dateTime} */}
                <div>
                  <b>{item.name}</b>
                </div>
                <div>{item.customFields.venue}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EventTable;
