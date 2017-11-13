# files-generator-cli
command line tool to that generates files from template definitions

* clone the repo
* run `npm link` to create sym-link between node directory and generator (run `npm unlink` to remove)

* go to your project folder
* run `gen comp component-name`
* directory 'component-name', with .ts .html and .sass files inside, will be created

for available commands run `gen --help`

to modify tempates and their contents see `templates.js` file
