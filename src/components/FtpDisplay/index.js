import {
  FtpTableBody,
} from '../FtpTableBody';
import {
  FtpTableCaption,
} from '../FtpTableCaption';
import {
  FtpTableFoot,
} from '../FtpTableFoot';
import {
  FtpTableHead,
} from '../FtpTableHead';

import {
  h,
  Component,
} from 'preact';

import styles from './style.scss';

export class FtpDisplay extends Component {
  render = ({
    clickBackLink,
    clickDirLink,
    clickFileLink,
    currentDir,
    currentFile,
    currentPath,
  }) => (
    <table class={styles.ftpDisplay}>
      <FtpTableCaption
        currentFile={currentFile}
        currentPath={currentPath}
      />

      <FtpTableHead />

      <FtpTableBody
        clickBackLink={clickBackLink}
        clickDirLink={clickDirLink}
        clickFileLink={clickFileLink}
        currentDir={currentDir}
        currentFile={currentFile}
        currentPath={currentPath}
      />

      <FtpTableFoot
        currentDir={currentDir}
        currentFile={currentFile}
        currentPath={currentPath}
      />
    </table>
  );
}
