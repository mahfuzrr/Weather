import moment from 'moment';
import { useEffect, useState } from 'react';
import Assets from './Assets';
import { toFahrenheit } from './Converter';

export default function NextDay({ data, cf, index }) {
    const [maxTemperature, setMaxTemperature] = useState(0);
    const [minTemperature, setMinTemperature] = useState(0);
    const [icon, setIcon] = useState('');

    useEffect(() => {
        if (data) {
            setMaxTemperature(Math.round(data?.temp?.max));
            setMinTemperature(Math.round(data?.temp?.min));
            setIcon('http://openweathermap.org/img/w/' + data?.weather[0]?.icon + '.png');
        }
    }, [data]);

    const getDayName = (val) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[val];
    };

    const getDate = (val) => {
        const date = new Date();
        date.setDate(date.getDate() + val);
        const day = date.getDay();

        return {
            date: date,
            day: day,
        };
    };

    return (
        <div className="nextCard">
            <div className="card-left-side">
                <p className="card-day">{getDayName(getDate(index).day)}</p>
                <p className="card-date">{moment(getDate(index).date).format('DD.MM.YYYY')}</p>
                {/* <a href="./Later" target="_blank" rel="noreferrer" className="card-details">
                    see hours{' '}
                    <i className="fas fa-arrow-right-long" style={{ color: '#104FF0' }}></i>
                </a> */}
            </div>

            <p className="card-line"></p>

            <div className="card-right-side">
                {data?.weather[0]?.icon ? (
                    <img src={icon} alt="weather" />
                ) : (
                    <div className="card-right-default-img">{Assets.Haze}</div>
                )}

                <div className="card-right-temp">
                    {cf === '℉' ? (
                        <p>
                            {toFahrenheit(maxTemperature)}
                            <span> / {toFahrenheit(minTemperature)}</span>{' '}
                        </p>
                    ) : (
                        <p>
                            {maxTemperature}
                            <span> / {minTemperature}</span>
                        </p>
                    )}
                    {cf === '℉' ? <span> ℉</span> : <span> ℃</span>}
                </div>
            </div>
        </div>
    );
}
