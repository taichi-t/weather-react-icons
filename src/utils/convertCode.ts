import OWM_MAP from '../constants/owm';
import YAHOO_MAP from '../constants/yahoo';

const convertCode = (name: string, iconId: number, night: boolean) => {
  switch (name) {
    case 'owm':
      return convertOWMCode(iconId, night);
    case 'yahoo':
      return convertYahooCode(iconId);
    default:
      throw new Error('Invalid name');
  }
};

const convertOWMCode = (iconId: number, night: boolean) => {
  let prefix = 'wi wi-';
  if (night) {
    if (!OWM_MAP.night[iconId]) {
      throw new Error('Icon Id does not exist');
    }
    const { icon } = OWM_MAP.night[iconId];
    prefix += 'night-';
    return prefix + icon;
  }
  if (!OWM_MAP.day[iconId]) {
    throw new Error('Icon Id does not exist');
  }
  const { icon } = OWM_MAP.day[iconId];
  prefix = `${prefix}day-`;
  return prefix + icon;
};
const convertYahooCode = (iconId: number) => {
  const prefix = 'wi wi-';
  if (!YAHOO_MAP[iconId]) {
    throw new Error('Icon Id does not exist');
  }
  const { icon } = YAHOO_MAP[iconId];
  return prefix + icon;
};

export default convertCode;
