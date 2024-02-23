import React, { useState } from 'react';
import axios from 'axios';

const ParkingLotForm = () => {
    const initialFormData = { name: '', totalFloors: 0, floorConfig: [] };
    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFloorConfigChange = (e, index) => {
        const newFloorConfig = [...formData.floorConfig];
        newFloorConfig[index] = { ...newFloorConfig[index], size: e.target.value };
        setFormData({ ...formData, floorConfig: newFloorConfig });
    };

    const handleSlotChange = (e, index) => {
        const newFloorConfig = [...formData.floorConfig];
        newFloorConfig[index] = { ...newFloorConfig[index], spaces: parseInt(e.target.value, 10) };
        setFormData({ ...formData, floorConfig: newFloorConfig });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/1/parking-lots', formData);
            alert('Parking lot onboarded successfully!');
            resetForm();
        } catch (error) {
            console.error(error);
            alert('Error onboarding parking lot');
        }
    };

    const resetForm = () => {
        setFormData(initialFormData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

            <label>Total Floors:</label>
            <input type="number" name="totalFloors" value={formData.totalFloors} onChange={handleInputChange} />

            <label>Floor Configuration:</label>
            {Array.from({ length: formData.totalFloors }).map((_, index) => (
                <div key={index}>
                    <label>Size:</label>
                    <select value={formData.floorConfig[index]?.size || ''} onChange={(e) => handleFloorConfigChange(e, index)}>
                        <option value="">Select Size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xl_large">XL Large</option>
                    </select>

                    <label>Spaces:</label>
                    <input type="number" value={formData.floorConfig[index]?.spaces || ''} onChange={(e) => handleSlotChange(e, index)} />
                </div>
            ))}

            <button type="submit">Onboard Parking Lot</button>
        </form>
    );
};

export default ParkingLotForm;
