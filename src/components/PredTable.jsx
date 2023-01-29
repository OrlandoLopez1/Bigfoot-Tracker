import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'State', sortable: false, width: 105 },
  { field: 'percentage', headerName: 'Chance of Big Foot', sortable: false, width: 135 },
  
 
  
];

const rows = [
  { id: 'Michigan', percentage: 10 + '%'},
  { id: 'Texas', percentage: 8 + '%'},
  { id: 'Virginia', percentage: 7 + '%' },
  { id: 'Florida', percentage: 5 + '%'},
  { id: 'Illinois', percentage: 5 +'%' },
  { id: 'New York', percentage: 5 + '%'},
  { id: 'Tennessee', percentage: 5 + '%' },
  { id: 'Georgia', percentage: 4 + '%' },
  { id: 'West Virginia', percentage: 4 + '%'},
  { id: 'Wisconsin', percentage: 4 + '%'},
  { id: 'Indiana', percentage: 3 + '%'},
  { id: 'Louisiana', percentage: 3 + '%' },
  { id: 'Missouri', percentage: 3 + '%'},
  { id: 'Montana', percentage: 3 + '%' },
  { id: 'Ohio', percentage: 3 +'%' },
  { id: 'Alabama', percentage: 2 + '%'},
  { id: 'Arkansas', percentage: 2 + '%' },
  { id: 'Colorado', percentage: 2 + '%' },
  { id: 'Kentucky', percentage: 2 + '%' },
  { id: 'Nevada', percentage: 2 + '%' },
  { id: 'North Carolina', percentage: 2 + '%' },
  { id: 'Pennsylvania', percentage: 2 + '%' },
  { id: 'Washington', percentage: 2 + '%' },
  { id: 'Alaska', percentage: 1 + '%' },
  { id: 'California', percentage: 1 + '%' },
  { id: 'Iowa', percentage: 1 + '%' },
  { id: 'Kansas', percentage: 1 + '%' },
  { id: 'Maryland', percentage: 1 + '%' },
  { id: 'Mississippi', percentage: 1 + '%' },
  { id: 'New Hampshire', percentage: 1 + '%' },
  { id: 'North Dakota', percentage: 1 + '%' },
  { id: 'Oklahoma', percentage: 1 + '%' },
  { id: 'South Carolina', percentage: 1 + '%' },
  { id: 'Vermont', percentage: 1 + '%' },
  { id: 'Wyoming', percentage: 1 + '%' },
  { id: 'Arizona', percentage: 0 + '%' },
  { id: 'Connecticut', percentage: 0 + '%' },
  { id: 'Delaware', percentage: 0 + '%' },
  { id: 'Hawaii', percentage: 0 + '%' },
  { id: 'Idaho', percentage: 0 + '%' },
  { id: 'Maine', percentage: 0 + '%' },
  { id: 'Massachusetts', percentage: 0 + '%' },
  { id: 'Minnesota', percentage: 0 + '%' },
  { id: 'Newbraska', percentage: 0 + '%' },
  { id: 'New Jersey', percentage: 0 + '%' },
  { id: 'New Mexico', percentage: 0 + '%' },
  { id: 'Oregon', percentage: 0  + '%' },
  { id: 'Rhode Island', percentage: 0 + '%' },
  { id: 'South Dakota', percentage: 0 + '%' },
  { id: 'Utah', percentage: 0 + '%' },
];

export default function PredTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}