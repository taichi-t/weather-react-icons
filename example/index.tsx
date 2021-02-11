import * as React from 'react';
import * as ReactDOM from 'react-dom';
// the following css file must be installed for WeatherIcon component.
import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons';

ReactDOM.render(
  <WeatherIcon iconId={201} name="owm" />,
  document.getElementById('root')
);
