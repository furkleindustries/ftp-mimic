import {
  h,
  Component,
} from 'preact';

import styles from './style.scss';

export class FtpTableFoot extends Component {
  render = ({
    currentDir,
    currentFile,
    currentPath,
  }) => (
    <tfoot class={styles.tableFoot}>
      <tr>
        <td colSpan={9999}>
          <strong>
            {currentPath === '/' ? '/' : currentPath.split('/').slice(-1)[0]}
          </strong>
          &nbsp;|&nbsp;
          <strong>
            {(currentFile ?
              `${currentFile.contents.length}B` :
              `${Object.keys(currentDir.children).length} children`)}
          </strong>
          &nbsp;|&nbsp;
          <strong>
            <time>
              {(currentFile || currentDir)
                  .lastModified
                  .toLocaleTimeString('en-us')}
            </time>
          </strong>
        </td>
      </tr>
    </tfoot>
  );
}
