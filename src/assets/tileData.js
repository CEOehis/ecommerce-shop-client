import regional from './regional.png';
import nature from './nature.png';
import seasonal from './seasonal.png';

const tileData = [
  {
    img: regional,
    title: 'Regional',
    description: 'Your favorite clothings specific to your region',
    link: '/department/regional',
    cols: 3,
    featured: true,
  },
  {
    img: nature,
    title: 'Nature',
    description: 'Get your apparels in natural designs',
    link: '/department/nature',
    cols: 1.5,
  },
  {
    img: seasonal,
    title: 'Seasonal',
    description: 'Gift items to your loved ones this season',
    link: '/department/seasonal',
    cols: 1.5,
  },
];

export default tileData;
