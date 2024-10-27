import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function SimpleBarChart({ uData, pData, xLabels }) {
  return (
    <BarChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'Calories Taken', id: 'pvId' },
        { data: uData, label: 'Calories Burnt', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}
