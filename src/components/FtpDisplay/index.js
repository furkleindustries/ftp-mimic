import {
  FtpDir,
} from '../FtpDir';

import {
  h,
  Component,
} from 'preact';

export class FtpDisplay extends Component {
  render = ({
    clickDirLink,
    clickFileLink,
    currentDir,
    currentFile,
    currentPath,
  }) => (
    <div>
      {currentFile ?
        <h1>Now viewing {currentPath}</h1> :
        <h1>Index of {currentPath}</h1>}

      <table>
        <tr>
          <th>Name</th>
          <th>Last modified</th>
          <th>Size</th>
          <th>Description</th>
        </tr>

        <tr>
          <td>
            <a
              tabIndex={0}
              role="button"
              onClick={this.clickBackLink}
            >
              Back
            </a>
          </td>
        </tr>

        {currentFile ?
          <tr>
            <FtpFile
              file={currentFile}
              shown={true}
            />
          </tr> :
          <FtpDir
            clickDirLink={clickDirLink}
            clickFileLink={clickFileLink}
            file={currentDir}
            name="$ROOT$"
            shown={true}
          />}
      </table>
    </div>
  );
}
