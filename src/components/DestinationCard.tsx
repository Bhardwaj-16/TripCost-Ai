import React from "react";

interface DestinationCardProps {
    destination: string;
    duration: string;
    budget: string;
    flightsCost: string;
    hotelsCost: string;
}

export default function DestinationCard({
    destination,
    duration,
    budget,
    flightsCost,
    hotelsCost,
}: DestinationCardProps) {
    return (
        <div className = "floating-card">
            <div className = "card-header">
                <div className = "card-icon">
                    <svg
                        width = "18"
                        height = "18"
                        viewBox = "0 0 24 24"
                        fill = "none"
                        stroke = "currentColor"
                        strokeWidth = "2"
                        strokeLinecap = "round"
                        strokeLinejoin = "round"
                    >
                        <rect x = "2" y = "4" width = "20" height = "16" rx = "2"/>
                        <path d = "M2 10h20"/>
                    </svg>
                </div>
                {destination} ({duration})
            </div>
            <div className = "budget-details">
                <div className = "budget-label">Est. Budget</div>
                <div className = "budget-amount">{budget}</div>
            </div>
            <div className = "hotelflight-container">
                <div className = "hotelflight-labels">
                    <span>Flights: {flightsCost}</span>
                    <span>Hotels: {hotelsCost}</span>
                </div>
            </div>
        </div>
    );
}
