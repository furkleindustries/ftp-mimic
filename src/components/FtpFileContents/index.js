import {
  h,
  Component,
} from 'preact';

import styles from './style.scss';

export class FtpFileContents extends Component {
  render = ({
    file,
    name,
  }) => (
    <div class={`${styles.ftpFile} ${styles.shown}`}>
      {file.contents}
    </div>
  );
}
