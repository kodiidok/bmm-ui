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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Table style={{ width: "100%", background: "black" }}>
        {/* <thead>
        <tr>
          <th>Rows</th>
        </tr>
      </thead> */}
        <tbody style={{ background: "#25262B" }}>
          {data.map((item, index) => (
            <tr
              key={item.id}
              onClick={() => handleRowClick(item.id)}
              style={{
                width: "100%",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                // padding:"1.5rem",// Align items horizontally
                // Align items vertically
                background: index % 2 === 0 ? "#1A1B1E" : "#373A40",
                color: "white",
              }}
            >
              <td style={{ border: "none" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "2rem",
                    marginBottom: "1rem",
                    fontSize: "1rem",
                  }}
                >
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
