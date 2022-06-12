import '../css/style.css';

export default function Navbar() {
    return (
        <div id="nav">
            <div id="navLeft">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-today-tab" data-bs-toggle="pill" data-bs-target="#pills-today" type="button" role="tab" aria-controls="pills-today" aria-selected="true">Today</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-nextDay-tab" data-bs-toggle="pill" data-bs-target="#pills-nextDay" type="button" role="tab" aria-controls="pills-nextDay" aria-selected="false">Next Day</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}