import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AvailableSlots = () => {
    const [availableSlots, setAvailableSlots] = useState([]);

    useEffect(() => {
        const fetchAvailableSlots = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/1/slots');
                console.log('====',response);
                setAvailableSlots(response.data.data.availableSlots);
            } catch (error) {
                console.error(error);
                alert('Error fetching available slots');
            }
        };

        fetchAvailableSlots();
    }, []);

    return (
        <div>
            <h2>Available Slots</h2>
            {availableSlots.map((floor) => (
                <div key={floor.floorNumber}>
                    <p>Floor {floor.floorNumber}</p>
                    <ul>
                        {floor.slots.map((slot) => (
                            <li key={slot.id}>{`${slot.size}: ${slot.available} available`}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default AvailableSlots;
