#!/usr/bin/env node

const program = require('commander');
const { generate } = require('./actions');

program
  .version('1.0.0')
  // .usage('[options] <command>')
  .description('template based files generator')
  // .option('-n, --no-dir', 'Don\'t create wrapper folder.')
  ;

program
  .command('generate <template> <name>', 'generates files based on tempate name with apropriate file naming and initial content')
  .alias('')
  .description(`
  available templates: 
  - comp - plain ts class, html template and empty scss
  - cless - containerless ts compoent and empty scss
`)
  .action(generate);

program.parse(process.argv);
