import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from '@mui/material/CircularProgress';

import "./SearchBox.css";

export default function SearchBox({ updateInfo, updateError }) {

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "01484768bc3944c45cbe219c26dcc94e";

    let [stateVariableCityName, setStateVariableCityName] = useState("");
    let [stateVariableDisabledButton, setStateVariableDisabledButton] = useState(false);

    let getWeatherInfo = async () => {

      let response = await fetch(`${API_URL}?q=${stateVariableCityName}&appid=${API_KEY}&units=metric`);
      let data = await response.json();

      let weatherData = {
          httpCode: data.cod,
          cityName: data.name,
          temp: data.main.temp,
          time: new Date(data.dt * 1000),
          weather: data.weather[0].description
      };

      return weatherData;
    };

    let handleChange = (event) => {
        setStateVariableCityName(event.target.value);
    };

    let handleSubmit = async (event) => {

      try {
        event.preventDefault();
        setStateVariableDisabledButton(true);
        updateInfo(await getWeatherInfo());
        setStateVariableCityName("");
        setStateVariableDisabledButton(false);
      } catch (error) {
        updateError(true);
        setStateVariableCityName("");
        setStateVariableDisabledButton(false);
      }
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
        ) : null }

      </form>
    </div>
  );
}
