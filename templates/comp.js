module.exports = {
  description: '.ts file with plain class, html template and empty scss',
  files: {
    'ts': `import { customElement } from 'aurelia-framework';

@customElement('%name%')
export class %pascal_name%Component {

}`,
    'html': `<template>

</template>`,
    'sass': ``
  }
}