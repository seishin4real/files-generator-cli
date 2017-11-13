module.exports = {
  // filename is the template name you input in the CLI
  files: {
    /* key - file extension
     * value - initial file content
     * available tokens for input param ex. 'gen comp my-comp':
     * %name% - my-comp
     * %pascal_name% - MyComp
     */
    'ts': `export class %pascal_name% {
        
}`,
    'html': `<template>

<template>`,
    'sass': ``
  }
}