#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');
const { generate } = require('./actions/generate');

program
  .version('1.0.0', '-v, --version')
  .usage('<template> <name>')
  .description('Template based files generator. Generates files based on tempate name with apropriate file naming and initial content')
  .on('--help', function () {
    const files = fs.readdirSync(`${__dirname}/templates`)
      .filter(f => f[0] != '_' && f.substr(-3, 3) === '.js');

    console.log('');
    console.log('  Available templates:');
    console.log('');
    files.forEach(file => {
      const def = require(`./templates/${file}`);
      console.log(`    ${file.substr(0, file.length - 3)} - ${def.description}`);
    });
    console.log('');
  })
  .option('-d --dir', 'Create wrapper folder.')
  .option('-e --notypes [types]', 'Don\'t create files of type. Comma separated list ex. sass,ts')
  .parse(process.argv);

const [template, name] = program.args;

generate(template, name, !program.dir, program.notypes);