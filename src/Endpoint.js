import React from 'react';

export default function Endpoint({ endpoint }) {
    return (
        <div className="endpoint">
            <div className="endpointLabel">{endpoint} Endpoint result: </div>
            <div className="endpointResult"></div>
            <button>Call {endpoint}</button>
        </div>
    )
}