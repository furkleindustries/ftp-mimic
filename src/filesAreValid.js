const DEBUG = true;

export function filesAreValid(files) {
  if (!files) {
    DEBUG || console.error('The files argument is invalid.');
    return false;
  }

  const falseIfAllValid = !Object.keys(files).find((name) => {
    const file = files[name];
    if (file.children) {
      return !filesAreValid(file.children);
    }

    if (!/\.[a-z0-9]+$/i.test(file.name)) {
      DEBUG || console.error('File does not end in extension.');
      return true;
    }

    if (!file.contents && file.contents !== '') {
      DEBUG || console.error('File has no contents.');
      return true;
    }

    if (!file.dateModified) {
      DEBUG || console.error('File has no date modified field.');
      return true;
    }

    if (!file.size) {
      DEBUG || console.error('File has no size field.');
      return true;
    }
  });

  if (falseIfAllValid === true) {
    DEBUG || console.error(file);
    return false;
  }

  return true;
}
