const fs = require('fs');

function generate(template, name, nodir, notypes) {
  //prepare files definitions
  const excludedTypes = notypes ? notypes.split(',') : [];
  const templateDef = require(`../templates/${template}.js`);
  const templateFilesKeys = Object.keys(templateDef.files)
    .filter(t => excludedTypes.indexOf(t) === -1);
  const filesToGenerate = prepareFilesToGenerate(templateDef, nodir, templateFilesKeys, name);
  generateFiles(filesToGenerate);
};

function prepareFilesToGenerate(templateDef, nodir, extensions, name) {
  const filesToGenerate = [];

  for (let i = 0, lim = extensions.length; i < lim; i++) {
    const key = extensions[i];

    filesToGenerate.push({
      name: `${name}.${key}`,
      dir: nodir ? null : name,
      content: processContent(templateDef.files[key], name)
    })
  }

  return filesToGenerate;
}

function generateFiles(filesToGenerate) {
  for (let i = 0, lim = filesToGenerate.length; i < lim; i++) {
    const file = filesToGenerate[i];
    const dir = file.dir ? `${file.dir}/` : '';
    const path = `${dir}${file.name}`;

    if (file.dir && !fs.existsSync(file.dir)) {
      fs.mkdirSync(dir);
    }

    fs.writeFile(path, file.content, (err) => {
      if (err) { return console.error(err); }
      console.log(`+ ${path}`);
    });
  }
}

function processContent(content, name) {
  const tokens = {
    name: name => name,
    pascal_name: name => toCasePascal(name)
  };

  return content.replace(/%(.*?)%/gm, (m, token) => tokens[token](name));
}

function toCasePascal(value) {
  return value
    .replace(/(\w)(\w*)/g, (m, firstLetter, theRest) => firstLetter.toUpperCase() + theRest.toLowerCase())
    .replace(/-/g, '');
}

module.exports = {
  generate
};
