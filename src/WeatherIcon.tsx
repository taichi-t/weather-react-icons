import * as React from 'react';
import '../node_modules/weather-icons/css/weather-icons.css';
import convertCode from './utils/convertCode';

type WeatherIconProps = {
  iconId: number;
  className?: string;
  name: 'owm' | 'yahoo';
  night?: boolean;
} & React.ComponentPropsWithRef<'i'>;

const WeatherIcon: React.FC<WeatherIconProps> = ({
  iconId,
  className = '',
  name,
  night = false,
  ...htmlProps
}) => {
  const iconClassName = convertCode(name, iconId, night);
  const _className = `${iconClassName} ${className}`;

  return <i className={_className} {...htmlProps} />;
};

export default WeatherIcon;
