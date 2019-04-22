import {
  FtpDisplay,
} from '../FtpDisplay';
import {
  default as config,
} from '../../../local-config';
import { 
  assertValid,
} from 'ts-assertions';

import {
  h,
  Component,
} from 'preact';

import styles from './style.scss';

export class FtpMimic extends Component {
  state = { currentPath: '/' };

  constructor(props) {
    super(props);
    this.state.files = props.files || config.files;
  }

  render = ({}, { currentPath }) => (
    <div class={styles.ftpMimic}>
      <FtpDisplay
        clickBackLink={this.clickBackLink}
        clickDirLink={this.clickDirLink}
        clickFileLink={this.clickFileLink}
        currentDir={this.getDir(currentPath)}
        currentFile={this.getFile(currentPath)}
        currentPath={currentPath}
      />
    </div>
  );

  addDirComponent = (path, name) => /\/$/.test(path) ?
    `${path}${name}` :
    `${path}/${name}`;

  clickBackLink = () => this.popDirectory();

  clickDirLink = (name) => this.pushDirectory(name);

  clickFileLink = (name) => this.showFile(name);

  getDir = (path) => {
    const rootDir = {
      name: '$ROOT$',
      children: this.state.files,
      lastModified: new Date(),
    };

    if (path === '/') {
      return rootDir;
    }

    return assertValid(
      path.split('/').filter(Boolean).reduce((dir, pathSegment) => (
        /* Don't return files even if the current path is a file. */
        !dir || /\.[a-z0-9]+$/i.test(pathSegment) ?
          dir :
          dir.children[pathSegment]
      ), rootDir),
    );
  };

  getFile = (path) => (
    this.getDir(path).children[path.split('/').slice(-1)[0]] || null
  );

  popDirectory = () => this.setState({
    currentPath: this.removeDirComponent(this.state.currentPath),
  });

  pushDirectory = (name) => this.setState({
    currentPath: this.addDirComponent(this.state.currentPath, name),
  });

  removeDirComponent = (path) => path.split('/').slice(0, -1).join('/') || '/';

  showFile = (name) => this.setState({
    currentPath: /\/$/.test(this.state.currentPath) ?
      `${this.state.currentPath}${name}` :
      `${this.state.currentPath}/${name}`,
  });
}
