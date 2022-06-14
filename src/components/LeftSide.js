import { useEffect, useState } from 'react';
import Cloudy from '../assets/cloud.png';
import Haze from '../assets/haze.png';
import NYC from '../assets/NYC Skyline.jpg';
import rainyDay from '../assets/rainy-day.png';
import Sun from '../assets/sun.png';
import '../css/style.css';
import { toCelcius, toFahrenheit } from './Converter';
import RightSide from './RightSide';


export default function LeftSide() {

    const [address, setAddress] = useState('');
    const [finalAdd, setFinalAdd] = useState('City');
    const [temp, setTemp] = useState(0);
    const [feel, setFeel] = useState(0);
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [min, setMin] = useState('');
    const [cloud, setCloud] = useState('');
    const [hum, setHum] = useState(0);
    const [wind, setWind] = useState(0);
    const [sunRise, setSunRise] = useState(0);
    const [sunSet, setSunSet] = useState(0);
    const [vis, setVis] = useState(0);
    const [cf, setCF] = useState('℃');
    const [timezone, setTimeZone]= useState(0);
    const [isChecked, setChecked] = useState(false);
    const [Temp0, setTemp0] = useState(0);
    const [Temp1, setTemp1] = useState(0);
    const [Temp2, setTemp2] = useState(0);
    const [Temp3, setTemp3] = useState(0);


    const handleChange = (e) => {
        const val = e.target.value;
        setAddress(val);
    }

    const windResult = () =>{
        const ans = parseFloat(wind*(18/5)).toFixed(2);
        return ans;
    }

    const getDay = (val) =>{
        const allDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return allDay[val];
    }

    useEffect(()=>{
        const date = new Date();
        const day = date.getDay();
        const time = date.getHours();
        const min = date.getMinutes();

        setDay(getDay(day));
        setTime(time);
        setMin(min);
        
    }, [finalAdd])

    const fetchData = (firstUrl) =>{
        fetch(firstUrl).then((res)=>{
            res.json().then((resp)=>{

                setTemp(parseInt(resp.main.temp));
                setFeel(parseInt(resp.main.feels_like));
                setCloud(resp.weather[0].main);
                setWind(resp.wind.speed);
                setSunRise(resp.sys.sunrise);
                setSunSet(resp.sys.sunset);
                setVis(parseInt((resp.visibility)/1000).toFixed(2));
                setHum(resp.main.humidity);
                setTimeZone(resp.timezone);
                
                //Debug
                console.log(resp);

                return{
                    lat: resp.coord.lat,
                    lon: resp.coord.lon
                }
            }).then(({lat=0, lon=0})=>{
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=alerts,current,hourly,minutely&appid=f0373ee5488f740bcc226311d533416e`).then((secRes)=>{
                    secRes.json().then((result)=>{

                        //Debug
                        console.log(result);
                        
                        setTemp0(Math.round(result.daily[0].temp.day));
                        setTemp1(Math.round(result.daily[1].temp.day));
                        setTemp2(Math.round(result.daily[2].temp.day));
                        setTemp3(Math.round(result.daily[3].temp.day));
                    }).catch((err)=>{console.log('Error')});
                })
            })
        })
    }

    const searchTemp = (event) => {
        if (event.key === 'Enter') {
            setFinalAdd(address);
            fetchData(`https://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=f0373ee5488f740bcc226311d533416e`);
        }
    }

    const handleChangeSw = (event) =>{
        setChecked((event.target.checked));
    }

    const toggleChecked = () =>{
        
        if(!isChecked)
        {
            setTemp(toFahrenheit(temp));
            setFeel(toFahrenheit(feel));
            setCF('℉');
        }
        else{
            setTemp(toCelcius(temp));
            setFeel(toCelcius(feel));
            setCF('℃');
        }
        setChecked(!isChecked);
    }

    useEffect(()=>{
      
      const allCss = document.getElementById('slide').classList;
      if(isChecked)
      {
        allCss.add('slider-f');
        allCss.remove('slider');
      }
      else
      {
        allCss.add('slider');
        allCss.remove('slider-f');
      }
    
    }, [isChecked])


    return (
        <div className='row'>
            <div id="leftSideDiv" className="col-sm-4">

                <div className="row">

                <div id="searchGroup">
                    <div id="searchBar" className="col-sm-12">
                  
                        <div className="form-group" id="groupSearch">
                            <span id="searchIcon"><i className="fa-solid fa-magnifying-glass"></i></span>
                            <input type="text" id="sBar" className="form-control" onChange={handleChange} onKeyPress={searchTemp} placeholder="Serch for places"/>
                        </div>
        
                    </div>
                    <div id="switchLeft">
                        <div className="switch">
                            <span>
                            <input type="checkbox" id="toggleInput" checked={isChecked} onChange={handleChangeSw}></input>
                            <button id="slide" className="slider" type="button" onClick={toggleChecked}></button>
                            </span>
                        </div> 
                    </div>
                </div>

                    <div id="imageSec">
                        
                        {cloud === "Clouds" ? <img src={Cloudy} alt="day" /> : cloud === "Haze" ? <img src={Haze} alt="day" /> :
                            cloud === "Clear" ? <img src={Sun} alt="day" /> : cloud === "Rain" ? <img src={rainyDay} alt="day" /> :<img src={Cloudy} alt="day" />
                        }

                    </div>

                    <div id="Temp">
                        <h1>{`${temp}${cf}`} <span id="feel"> feels like {`${feel}${cf}`}</span></h1>
                        <p>{day}, <span id="time">{time}:{min}</span></p>
                    </div>

                    <div id="littleInfo">
                        <div id="insideLittleInfo">
                            <p> <i className="fas fa-cloud"></i><span className="iconSpace">{cloud}</span></p>
                            <p id="lowIcon"><i className="fas fa-cloud-showers-heavy"></i> <span className="iconSpace">Rain</span> - update later</p>
                        </div>
                    </div>

                    <div id="location">
                        <div id="locationCard">
                            <p>{finalAdd}</p>
                            <img src={NYC} alt="City" />
                        </div>
                    </div>
                </div>
                
            </div>
            <RightSide windResult={windResult} sunSet = {sunSet} sunRise={sunRise} vis={vis} humidity={hum} timezone = {timezone} Temp0={Temp0} Temp1={Temp1} Temp2={Temp2} Temp3={Temp3} cf={cf}/>
        </div>
    );
}