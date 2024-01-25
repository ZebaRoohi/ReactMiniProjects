import * as React from 'react';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import { createSvgIcon } from '@mui/material';
import { gridPinnedRowsSelector } from '@mui/x-data-grid-pro/internals';
const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function DataGridComponent() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGridPro {...data} slots={{ toolbar: GridToolbar }} />
    </div>
  );
}
