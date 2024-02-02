import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from '@mui/material/CircularProgress';

import "./SearchBox.css";

export default function SearchBox() {

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "01484768bc3944c45cbe219c26dcc94e";

    let [stateVariableCityName, setStateVariableCityName] = useState("");
    let [stateVariableDisabledButton, setStateVariableDisabledButton] = useState(false);

    let getWeatherInfo = async () => {

        let response = await fetch(`${API_URL}?q=${stateVariableCityName}&appid=${API_KEY}&units=metric`);
        let data = await response.json();
        console.log(data);

        let weatherData = {
            httpCode: data.cod,
            cityName: data.name,
            temp: data.main.temp,
            time: new Date(data.dt * 1000),
            weather: data.weather[0].description
        };

        console.log(weatherData);

        setStateVariableDisabledButton(false);
    };

    let handleChange = (event) => {
        setStateVariableCityName(event.target.value);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        setStateVariableCityName("");
        setStateVariableDisabledButton(true);
        getWeatherInfo();
    };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>

        <TextField id="cityId" value={stateVariableCityName} onChange={handleChange} label="City Name" variant="outlined" required />
        <br />
        <br />

        <Button
          style={{ textTransform: "none" }}
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          disabled={stateVariableDisabledButton}
        >
          <b>Search Weather</b>
        </Button>

        {stateVariableDisabledButton ? (
            <p>
                <CircularProgress/><br /><b>Loading...</b>
            </p>
        ) : (
            <div>
                <p></p>
            </div>
        )}

      </form>
    </div>
  );
}
