module.exports = {
  description: '.ts file with @containerless decorated compoent and an empty scss',
  files: {
    'ts': `import { containerless, customElement } from 'aurelia-framework';

@containerless()
@customElement('%name%')
export class %pascal_name%Component {

}`,
'html': `<template>

</template>`,
    'sass': ``
  }
}