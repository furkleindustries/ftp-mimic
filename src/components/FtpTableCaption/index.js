import {
  h,
  Component,
} from 'preact';

import styles from './style.scss';

export class FtpTableCaption extends Component {
  render = ({
    currentFile,
    currentPath,
  }) => (
    <caption class={styles.ftpTableCaption}>
      <h2 class={styles.captionHeader}>
        {currentFile ? 'Now viewing ' : 'Index of '}
        {currentPath}
      </h2>
    </caption>
  );
}
