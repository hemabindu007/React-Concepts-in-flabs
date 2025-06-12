// TableData.tsx

import DataTable from 'react-data-table-component';
import withLoading from './Loading';

const columns = [
  {
    name: 'Name',
    selector: (row: any) => row.name,
    sortable: true
  },
  {
    name: 'Email',
    selector: (row: any) => row.email
  },
  {
    name: 'Age',
    selector: (row: any) => row.age,
    sortable: true
  }
];

const data = [
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 28 },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 34 },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 25 },
    { id: 4, name: 'Alice', email: 'alice@example.com', age: 28 },
  { id: 5, name: 'Bob', email: 'bob@example.com', age: 34 },
  { id: 6, name: 'Charlie', email: 'charlie@example.com', age: 25 },
    { id: 7, name: 'Alice', email: 'alice@example.com', age: 28 },
  { id: 8, name: 'Bob', email: 'bob@example.com', age: 34 },
  { id: 9, name: 'Charlie', email: 'charlie@example.com', age: 25 },
    { id: 10, name: 'Alice', email: 'alice@example.com', age: 28 },
  { id: 11, name: 'Bob', email: 'bob@example.com', age: 34 },
  { id: 12, name: 'Charlie', email: 'charlie@example.com', age: 25 }
];

type TableProps = {
  columns: any;
  data: any;
};

function RawUserTable({ columns, data }: TableProps) {
  return (
  <div style={{paddingTop:'30px' ,marginRight:'20px'}}>
      <DataTable
      columns={columns}
      data={data}
      pagination
      selectableRows
    />
  </div>
  );
}

// ✅ Wrap the component using HOC
const UserTableWithLoading = withLoading(RawUserTable);

function TableData() {
  return (
    <div className='draw-border'>
      <h2>User Table</h2>

      {/* 👇 Toggle `isLoading` as needed */}
      <UserTableWithLoading isLoading={false} columns={columns} data={data} />
    </div>
  );
}

export default TableData;
