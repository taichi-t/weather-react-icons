import * as React from 'react';
import convertCode from './utils/convertCode';

type WeatherIconProps = (
  | {
      iconId: number;
      className?: string;
      name: 'owm';
      night?: boolean;
    }
  | {
      iconId: number;
      className?: string;
      name: 'yahoo';
      night?: undefined;
    }
) &
  React.ComponentPropsWithRef<'i'>;

const WeatherIcon: React.FC<WeatherIconProps> = ({
  iconId,
  className = '',
  name,
  night = false,
  ...htmlProps
}) => {
  const iconClassName = convertCode(name, iconId, night);
  const classNames = `${iconClassName} ${className}`;
  return <i className={classNames} {...htmlProps} data-testid="icon" />;
};

export default WeatherIcon;
