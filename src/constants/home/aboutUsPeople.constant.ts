interface IPerson {
  name: string;
  position: string;
  image: string;
}

const RihanKhanSuri = require('../../assets/persons/rihan-khan-suri-tpo-jamia-miilia-islamia.png');
const ViceChancellor = require('../../assets/persons/vc-jamia-millia-islamia.png');
const ZainulAbdinJaffery = require('../../assets/persons/zainul-abdin-jaffery.png');

export const ABOUT_US_PEOPLE: Array<IPerson> = [
  {
    name: 'Prof. Najma Akhtar',
    position: 'Vice Chancellor',
    image: ViceChancellor,
  },
  {
    name: 'Dr. Rihan Khan Suri',
    position: 'Training and Placement Offer',
    image: RihanKhanSuri,
  },
  {
    name: 'Dr. Zainul Abdin Jaffery',
    position: 'Honory Director',
    image: ZainulAbdinJaffery,
  },
];
