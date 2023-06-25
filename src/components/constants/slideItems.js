import { yogaCoverHorizontal, yogaCoverVertical } from '../images/caseYoga';
import { bbqCoverHorizontal, bbqCoverVertical } from '../images/caseBbqBox';
import {
  bettingCoverHorizontal,
  bettingCoverVertical,
} from '../images/caseBetting';
import { kramCoverHorizontal, kramCoverVertical } from '../images/caseKram';
import { taskyCoverHorizontal, taskyCoverVertical } from '../images/caseTasky';

export const SLIDE_ITEMS = [
  {
    slideCover: {
      horizontal: yogaCoverHorizontal,
      vertical: yogaCoverVertical,
    },
    subtitle: 'UX/UI Design / Webflow Development ',
    title: 'Play Retreat',
    url: 'play-retreat',
  },
  {
    slideCover: {
      horizontal: bbqCoverHorizontal,
      vertical: bbqCoverVertical,
    },
    subtitle: 'UX/UI Design / Web Development',
    title: 'BBQ BOX',
    url: 'bbq-box',
  },
  {
    slideCover: {
      horizontal: bettingCoverHorizontal,
      vertical: bettingCoverVertical,
    },
    subtitle: 'UX Research | UX/UI Design',
    title: 'Wizcric',
    url: 'wizcric',
  },
  {
    slideCover: {
      horizontal: kramCoverHorizontal,
      vertical: kramCoverVertical,
    },
    subtitle: 'Design | Development | Testing',
    title: 'Kram',
    url: 'kram',
  },
  {
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
