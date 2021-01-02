import * as React from 'react';
import { render } from '@testing-library/react';
import WeatherIcon from '../WeatherIcon';

test('basic', () => {
  const tree = render(<WeatherIcon iconId={200} name="owm" />);
  expect(tree).toMatchSnapshot();
});
