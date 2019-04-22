import {
  h,
  Component,
} from 'preact';

export class FtpFile extends Component {
  render = ({
    clickFileLink,
    file,
    name,
    shown,
  }) => (
    shown ?
      <div>
        {file.contents}
      </div> :
      <div>
        <tr>
          <a
            onClick={() => clickFileLink(name)}
            role="button"
            tabIndex={0}
          >
            {name}
          </a>
        </tr>

        <tr>
          {file.lastModified}
        </tr>

        <tr>
          {file.size}
        </tr>

        <tr>
          {file.description}
        </tr>
      </div>
  );
}
