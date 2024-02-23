import React from 'react';
import ParkingLotForm from './parking.slot.form';
import AllocateSlotForm from './allocate.slot';
import DeallocateSlotForm from './deallocate';
import AvailableSlots from './available.slot';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>Parking Lot Management System</h1>

      <div className="slot-form">
        <h2>Onboard Parking Lot</h2>
        <ParkingLotForm />
      </div>

      <div className="slot-form">
        <h2>Allocate Slot</h2>
        <AllocateSlotForm />
      </div>

      <div className="slot-form">
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