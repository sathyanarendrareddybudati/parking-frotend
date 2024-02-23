import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AvailableSlots = () => {
    const [availableSlots, setAvailableSlots] = useState([]);

    useEffect(() => {
        const fetchAvailableSlots = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/1/slots');
                setAvailableSlots(response.data.data.availableSlots.data);
            } catch (error) {
                console.error(error);
                alert('Error fetching available slots');
            }
        };

        fetchAvailableSlots();
    }, []);

    return (
        <div>
            {Array.isArray(availableSlots) && availableSlots.length > 0 ? (
                availableSlots.map((parkingLot) => (
                    <div key={parkingLot.parkingLotName} className="parking-lot">
                        <h2>{parkingLot.parkingLotName}</h2>
                        {parkingLot.floors.map((floor) => (
                            <div key={floor.floorNumber} className="floor">
                                <p>Floor {floor.floorNumber}</p>
                                {floor.slots.length > 0 ? (
                                    <ul>
                                        {floor.slots.map((slot) => (
                                            <li key={slot.id}>{`${slot.size}: ${slot.available} available`}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No available slots on this floor</p>
                                )}
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <p>No available parking lots found</p>
            )}
        </div>
    );
};

export default AvailableSlots;
