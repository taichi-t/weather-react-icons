import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WeatherIcon } from '../src/index';

ReactDOM.render(
  <WeatherIcon iconId={212} name="owm" night={true} />,
  document.getElementById('root')
);
