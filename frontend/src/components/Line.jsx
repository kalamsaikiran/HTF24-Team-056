import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Monday',
  'Tuesday',
  'Wed',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export default function SimpleLineChart() {
  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'thisweek' },
        { data: uData, label: 'lastweek' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}
