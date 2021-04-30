import React from 'react';

export default function Endpoint({ endpoint, onClick, data }) {
    return (
        <div className="endpoint">
            <div className="endpointLabel">{endpoint} Endpoint result: </div>
            <div className="endpointResult">{data}</div>
            <button onClick={onClick}>Call {endpoint}</button>
        </div>
    )
}