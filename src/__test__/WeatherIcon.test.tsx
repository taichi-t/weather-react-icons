import * as React from 'react';
import { render } from '@testing-library/react';
import OWM_MAP from '../constants/owm';
import YAHOO_MAP from '../constants/yahoo';
import WeatherIcon from '../WeatherIcon';

describe('OpenWeatherMap icons render correctly', () => {
  describe('when day icons', () => {
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
  describe('when night icons', () => {
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

describe('Throw error correctly', () => {
  const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
  test('when no iconId or invalid iconId', () => {
    // @ts-ignore
    expect(() => render(<WeatherIcon iconId="" name="owm" />)).toThrowError(
      'Icon Id does not exist'
    );
    // @ts-ignore
    expect(() => render(<WeatherIcon iconId={9999} name="owm" />)).toThrowError(
      'Icon Id does not exist'
    );
  });
  test('when no name or invalid name', () => {
    // @ts-ignore
    expect(() => render(<WeatherIcon iconId={200} name="" />)).toThrowError(
      'Invalid name'
    );
    // @ts-ignore
    expect(() => render(<WeatherIcon iconId={200} name="foo" />)).toThrowError(
      'Invalid name'
    );
  });
});

describe('When receiving "night" props', () => {
  test('className should contain "wi wi-night-" when owm icons', () => {
    const { getByTestId } = render(
      <WeatherIcon name="owm" iconId={200} night />
    );
    const { className } = getByTestId('icon');
    const expectedClassName = expect.stringContaining('wi wi-night-');
    expect(className).toEqual(expectedClassName);
  });
  test('className should contain "wi wi-" when yahoo icons', () => {
    const { getByTestId } = render(
      // @ts-ignore
      <WeatherIcon name="yahoo" iconId={1} night />
    );
    const { className } = getByTestId('icon');
    const expectedClassName = expect.stringContaining('wi wi-');
    expect(className).toEqual(expectedClassName);
  });
});

describe('When receiving "className" props', () => {
  test('className should contain mock className', () => {
    const mockClassName = 'mock class name';
    const { getByTestId } = render(
      <WeatherIcon name="owm" iconId={200} className={mockClassName} />
    );
    const { className } = getByTestId('icon');
    const expectedClassName = expect.stringContaining(mockClassName);
    expect(className).toEqual(expectedClassName);
  });
});
