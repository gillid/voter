import { COLOR } from '@v/constants';
import { html } from './html';

export const buildIndexHtml = () => {
  return html
    .replace(/%ASSETS_PATH%/g, '/assets')
    .replace(/%COLOR_PRIMARY%/g, COLOR.primary)
    .replace(/%COLOR_BG%/g, COLOR.bg);
};
