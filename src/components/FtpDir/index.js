import {
  FtpFile,
} from '../FtpFile';

import {
  h,
  Component,
} from 'preact';

export class FtpDir extends Component {
  render = ({
    clickDirLink,
    clickFileLink,
    file,
    name,
    shown,
  }) => (
    shown ?
      Object.keys(file.children).map((name) => {
        const value = file.children[name];
        return (
          value.children ?
          <FtpDir
            clickDirLink={clickDirLink}
            clickFileLink={clickFileLink}
            file={value}
            name={name}
          /> :
          <FtpFile
            clickFileLink={clickFileLink}
            file={value}
            name={name}
          />
        );
      }) :
      <div>
        <td>
          <a
            role="button"
            onClick={clickDirLink(file)}
            tabIndex={0}
          >
            {name}
          </a>
        </td>

        <td>
          <time>{file.lastModified}</time>
        </td>

        <td>-</td>
      </div>
  );
}
