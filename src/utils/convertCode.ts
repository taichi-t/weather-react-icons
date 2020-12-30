import owmMap from '../constants/owm';

const convertCode = (name: string, iconId: number, night: boolean) => {
  switch (name) {
    case 'owm':
      return convertOWMCode(iconId, night);

    default:
      throw new Error('Invalid name');
  }
};

const convertOWMCode = (iconId: number, night: boolean) => {
  if (owmMap[iconId]) {
    var prefix = 'wi wi-';
    var icon = owmMap[iconId].icon;
    if (night) {
      icon = 'night-' + icon;
    }
    icon = 'day-' + icon;
    icon = prefix + icon;
    return icon;
  }
  throw new Error('Icon Id does not exist');
};

export default convertCode;
