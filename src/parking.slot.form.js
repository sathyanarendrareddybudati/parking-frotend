import React, { useState } from 'react';
import axios from 'axios';

const ParkingLotForm = () => {
    const [formData, setFormData] = useState({ name: '', totalFloors: 0, floorConfig: [] });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFloorConfigChange = (e, index) => {
        const newFloorConfig = [...formData.floorConfig];
        newFloorConfig[index] = e.target.value;
        setFormData({ ...formData, floorConfig: newFloorConfig });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/parking-lots', formData);
            alert('Parking lot onboarded successfully!');
        } catch (error) {
            console.error(error);
            alert('Error onboarding parking lot');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

            <label>Total Floors:</label>
            <input type="number" name="totalFloors" value={formData.totalFloors} onChange={handleInputChange} />

            <label>Floor Configuration:</label>
            {Array.from({ length: formData.totalFloors }).map((_, index) => (
                <input
                    key={index}
                    type="text"
                    value={formData.floorConfig[index] || ''}
                    onChange={(e) => handleFloorConfigChange(e, index)}
                />
            ))}

            <button type="submit">Onboard Parking Lot</button>
        </form>
    );
};

export default ParkingLotForm;
