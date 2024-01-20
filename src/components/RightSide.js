import moment from 'moment';
import { Toaster } from 'react-hot-toast';
import humidityImage from '../assets/humidity.svg';
import NotFoundImage from '../assets/not_found.png';
import sunriseImage from '../assets/sunrise.svg';
import sunsetImage from '../assets/sunset.svg';
import windsockImage from '../assets/windsock.svg';
import '../css/style.css';
import Navbar from './NavBar';
import NextDay from './NextDay';

export default function RightSide({
    windResult,
    sunSet,
    sunRise,
    vis,
    humidity,
    timezone,
    upcomingTemperature = [],
    cf,
}) {
    const sunRiseTime = () => {
        const x = moment.utc(sunRise, 'X').add(timezone, 'seconds').format('hh:mm A');
        return x;
    };

    const sunSetTime = () => {
        const x = moment.utc(sunSet, 'X').add(timezone, 'seconds').format('hh:mm A');
        return x;
    };

    return (
        <div id="rightSideDiv" className="col-sm-8">
            <Navbar />
            <Toaster />
            <div className="tab-content" id="pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="pills-today"
                    role="tabpanel"
                    aria-labelledby="pills-today-tab"
                >
                    <div id="infoCard">
                        <div className="cardContainer">
                            <div className="card" id="firstCard">
                                <span className="cardTitles">Humidity</span>
                                <div id="rainResult">
                                    <h1>{humidity}%</h1>
                                </div>
                                <div className="cardIcons">
                                    <img className="card-images" src={humidityImage} />
                                    {/* <div className="card-images">{humidityImage}</div> */}
                                    <p>
                                        {humidity <= 30
                                            ? 'Low'
                                            : humidity <= 60
                                              ? 'Medium'
                                              : 'High'}
                                    </p>
                                </div>
                            </div>

                            <div className="card" id="secondCard">
                                <span className="cardTitles">Wind Status</span>
                                <div id="windResult">
                                    <h1>{windResult()} km/h</h1>
                                </div>
                                <div className="cardIcons">
                                    <img className="card-images" src={windsockImage} />
                                    <p>WSW</p>
                                </div>
                            </div>
                        </div>

                        <div className="cardContainer" id="cardSec">
                            <div className="card" id="thirdCard">
                                <span className="cardTitles">Sunrise & Sunset</span>
                                <div id="timeResult">
                                    <div id="timeFirst">
                                        <img className="card-images" src={sunriseImage} />
                                        <h5>{sunRiseTime()}</h5>
                                    </div>

                                    <div id="timeSec">
                                        <img className="card-images" src={sunsetImage} />
                                        <h5>{sunSetTime()}</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="card" id="fourthCard">
                                <span className="cardTitles">Visibility</span>
                                <div id="visResult">
                                    <h1>{vis} km</h1>
                                </div>
                                <div id="visMsg">
                                    {vis <= 2.0 ? (
                                        <p>Bad 🙁</p>
                                    ) : vis <= 4.0 ? (
                                        <p>Average 🙁</p>
                                    ) : vis <= 6.0 ? (
                                        <p>Good 😃</p>
                                    ) : (
                                        <p>Very Good 😎</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="tab-pane fade"
                    id="pills-nextDay"
                    role="tabpanel"
                    aria-labelledby="pills-nextDay-tab"
                >
                    <div id="nextSection">
                        {upcomingTemperature?.length > 0 ? (
                            upcomingTemperature?.map((data, index) => (
                                <NextDay key={data?.dt} data={data} cf={cf} index={index + 1} />
                            ))
                        ) : (
                            <img
                                className="not-found-img"
                                src={NotFoundImage}
                                alt="Search Address"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
