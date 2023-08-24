
import { DataTable } from 'mantine-datatable';
import DateRangeSelector from './DateRangeSelector';

export default function Sheduler() {


  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2rem",
          // height: "35px",
          paddingBottom: "1rem",
        }}
      >
        <h2 style={{ margin: 0, alignSelf: "center", color: "#495057" }}>
          Schedule
        </h2>
        <DateRangeSelector />
      </div>
      <DataTable
        columns={[{ accessor: 'name' }, { accessor: 'streetAddress' }, { accessor: 'city' }, { accessor: 'state' }]}
        records={[]}
      />
    </div >
  );
}