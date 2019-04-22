import {
  h,
  Component,
} from 'preact';

import styles from './style.scss';

export class FtpTableHead extends Component {
  render = () => (
    <thead class={styles.ftpTableHead}>
      <tr>
        <th>Name</th>
        <th>Last modified</th>
        <th>Size</th>
        <th>Description</th>
      </tr>
    </thead>
  );
}
