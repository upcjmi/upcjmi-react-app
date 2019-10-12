interface IBadge {
  badge: string;
  info: string;
}

const Outlook = require('assets/badges/Outlookrank.png');
const Outlook100University = require('assets/badges/Outlook100university.png');
const RURUniversityRanking = require('assets/badges/RURUniversityRanking.png');
const QSWorldRank = require('assets/badges/QSWorldRank.png');

export const BADGES: Array<IBadge> = [
  {
    badge: Outlook,
    info:
      'Jamia Millia Islamia (JMI) has been ranked at ' +
      '3rd position among the top 25 Central Universities ' +
      'and at 17th rank among top 100 universities ' +
      'by Outlook-I Care India University Rankings 2019,' +
      ' published in the latest issue of the weekly magazine.',
  },
  {
    badge: Outlook100University,
    info:
      'Jamia Millia Islamia (JMI) has been ranked at 3rd position' +
      ' among the top 25 Central Universities and at 17th rank ' +
      'among top 100 universities ' +
      'by Outlook-I Care India University Rankings 2019, ' +
      'published in the latest issue of the weekly magazine.',
  },
  {
    badge: RURUniversityRanking,
    info:
      'Jamia Millia Islamia has been ranked at 631 position worldwide' +
      ' by Moscow-based Round University Ranking (RUR) 2019 ' +
      "among the world's 1100 universities assessed, " +
      'improving position from 747 last year.',
  },
  {
    badge: QSWorldRank,
    info: '',
  },
];
