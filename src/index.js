import 'preact-cli/lib/lib/webpack/polyfills';

import {
  FtpMimic,
} from './components/FtpMimic';

import { h } from 'preact';
import habitat from 'preact-habitat';

const _habitat = habitat(FtpMimic);

_habitat.render({
  selector: '[data-widget-host="ftp-mimic"]',
  clean: true,
});
