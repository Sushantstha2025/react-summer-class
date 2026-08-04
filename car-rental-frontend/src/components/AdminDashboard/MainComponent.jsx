import React, { useState } from 'react';
import BottomComponent from './BottomComponent'
import TableComponent from './TableComponent'
import VehicleManagementTable from './VehicleManagementTable'

const MainComponent = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleStatsRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <main className='bg-[#FAF8FF] min-h-[calc(100vh-60px)] px-12 py-6'>
      <BottomComponent key={refreshKey} />
      <VehicleManagementTable onVehicleUpdate={handleStatsRefresh} />
      <TableComponent />
    </main>
  );
};

export default MainComponent;
