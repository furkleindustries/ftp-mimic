import {
  h,
  Component,
} from 'preact';

import styles from './style.scss';

export class FtpFile extends Component {
  render = ({
    clickFileLink,
    file,
    name,
  }) => (
    <tr class={styles.ftpFile}>
      <td class={styles.nameLinkContainer}>
        <a
          class={styles.link}
          onClick={() => clickFileLink(name)}
          role="link"
          tabIndex={0}
        >
          {name}
        </a>
      </td>

      <td class={styles.lastModified}>
        {file.lastModified}
      </td>

      <td class={styles.size}>
        {file.size}
      </td>

      <td class={styles.description}>
        {file.description}
      </td>
    </tr>
  );
}
