var fs = require('fs');
var templates = require('./templates');

const generate = (template, name) => {
  //prepare files definitions
  const templateDef = templates[template];
  if (!templateDef) {
    throw `template ${template} not found`;
  }
  const templateFilesKeys = Object.keys(templateDef.files);
  const filesToGenerate = [];

  for (let i = 0, lim = templateFilesKeys.length; i < lim; i++) {
    const key = templateFilesKeys[i];

    filesToGenerate.push({
      name: `${name}.${key}`,
      dir: name, //todo: handle no-dir //todo: handle format
      content: processContent(templateDef.files[key], name)
    })
  }

  //generate files
  for (let i = 0, lim = filesToGenerate.length; i < lim; i++) {
    const file = filesToGenerate[i];
    const dir = file.dir ? `${file.dir}/` : '';
    const path = `${dir}${file.name}`;

    if (!fs.existsSync(file.dir)) {
      fs.mkdirSync(dir);
    }

    fs.writeFile(path, file.content, (err) => {
      if (err) { return console.error(err); }
      console.log(`+ ${path}`);
    });
  }
};

function processContent(content, name) {
  const pascal_name = toCasePascal(name);
  return content
    .replace(/%pascal_name%/gm, pascal_name);
}

function toCasePascal(value) {
  return value
    .replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase())
    .replace(/-/g, '');
}

module.exports = {
  generate
};
