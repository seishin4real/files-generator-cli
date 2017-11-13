const fs = require('fs');

const generate = (template, name) => {
  if (!fs.existsSync(`./templates/${template}.js`)) {
    console.error(`Template file 'templates/${template}.js' was not found.`);
    return;
  }

  //prepare files definitions
  const templateDef = require(`../templates/${template}.js`);
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
