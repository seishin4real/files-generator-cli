#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');
const { generate } = require('./actions/generate');

program
  .version('1.0.0')
  .usage('<template> <name>')
  .description('Template based files generator.')
  // .option('-n, --no-dir', 'Don\'t create wrapper folder.')
  ;

program
  .command('generate <template> <name>', '(default) generates files based on tempate name with apropriate file naming and initial content')
  .alias('')
  .action(generate);

program.on('--help', function () {
  const files = fs.readdirSync('./templates').filter(f => f[0] != '_' && f.substr(-3, 3) === '.js');

  console.log('');
  console.log('  Available templates:');
  console.log('');
  files.forEach(file => {
    const def = require(`./templates/${file}`);
    console.log(`    ${file.substr(0, file.length - 3)} - ${def.description}`);
  });
  console.log('');
});

program.parse(process.argv);
