import {
  FtpDir,
} from '../FtpDir';
import {
  FtpFile,
} from '../FtpFile';
import {
  FtpFileContents,
} from '../FtpFileContents';

import {
  h,
  Component,
} from 'preact';

import styles from './style.scss';

export class FtpTableBody extends Component {
  render = ({
    clickBackLink,
    clickDirLink,
    clickFileLink,
    currentDir,
    currentFile,
    currentPath,
  }) => (
    <tbody class={styles.ftpTableBody}>
      <tr class={styles.backLinkContainer}>
        <td>
          <a
            {...(currentPath === '/' ? { disabled: '' } : {})}
            class={styles.backLink}
            tabIndex={0}
            role="link"
            onClick={currentPath === '/' ? null : clickBackLink}
          >
            Back
          </a>
        </td>
      </tr>

      {currentFile ?
        <tr>
          <FtpFileContents
            file={currentFile}
            name={currentPath.split('/').slice(-1)[0]}
          />
        </tr> :
        Object.keys(currentDir.children).map((name) => (
          currentDir.children[name].children ?
            <FtpDir
              clickDirLink={clickDirLink}
              file={currentDir.children[name]}
              name={name}
            /> :
            <FtpFile
              clickFileLink={clickFileLink}
              file={currentDir.children[name]}
              name={name}
            />
        ))}
    </tbody>
  );
}
