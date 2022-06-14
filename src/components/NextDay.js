import moment from 'moment';

export default function NextDay({Temp0=0, Temp1=0, Temp2=0, Temp3=0, cf})
{
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