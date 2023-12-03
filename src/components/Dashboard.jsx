import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import AnalyticsTab from './AnalyticsTab';
import DataTable from './DataTable';

const Dashboard = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Analytics" />
        <Tab label="Data" />
      </Tabs>
      {tabValue === 0 && <AnalyticsTab />}
      {tabValue === 1 && <DataTable />}
    </div>
  );
};

export default Dashboard;


