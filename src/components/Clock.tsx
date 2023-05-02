"use client";

import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours() % 12;
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');  
    const ampm = time.getHours() < 12 ? 'AM' : 'PM';

    return (
        <div className="digital-clock rgb-effect">
        {hours}:{minutes}:{seconds} {ampm}
        </div>
    );
}

export default Clock;
