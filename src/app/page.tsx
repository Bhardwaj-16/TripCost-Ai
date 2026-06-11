import Image from "next/image";
import DestinationCard from "@/components/DestinationCard";

export default function Home() {
    return (
        <main className = "hero">
            <div className = "hero-content">
                <div className = "badge">
                    <svg
                        width = "14"
                        height = "14"
                        viewBox = "0 0 24 24"
                        fill = "none"
                        stroke = "currentColor"
                        strokeWidth = "2.5"
                        strokeLinecap = "round"
                        strokeLinejoin = "round"
                    >
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                    AI-POWERED BUDGETING
                </div>
                <h1 className = "hero-title">
                    Plan your trip with <span className = "highlight">intelligent precision.</span>
                </h1>
                <p className = "hero-description">
                    TripCost analyzes the web and many datapoints to generate accurate travel budgets.
                </p>
                <div className = "hero-button">
                    <button className = "btn-teal">
                        Start Planning
                        <svg
                            width = "20"
                            height = "20"
                            viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2.5"
                            strokeLinecap = "round"
                            strokeLinejoin = "round"
                        >
                            <path d = "M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className = "hero-image-wrapper">
                <Image
                    src = "/hero.png"
                    alt = "Scenery"
                    fill
                    className = "hero-image"
                    priority
                />
                <DestinationCard
                    destination = "Kyoto, Japan"
                    duration = "7 Days"
                    budget = "$1,800"
                    flightsCost = "$800"
                    hotelsCost = "$1000"
                />
            </div>
        </main>
    );
}
 