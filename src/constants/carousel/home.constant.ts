import {ICarousel} from '../../types/common.type';

const VCWithPM = require('../../assets/carousel/home/vc-with-pm.jpg');
const VCWithPresident = require('../../assets/carousel/home/vc-with-president.jpg');
const EmphasisoTeam = require('../../assets/carousel/home/emphasiso-team.jpg');
const PlacementTeam = require('../../assets/carousel/home/placement-team.jpg');
const TPO = require('../../assets/carousel/home/tpo.jpg');
const TPOReceivingAward = require('../../assets/carousel/home/tpo-receving-award.jpg');

export const HOME_CAROUSEL: Array<ICarousel> = [
  {
    image: VCWithPM,
    caption:
      'Vice Chancellor of Jamia Millia Islamia Delhi with Prime Minister of India Narendra Modi',
  },
  {
    image: VCWithPresident,
    caption:
      'Vice Chancellor of Jamia Millia Islamia Delhi with President of India Ram Nath Kovind',
  },
  {
    image: EmphasisoTeam,
    caption:
      'Emphasiso 2019 E Summit Team with Training and Placement Officer Jamia Millia Islamia',
  },
  {
    image: TPO,
    caption: 'Dr. Rihan Khan Suri, Training and Placement Officer of Jamia Millia Islamia',
  },
  {
    image: PlacementTeam,
    caption: 'Placement Coordinators Jamia Millia Islamia',
  },
  {
    image: TPOReceivingAward,
    caption: 'Training and Placement Officer of Jamia Millia Islamia receiving Award',
  },
];
