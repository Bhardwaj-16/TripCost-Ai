import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <svg
                    className = "logo-icon"
                    width = "24"
                    height = "24"
                    viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2.5"
                    strokeLinecap = "round"
                    strokeLinejoin = "round"
                >
                    <path d = "M22 2L11 13"/>
                    <path d = "M22 2L15 22L11 13L2 9L22 2Z"/>
                </svg>
                TripCost AI
            </div>
            <div className = "nav-links">
                <Link href = "#" className = "nav-link active">
                    New Trip
                </Link>
                <Link href = "#" className = "nav-link">
                    Saved Trips
                </Link>
                <Link href = "#" className = "nav-link">
                    About
                </Link>
            </div>
            <div className = "nav-actions">
                <Link href = "#" className = "sign-in">
                    Sign In
                </Link>
                <button className = "btn-primary">Get Started</button>
            </div>
        </nav>
    );
}
