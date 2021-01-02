import * as React from 'react';
import { render } from '@testing-library/react';
import OWM_MAP from '../constants/owm';
import YAHOO_MAP from '../constants/yahoo';
import WeatherIcon from '../WeatherIcon';

describe('openWeatherMap icons render correctly', () => {
  describe('day icons', () => {
    const prefix = 'wi wi-day';
    const dayIcons = OWM_MAP.day;
    for (let key in dayIcons) {
      test(`<i/> has className matches what to expect with iconId ${key}`, () => {
        const expectedIconClassName = OWM_MAP.day[key].icon;
        const { getByTestId } = render(
          <WeatherIcon iconId={Number(key)} name="owm" />
        );
        const tree = getByTestId('icon');
        expect(tree.className).toBe(`${prefix}-${expectedIconClassName} `);
      });
    }
  });
  describe('night icons', () => {
    const prefix = 'wi wi-night';
    const nigthIcons = OWM_MAP.night;
    for (let key in nigthIcons) {
      test(`<i/> has className matches what to expect with iconId ${key}`, () => {
        const expectedIconClassName = OWM_MAP.night[key].icon;
        const { getByTestId } = render(
          <WeatherIcon iconId={Number(key)} name="owm" night />
        );
        const tree = getByTestId('icon');
        expect(tree.className).toBe(`${prefix}-${expectedIconClassName} `);
      });
    }
  });
});

describe('Yahoo icons render correctly', () => {
  const prefix = 'wi wi';
  const dayIcons = YAHOO_MAP;
  for (let key in dayIcons) {
    test(`<i/> has className matches what to expect with iconId ${key}`, () => {
      const expectedIconClassName = YAHOO_MAP[key].icon;
      const { getByTestId } = render(
        <WeatherIcon iconId={Number(key)} name="yahoo" />
      );
      const tree = getByTestId('icon');
      expect(tree.className).toBe(`${prefix}-${expectedIconClassName} `);
    });
  }
});
