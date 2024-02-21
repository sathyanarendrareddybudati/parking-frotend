import React, { useState } from 'react';
import axios from 'axios';

const DeallocateSlotForm = () => {
    const [slotNumber, setSlotNumber] = useState('');

    const handleSlotNumberChange = (e) => {
        setSlotNumber(e.target.value);
    };

    const handleDeallocateSlot = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/1/slots/deallocate/?slotNumber=${slotNumber}`);
            alert('Slot deallocated successfully!');
        } catch (error) {
            console.error(error);
            alert('Error deallocating slot');
        }
    };    

    return (
        <div>
            <label>Slot Number:</label>
            <input type="text" value={slotNumber} onChange={handleSlotNumberChange} />

            <button onClick={handleDeallocateSlot}>Deallocate Slot</button>
        </div>
    );
};

export default DeallocateSlotForm;
