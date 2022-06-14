import moment from 'moment';
import '../css/style.css';
import Navbar from "./NavBar";
import NextDay from './NextDay';


export default function RightSide({windResult, sunSet, sunRise, vis, humidity, timezone, Temp0=0, Temp1=0, Temp2=0, Temp3=0, cf}) {

    const sunRiseTime = () =>{
        const x = moment.utc(sunRise,'X').add(timezone,'seconds').format('hh:mm A');
        return x;
    }

    const sunSetTime = () =>{
        const x = moment.utc(sunSet,'X').add(timezone,'seconds').format('hh:mm A');
        return x;
    }


    return (
        <div id="rightSideDiv" className="col-sm-8">

            <Navbar/>

            <div className="tab-content" id="pills-tabContent">

                <div className="tab-pane fade show active" id="pills-today" role="tabpanel" aria-labelledby="pills-today-tab">

                    <div id="infoCard">

                        <div className="cardContainer">


                            <div className="card" id="firstCard">
                                <span className="cardTitles">Humidity</span>
                                <div id="rainResult"><h1>{humidity}%</h1></div>
                                <div className="cardIcons"><span><i className="fas fa-temperature-high" style={{marginRight: 5 + "%"}}></i>{humidity <= 30 ? "Low" : humidity <= 60 ? "Medium" : "High"}</span></div>
                            </div>

                            <div className="card" id="secondCard">
                                <span className="cardTitles">Wind Status</span>
                                <div id="windResult"><h1>{windResult()} km/h</h1></div>
                                <div className="cardIcons"><span><i className="fa-solid fa-location-dot" style={{marginRight: 5 + "%"}}></i> WSW</span></div>
                            </div>
                        </div>

                        <div className="cardContainer" id="cardSec">

                            <div className="card" id="thirdCard">
                                <span className="cardTitles">Sunrise & Sunset</span>

                                <div id="timeResult">

                                    <div id="timeFirst">
                                        <span><i className="fa fa-arrow-circle-up timeIcon"></i></span>
                                        <h5>{sunRiseTime()}</h5>
                                    </div>

                                    <div id="timeSec">
                                        <span><i className="fa fa-arrow-circle-down timeIcon"></i></span>
                                        <h5>{sunSetTime()}</h5>
                                    </div>

                                </div>
                            </div>

                            <div className="card" id="fourthCard">
                                <span className="cardTitles">Visibility</span>
                                <div id="visResult"><h1>{vis} km</h1></div>
                                <div id="visMsg">
                                    {vis <= 2.0 ? <p>Bad 🙁</p> : vis <= 4.0 ? <p>Average 🙁</p> 
                                    
                                    : vis <= 6.0 ? <p>Good 😃</p> : <p>Very Good 😎</p>}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="tab-pane fade" id="pills-nextDay" role="tabpanel" aria-labelledby="pills-nextDay-tab">
                    <NextDay Temp0={Temp0} Temp1={Temp1} Temp2={Temp2} Temp3={Temp3} cf={cf}/>
                </div>

            </div>

        </div>
    );
}