import React from 'react';
import ParkingLotForm from './parking.slot.form';
import AllocateSlotForm from './allocate.slot';
import DeallocateSlotForm from './deallocate';
import AvailableSlots from './available.slot';

const App = () => {
  return (
    <div>
      <h1>Parking Lot Management System</h1>

      <div>
        <h2>Onboard Parking Lot</h2>
        <ParkingLotForm />
      </div>

      <div>
        <h2>Allocate Slot</h2>
        <AllocateSlotForm />
      </div>

      <div>
        <h2>Deallocate Slot</h2>
        <DeallocateSlotForm />
      </div>

      <div>
        <AvailableSlots />
      </div>
    </div>
  );
};

export default App;
