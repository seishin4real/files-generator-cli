module.exports = {
  description: '.ts file with @containerless decorated compoent and an empty scss',
  files: {
    'ts': `import { containerless } from 'aurelia-framework';
    
@containerless()
export class %pascal_name% {
      
}`,
'html': `<template>

<template>`,    
    'sass': ``
  }
}