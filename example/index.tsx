import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WeatherIcon } from 'weather-react-icons';
// if only use css, import css files as follows
// import 'weather-react-icons/lib/css/weather-icons.css';
// import 'weather-react-icons/lib/css/weather-icons-wind.css';

ReactDOM.render(
  <WeatherIcon iconId={201} name="owm" />,
  document.getElementById('root')
);
