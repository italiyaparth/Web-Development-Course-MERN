import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import "./InfoBox.css";

export default function InfoBox({ weatherInfo, errorInfo }) {

    const INIT_IMAGE_URL = "https://images.unsplash.com/photo-1673191898498-9bac443b2407?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">

        {weatherInfo.httpCode !== undefined ? (

            errorInfo ? (
                <p>No such place in the database</p>
            ) : (
                
                <div className="CardContainer">

                    <h3>Weather Info</h3>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia sx={{ width: 500, height: 240 }} alt="green iguana" image={INIT_IMAGE_URL} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {weatherInfo.cityName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="span">
                                <p>City : {weatherInfo.cityName}</p>
                                <p>Time : {weatherInfo.time.toLocaleString("en-IN")}</p>
                                <p>Weather : {weatherInfo.weather}</p>
                                <p>Temp : {weatherInfo.temp}&deg;C</p>
                            </Typography>
                        </CardContent>
                    </Card>

                </div>

            )

        ) : null}

    </div>
  );
}
