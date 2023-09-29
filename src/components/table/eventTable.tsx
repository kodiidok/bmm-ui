import React from "react";
import { Table } from "@mantine/core";

const EventTable = () => {
  const data = [
    {
      id: 1,
      day: "Tomorrow",
      date: "2/28/2021",
      name: "Row 1",
      startTime: "6:30",
      endTime: "9:00",
      time: "PM",
      eventTitle: "Infinity Live In Concert",
      location: "Galle Face",
    },
    {
      id: 1,
      day: "Thursday",
      date: "3/4/2021",
      name: "Row 1",
      startTime: "6:30",
      endTime: "9:00",
      time: "PM",
      eventTitle: "Infinity Live In Concert",
      location: "Galle Face",
    },
    {
      id: 1,
      day: "Saturday",
      date: "3/6/2021",
      name: "Row 1",
      startTime: "6:30",
      endTime: "9:00",
      time: "PM",
      eventTitle: "Infinity Live In Concert",
      location: "Galle Face",
    },
  ];

  const handleRowClick = (id: any) => {
    // Handle the click event here
    console.log(`Row ${id} clicked`);
  };

  return (
    <div>
      <Table>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              onClick={() => handleRowClick(item.id)}
            >
              <td style={{ border: "none" }}>
                <div>
                  <b>{item.day.toUpperCase()}</b> {item.date}
                </div>
                <div>
                  {item.startTime} - {item.endTime} {item.time}
                </div>
                <div>
                  <b>{item.eventTitle}</b>
                </div>
                <div>{item.location}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EventTable;
