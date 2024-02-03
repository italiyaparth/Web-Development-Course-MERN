import { useEffect, useState } from "react";

import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";

export default function WeatherWidget() {

    let [stateVariableWeatherInfo, setStateVariableWeatherInfo] = useState({});
    let [stateVariableError, setStateVariableError] = useState(false);

    let updateInfo = (newInfo) => {
        setStateVariableWeatherInfo(newInfo);
    };

    let updateError = (errorInfo) => {
        setStateVariableError(errorInfo);
    };

    return (
        <div>
            <h2>Weather Widget</h2>

            <SearchBox updateInfo={updateInfo} updateError={updateError} />
            <br />
            <InfoBox weatherInfo={stateVariableWeatherInfo} errorInfo={stateVariableError} />
        </div>
    );
}