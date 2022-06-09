import moment from 'moment';
import { useEffect, useState } from "react";

export default function NextDay({Lat, Lon, finalAdd})
{
    const [Temp0, setTemp] = useState(0);
    const [Temp1, setTemp1] = useState(0);
    const [Temp2, setTemp2] = useState(0);
    const [Temp3, setTemp3] = useState(0);
    const [add, setAdd] = useState('City');

    useEffect(()=>{
        setAdd((prev)=> prev !== finalAdd ? finalAdd : prev);
    }, [])

    const getDayName = (val) =>{
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[val];
    }

    const getDate = (val) => {
        const date = new Date();
        date.setDate(date.getDate()+val);
        const day = date.getDay();
        
        return{
            date: date,
            day: day,
        };
    }

    if(finalAdd !== add)
    {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Lat}&lon=${Lon}&units=metric&exclude=alerts,current,hourly,minutely&appid=f0373ee5488f740bcc226311d533416e`).then((resp) =>{
            resp.json().then((result) => {
                setTemp(Math.round(result.daily[0].temp.day));
                setTemp1(Math.round(result.daily[1].temp.day));
                setTemp2(Math.round(result.daily[2].temp.day));
                setTemp3(Math.round(result.daily[3].temp.day));
            })
        });
    }

    return(
        <div id="nextSection">
                        
            <div className="nextCard">
                <div className="card-left-side">
                    <p className="card-day">{getDayName(getDate(1).day)}</p>
                    <p className="card-date">{moment(getDate(1).date).format('DD.MM.YYYY')}</p>
                    <a href="./Later" target='_blank'  rel='noreferrer' className="card-details">see hours <i className="fas fa-arrow-right-long" style={{color: '#104FF0'}}></i></a>
                </div>

                <p className="card-line"></p>

                <div className="card-right-side">
                    <span><i className="fas fa-cloud"></i></span>
                    <p>{Temp0}℃</p>
                </div>
            </div>

            <div className="nextCard">
                <div className="card-left-side">
                    <p className="card-day">{getDayName(getDate(2).day)}</p>
                    <p className="card-date">{moment(getDate(2).date).format('DD.MM.YYYY')}</p>
                    <a href="./Later" target='_blank' rel='noreferrer' className="card-details">see hours <i className="fas fa-arrow-right-long" style={{color: '#104FF0'}}></i></a>
                </div>

                <p className="card-line"></p>

                <div className="card-right-side">
                    <span><i className="fas fa-cloud"></i></span>
                    <p>{Temp1}℃</p>
                </div>
            </div>

            <div className="nextCard">
                <div className="card-left-side">
                    <p className="card-day">{getDayName(getDate(3).day)}</p>
                    <p className="card-date">{moment(getDate(3).date).format('DD.MM.YYYY')}</p>
                    <a href="./Later" target='_blank' rel='noreferrer' className="card-details">see hours <i className="fas fa-arrow-right-long" style={{color: '#104FF0'}}></i></a>
                </div>

                <p className="card-line"></p>

                <div className="card-right-side">
                    <span><i className="fas fa-cloud"></i></span>
                    <p>{Temp2}℃</p>
                </div>
            </div>

            <div className="nextCard">
                <div className="card-left-side">
                    <p className="card-day">{getDayName(getDate(4).day)}</p>
                    <p className="card-date">{moment(getDate(4).date).format('DD.MM.YYYY')}</p>
                    <a href="./Later" target='_blank' rel='noreferrer' className="card-details">see hours <i className="fas fa-arrow-right-long" style={{color: '#104FF0'}}></i></a>
                </div>

                <p className="card-line"></p>

                <div className="card-right-side">
                    <span><i className="fas fa-cloud"></i></span>
                    <p>{Temp3}℃</p>
                </div>
            </div>
               

        </div>
    );
}