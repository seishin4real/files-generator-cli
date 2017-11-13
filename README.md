# files-generator-cli
Command line tool that generates files from template definitions.

## Setup
* clone the repo
* run `npm link` to create sym-link between node directory and generator (run `npm unlink` to remove)

* go to your project folder
* run `gen comp component-name`
* directory 'component-name', with .ts .html and .sass files inside, will be created

## Help
To list available commands run `gen --help`.

## Templates
See `templates` directory to:
* Add new template. Sample file `_template.js` included
* Remove templates by deleting them
* Modify templates - just edit the files
