import {
  h,
  Component,
} from 'preact';

import styles from './style.scss';

export class FtpDir extends Component {
  render = ({
    clickDirLink,
    file,
    name,
  }) => (
    <tr class={`${styles.ftpDir} ${styles.notShown}`}>
      <td class={styles.nameLinkContainer}>
        <a
          class={styles.nameLink}
          role="link"
          onClick={() => clickDirLink(name)}
          tabIndex={0}
        >
          {name}
        </a>
      </td>

      <td class={styles.lastModified}>
        <time>
          {file.lastModified.toLocaleTimeString('en-us')}
        </time>
      </td>

      <td class={styles.size}>-</td>

      <td class={styles.description}></td>
    </tr>
  );
}
