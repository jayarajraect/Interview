import React , { useState , useRef , useEffect} from 'react';
import axios from 'axios';
import { indianStates } from '../asserts/state';

function Weather(props) {
    const [weatherdata, setweatherdata] = useState();
    const [state, setstate] = useState('');
    const stateselection = (e) =>{
        setstate(e.target.value)
    }
    useEffect(() => {
        let region = state;
        let URL ='http://api.openweathermap.org/data/2.5/weather?q='+','+region+'IN&APPID=767a7cce68ed2b3098d41e24364ec56c';
        axios.request(URL).then( async function (response) {
            response = await response.data
             setweatherdata(response);
        }).catch(function (error) {
            console.error(error);
        });
      }, [state]);
    
    return (
       <>
        <div className="page_title">Weather</div>
        <div className="main_content flex-direction-column">
            <div className="select_wrap_new">
                <label className="form_label">Select State</label>
                <select name="state" className="form_control" value={state || ''}  onChange={(e) => stateselection(e)}>
                    <option value="">Select your State</option>
                    {
                        indianStates.map(staesdata => (
                            <option value={staesdata.name} key={staesdata.abbreviation}>{staesdata.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="blue_layout">
                <div className="one_by_three right_border">
                    <div className="climatic_lable">Temperature</div>
                    {weatherdata&&weatherdata.main.temp ? <div className="wheather_value">{weatherdata.main.temp}</div>: null}
                </div>
                <div className="one_by_three right_border">
                    <div className="climatic_lable">Humidity</div>
                    {weatherdata&&weatherdata.main.humidity ? <div className="wheather_value">{weatherdata.main.humidity}</div>: null}
                </div>
                <div className="one_by_three">
                    <div className="climatic_lable">Pressure</div>
                    {weatherdata&&weatherdata.main.pressure ? <div className="wheather_value">{weatherdata.main.pressure}</div>: null}
                </div>
            </div>
        </div>     
       </>
    );
}

export default Weather;