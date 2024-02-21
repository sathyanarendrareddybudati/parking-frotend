import React, { useState } from 'react';
import axios from 'axios';

const AllocateSlotForm = () => {
    const [carType, setCarType] = useState('');
    const [slotNumber, setSlotNumber] = useState('');

    const handleCarTypeChange = (e) => {
        setCarType(e.target.value);
    };

    const handleAllocateSlot = async () => {
        try {
            const response = await axios.post('http://127.0.0.1/api/1/slots/allocate', { carType });
            setSlotNumber(response.data.data.slotNumber);
        } catch (error) {
            console.error(error);
            alert('Error allocating slot');
        }
    };

    return (
        <div>
            <label>Car Type:</label>
            <input type="text" value={carType} onChange={handleCarTypeChange} />

            <button onClick={handleAllocateSlot}>Allocate Slot</button>

            {slotNumber && <p>Allocated Slot: {slotNumber}</p>}
        </div>
    );
};

export default AllocateSlotForm;
