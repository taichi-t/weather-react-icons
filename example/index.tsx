import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WeatherIcon } from '../src/index';

ReactDOM.render(
  <>
    <WeatherIcon iconId={801} name="owm" night />
  </>,
  document.getElementById('root')
);
