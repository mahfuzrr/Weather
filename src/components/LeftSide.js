import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import NYC from '../assets/NYC Skyline.jpg';
import '../css/style.css';
import { toCelcius, toFahrenheit } from './Converter';
import ConverterSwitch from './ConverterSwitch';
import CurrentTemperature from './CurrentTemperature';
import RightSide from './RightSide';
import SearchBar from './SearchBar';
import WeatherImage from './WeatherImage';

export default function LeftSide() {
    const [address, setAddress] = useState('');
    const [cityName, setCityName] = useState('');
    const [temp, setTemp] = useState(0);
    const [feel, setFeel] = useState(0);
    const [icon, setIcon] = useState('');
    const [cloud, setCloud] = useState('');
    const [humidity, setHumidity] = useState(0);
    const [wind, setWind] = useState(0);
    const [sunRise, setSunRise] = useState(0);
    const [sunSet, setSunSet] = useState(0);
    const [visibility, setVisiblity] = useState(0);
    const [cf, setCF] = useState('℃');
    const [timezone, setTimeZone] = useState(0);
    const [isChecked, setChecked] = useState(false);
    const [upcomingTemperature, setUpcomingTemperature] = useState([]);

    const windResult = () => {
        const ans = parseFloat(wind * (18 / 5)).toFixed(2);
        return ans;
    };

    // Fetching API
    const fetchData = (firstUrl) => {
        fetch(firstUrl).then((res) => {
            res.json()
                .then((resp) => {
                    // console.log(resp);
                    setTemp(parseInt(resp?.main.temp, 10));
                    setFeel(parseInt(resp?.main.feels_like, 10));
                    setCloud(resp?.weather[0].main?.toLowerCase());
                    setIcon(resp?.weather[0]?.icon + '.png');
                    setWind(resp?.wind.speed);
                    setSunRise(resp?.sys.sunrise);
                    setSunSet(resp?.sys.sunset);
                    setVisiblity(parseInt(resp?.visibility / 1000, 10).toFixed(2));
                    setHumidity(resp?.main.humidity);
                    setTimeZone(resp?.timezone);
                    setCityName(resp?.name);

                    return {
                        lat: resp.coord.lat,
                        lon: resp.coord.lon,
                    };
                })
                .then(({ lat = 0, lon = 0 }) => {
                    fetch(
                        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=alerts,current,hourly,minutely&appid=f0373ee5488f740bcc226311d533416e`
                    ).then((secRes) => {
                        secRes
                            .json()
                            .then((result) => {
                                // console.log(result);
                                const updatedResult = result?.daily?.filter((data, index) => {
                                    if (index != 0 && index <= 5) return data;
                                });
                                setUpcomingTemperature(updatedResult);
                            })
                            .catch(() => {
                                console.log('Error');
                            });
                    });
                });
        });
    };

    const searchTemparature = () => {
        if (address) {
            fetchData(
                `https://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=f0373ee5488f740bcc226311d533416e`
            );
        } else {
            toast.error('Please enter valid address', {
                position: 'top-right',
                duration: 800,
            });
        }
    };

    const toggleChecked = () => {
        if (!isChecked) {
            setTemp(toFahrenheit(temp));
            setFeel(toFahrenheit(feel));
            setCF('℉');
        } else {
            setTemp(toCelcius(temp));
            setFeel(toCelcius(feel));
            setCF('℃');
        }
        setChecked(!isChecked);
    };

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchData(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=f0373ee5488f740bcc226311d533416e`
                    );
                },
                (err) => {
                    toast.error(err.message, {
                        position: 'top-right',
                    });
                }
            );
        }
    };

    useEffect(() => {
        const allCss = document.getElementById('slide').classList;
        if (isChecked) {
            allCss.add('slider-f');
            allCss.remove('slider');
        } else {
            allCss.add('slider');
            allCss.remove('slider-f');
        }
    }, [isChecked]);

    return (
        <div className="row">
            <div id="leftSideDiv" className="col-sm-4">
                <div className="row">
                    <SearchBar
                        setAddress={setAddress}
                        searchTemparature={searchTemparature}
                        getCurrentLocation={getCurrentLocation}
                    />
                    <WeatherImage cloud={cloud} />
                    <CurrentTemperature temp={temp} cf={cf} feel={feel} />

                    {cloud && (
                        <div id="littleInfo">
                            <div id="insideLittleInfo">
                                <img
                                    src={'http://openweathermap.org/img/w/' + icon}
                                    alt="icon-space"
                                    width="30px"
                                    height="30px"
                                />
                                <span className="iconSpace">
                                    {cloud?.charAt(0)?.toUpperCase() + cloud?.slice(1)}
                                </span>
                            </div>
                        </div>
                    )}

                    <div id="location">
                        <div id="locationCard">
                            <p>{cityName ? cityName : 'Search'}</p>
                            <img src={NYC} alt="City" />
                        </div>
                    </div>
                </div>

                {/* converter switch */}
                <ConverterSwitch
                    isChecked={isChecked}
                    setChecked={setChecked}
                    toggleChecked={toggleChecked}
                />
            </div>
            <RightSide
                windResult={windResult}
                sunSet={sunSet}
                sunRise={sunRise}
                vis={visibility}
                humidity={humidity}
                timezone={timezone}
                upcomingTemperature={upcomingTemperature}
                cf={cf}
            />
        </div>
    );
}
