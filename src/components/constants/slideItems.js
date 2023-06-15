import bbqCoverHorizontal from '../images/caseBbqBox/bbqCoverHorizontal.png';
import bbqCoverVertical from '../images/caseBbqBox/bbqCoverVertical.png';
import bettingCoverHorizontal from '../images/caseBetting/bettingCoverHorizontal.png';
import bettingCoverVertical from '../images/caseBetting/bettingCoverVertical.png';
import kramCoverHorizontal from '../images/caseKram/kramCoverHorizontal.png';
import kramCoverVertical from '../images/caseKram/kramCoverVertical.png';
import taskyCoverHorizontal from '../images/caseTasky/taskyCoverHorizontal.png';
import taskyCoverVertical from '../images/caseTasky/taskyCoverVertical.png';

export const SLIDE_ITEMS = [
  {
    id: 1,
    slideCover: {
      horizontal: bbqCoverHorizontal,
      vertical: bbqCoverVertical,
    },
    subtitle: 'UX/UI Design / Web Development',
    title: 'BBQ BOX',
    url: 'bbq-box',
  },
  {
    id: 2,
    slideCover: {
      horizontal: bettingCoverHorizontal,
      vertical: bettingCoverVertical,
    },
    subtitle: 'UX Research | UX/UI Design',
    title: 'Wizcric',
    url: 'wizcric',
  },
  {
    id: 3,
    slideCover: {
      horizontal: kramCoverHorizontal,
      vertical: kramCoverVertical,
    },
    subtitle: 'Design | Development | Testing',
    title: 'Kram',
    url: 'kram',
  },
  {
    id: 4,
    slideCover: {
      horizontal: taskyCoverHorizontal,
      vertical: taskyCoverVertical,
    },
    subtitle: 'UX/UI design',
    title: 'Polestar',
    url: 'polestar',
  },
];

export const SLIDES_LENGTH = SLIDE_ITEMS.length;
