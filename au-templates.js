module.exports = {
  'comp': {
    files: {
      'ts': `export class %pascal_name% {
        
}`,
      'html': `<template>

<template>`,
      'sass': ``
    }
  },
  'cless':{
    files: {
      'ts': `import { containerless } from 'aurelia-framework';
      
@containerless()
export class %pascal_name% {
        
}`,
      'sass': ``
    }
  }
}