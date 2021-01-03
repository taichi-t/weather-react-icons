import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WeatherIcon } from 'weather-react-icons';

ReactDOM.render(
  <WeatherIcon iconId={201} name="owm" />,
  document.getElementById('root')
);
