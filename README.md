# weather-react-icons

## Instration

`$ npm i weather-react-icons`

## Usage

```javascript
import * as React from 'react';
import { WeatherIcon } from 'weather-react-icons';

const Weather = () => {
  return <WeatherIcon iconId={200} name="owm" night />;
};
```

## WeatherIcon Params

|   Name    |       Type       | Required? | default |                                   Description                                    |
| :-------: | :--------------: | --------- | :-----: | :------------------------------------------------------------------------------: |
|  iconId   |      number      | Required  |         |           Icon Id that OpenWeatherMap and Yahoo Weather API provides.            |
|   name    | `owe` or `yahoo` | Required  |         |                           API name you currently use.                            |
|   night   |     boolean      | Optional  |  false  | If sets true, icons change to night icons. (note: night is only for "owe" icons) |
| className |      string      | Optional  |  false  |                               your own className.                                |

## Resources

- [Open Weather API](https://openweathermap.org/) A scientific yet simple approach to weather forecast. Free. No ads.
- [Yahoo Weather API](https://developer.yahoo.com/weather/) Get up-to-date weather information for any location, including 10-day forecast, wind, atmosphere, astronomy conditions, and more. You can lookup weather by location (city name) or lat/long.
- [Weather icons](https://erikflowers.github.io/weather-icons/) The repository is created by [@erikflowers](https://github.com/erikflowers)

## Licensing

- Weather Icons licensed under [SIL OFL 1.1](http://scripts.sil.org/OFL)
- Code licensed under [MIT License](http://opensource.org/licenses/mit-license.html)
