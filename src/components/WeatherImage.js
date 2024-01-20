import { useEffect, useState } from 'react';
import clearDay from '../assets/clear-day.svg';
import clearNight from '../assets/clear-night.svg';
import cloudyDay from '../assets/cloudy.svg';
import hazeDay from '../assets/haze-day.svg';
import hazeNight from '../assets/haze-night.svg';
import mist from '../assets/mist.svg';
import brokenCloud from '../assets/overcast.svg';
import rainyNight from '../assets/partly-cloudy-night-rain.svg';
import cloudyNight from '../assets/partly-cloudy-night.svg';
import rain from '../assets/rain.svg';
import snow from '../assets/sleet.svg';
import thunderstorm from '../assets/thunderstorms.svg';

export default function WeatherImage({ cloud }) {
    const [isDay, setIsDay] = useState(true);
    useEffect(() => {
        const hour = new Date().getHours();
        const checkDay = hour >= 6 && hour <= 18 ? true : false;
        setIsDay(checkDay);
    }, []);
    return (
        <div id="imageSec">
            {cloud === 'clouds' ? (
                <img src={isDay ? cloudyDay : cloudyNight} alt="Cloudy" />
            ) : cloud === 'haze' ? (
                <img src={isDay ? hazeDay : hazeNight} alt="Haze" />
            ) : cloud === 'clear' ? (
                <img src={isDay ? clearDay : clearNight} alt="Clear" />
            ) : cloud === 'rain' || cloud === 'drizzle' ? (
                <img src={isDay ? rain : rainyNight} alt="Rain" />
            ) : cloud === 'mist' ? (
                <img src={mist} alt="Mist" />
            ) : cloud === 'thunderstorm' ? (
                <img src={thunderstorm} alt="Thunderstorm" />
            ) : cloud === 'snow' ? (
                <img src={snow} alt="Snow" />
            ) : cloud === 'snow' ? (
                <img src={brokenCloud} alt="Cloudy" />
            ) : (
                <img src={isDay ? clearDay : clearNight} alt="Clear" />
            )}
        </div>
    );
}
