import 'preact-cli/lib/lib/webpack/polyfills';

import {
  default as config,
} from '../local-config';
import {
  filesAreValid,
} from './filesAreValid';
import {
  FtpMimic,
} from './components/FtpMimic';
import {
  assert,
} from 'ts-assertions';

import { h } from 'preact';
import habitat from 'preact-habitat';

assert(
  filesAreValid(config.files),
  'One or more of the file objects in the ftp-mimic local-config was not ' +
    'valid.',
  (value) => !value || value instanceof Error,
);

const _habitat = habitat(FtpMimic);

_habitat.render({
  selector: '[data-widget-host="ftp-mimic"]',
  clean: true,
});
