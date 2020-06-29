/* eslint-disable import/prefer-default-export */
import {
  PRELOADER,
  ERROR_SECTION,
} from '../constants/constants';

export const errorSection = () => {
  ERROR_SECTION.style.display = 'flex';
  PRELOADER.style.display = 'none';
};
