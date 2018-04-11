# files-generator-cli
Command line tool that generates files from template definitions.

## Setup
* clone the repo
* run `npm install`
* run `npm link` to create sym-link between node directory and generator (run `npm unlink` to remove)

## Use
* go to your project folder
* run `gen <template_name> <component-name> [-e|--notypes [types]] [-d|--dir]` ex. `gen comp component-name`
* `-e|--notypes [types]` will exclude given filetypes from generation, ex. `gen comp test-comp -e sass,ts` will create only the html file.
* `-d|--dir` will create a directory 'component-name', with files defined in the template.

## Help
To list available options run `gen [-h|--help]`.

## Templates
See `templates` directory to: 
* Add new template. Sample file `_template.js` included
* Remove templates by deleting them
* Modify templates - just edit the files
