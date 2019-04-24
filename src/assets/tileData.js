import config from '../config/config';

const { imageBaseUrl } = config;

const tileData = [
  {
    img: `${imageBaseUrl}/regional.png`,
    title: 'Regional',
    description: 'Your favorite clothings specific to your region',
    link: '/catalog/regional',
    cols: 3,
    featured: true,
  },
  {
    img: `${imageBaseUrl}/nature.png`,
    title: 'Nature',
    description: 'Get your apparels in natural designs',
    link: '/catalog/nature',
    cols: 1.5,
  },
  {
    img: `${imageBaseUrl}/seasonal.png`,
    title: 'Seasonal',
    description: 'Gift items to your loved ones this season',
    link: '/catalog/seasonal',
    cols: 1.5,
  },
];

export default tileData;
