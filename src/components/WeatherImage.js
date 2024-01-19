import Assets from './Assets';

export default function WeatherImage({ cloud }) {
    return (
        <div id="imageSec">
            {cloud === 'clouds' ? (
                <div>{Assets.Cloudy}</div>
            ) : cloud === 'haze' ? (
                <div>{Assets.Haze}</div>
            ) : cloud === 'clear' ? (
                <img src={Assets.Sun} alt="day" />
            ) : cloud === 'rain' || cloud === 'drizzle' ? (
                <img src={Assets.rainyDay} alt="day" />
            ) : cloud === 'mist' ? (
                <div>{Assets.mist}</div>
            ) : cloud === 'thunderstorm' ? (
                <div>{Assets.thunderstorm}</div>
            ) : cloud === 'snow' ? (
                <div>{Assets.snow}</div>
            ) : cloud === 'snow' ? (
                <div>{Assets.snow}</div>
            ) : (
                <div>{Assets.fewCloud}</div>
            )}
        </div>
    );
}
