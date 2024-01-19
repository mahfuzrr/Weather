import { useEffect, useState } from 'react';

export default function CurrentTemperature({ temp, cf, feel }) {
    const [date, setDate] = useState(new Date());

    const getDay = (index) => {
        const allDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return allDay[index];
    };

    useEffect(() => {
        const interVal = setInterval(() => setDate(new Date(), 1000));
        return () => {
            clearInterval(interVal);
        };
    }, []);

    return (
        <div id="Temp">
            <h1>
                {`${temp}${cf}`} <span id="feel"> feels like {`${feel}${cf}`}</span>
            </h1>
            <p>
                {getDay(date.getDay())},{' '}
                <span id="time">
                    {date
                        .toLocaleTimeString('en-US', { hour: '2-digit' })
                        .replace(' AM', '')
                        .replace(' PM', '')}
                    :{date.toLocaleTimeString('en-US', { minute: '2-digit' })}:
                    {date.toLocaleTimeString('en-US', { second: '2-digit' })}
                </span>
            </p>
        </div>
    );
}
