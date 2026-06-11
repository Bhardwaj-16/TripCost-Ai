import Link from "next/link";

export default function Footer() {
    return (
        <footer className = "footer">
            <div className = "footer-logo">TripCost AI</div>
            <div className = "made-for">
                Made with love for <a href = "https://offtrack.hackclub.com/">OffTrack</a>
            </div>
        </footer>
    );
}