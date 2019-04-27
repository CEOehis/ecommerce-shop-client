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

export const descriptions = {
  regional:
    'Proud of your country? Wear a T-shirt with a national symbol stamp!',
  nature:
    'Find beautiful T-shirts with animals and flowers in our Nature department!',
  seasonal:
    'Each time of the year has a special flavor. Our seasonal T-shirts express traditional symbols using unique postal stamp pictures.',
  french:
    "The French have always had an eye for beauty. One look at the T-shirts below and you'll see that same appreciation has been applied abundantly to their postage stamps. Below are some of our most beautiful and colorful T-shirts, so browse away! And don't forget to go all the way to the bottom - you don't want to miss any of them!",
  italian:
    "The full and resplendent treasure chest of art, literature, music, and science that Italy has given the world is reflected splendidly in its postal stamps. If we could, we would dedicate hundreds of T-shirts to this amazing treasure of beautiful images, but for now we will have to live with what you see here. You don't have to be Italian to love these gorgeous T-shirts, just someone who appreciates the finer things in life!",
  irish:
    "It was Churchill who remarked that he thought the Irish most curious because they didn't want to be English. How right he was! But then, he was half-American, wasn't he? If you have an Irish genealogy you will want these T-shirts! If you suddenly turn Irish on St. Patrick's Day, you too will want these T-shirts! Take a look at some of the coolest T-shirts we have!",
  animal:
    " Our ever-growing selection of beautiful animal T-shirts represents critters from everywhere, both wild and domestic. If you don't see the T-shirt with the animal you're looking for, tell us and we'll find it!",
  flower:
    'These unique and beautiful flower T-shirts are just the item for the gardener, flower arranger, florist, or general lover of things beautiful. Surprise the flower in your life with one of the beautiful botanical T-shirts or just get a few for yourself!',
  christmas:
    " Because this is a unique Christmas T-shirt that you'll only wear a few times a year, it will probably last for decades (unless some grinch nabs it from you, of course). Far into the future, after you're gone, your grandkids will pull it out and argue over who gets to wear it. What great snapshots they'll make dressed in Grandpa or Grandma's incredibly tasteful and unique Christmas T-shirt! Yes, everyone will remember you forever and what a silly goof you were when you would wear only your Santa beard and cap so you wouldn't cover up your nifty T-shirt.",
  valentine:
    'For the more timid, all you have to do is wear your heartfelt message to get it across. Buy one for you and your sweetie(s) today!',
};

export default tileData;
