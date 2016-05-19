# javascript-code-style-headstart
JavaScript Code Style - Headstart

See also http://jscs.info/overview

and https://github.com/felixge/node-style-guide

and https://yannick.cr/posts/enforcing-coding-rules-in-your-team-with-jscs/post

For use with SublimeText 3, use https://github.com/SublimeLinter/SublimeLinter-jscs/

which requires SublimeLinter plugin see http://sublimelinter.readthedocs.io/en/latest/installation.html

* Usage

Run the following command to check the file index.js:

jscs index.js --preset=node-style-guide

Or to have all files in the project checked:

jscs . --preset=node-style-guide


# Installation

jscs can be installed using npm:

npm install jscs -g

To run jscs, you can use the following command from the project root:

jscs path[ path[...]]

You can also pipe input into jscs:

cat myfile.js | jscs


# Configuration

Since this plugin (SublimeLinter-jscs) is executing jscs on your system, you may use .jscsrc files to configure its behavior. See the jscs documentation for more information (http://jscs.info/overview.html#options).

If you wish to run against jsx files, you will need to install esprima-fb with npm install -g esprima-fb add the following lines to your .jscsrc file:

...
    "esprima": "esprima-fb",
    "fileExtensions": [".js", ".jsx"],
...

# Inline Comments

You can disable and re-enable rules inline with two special comments: // jscs:disable and // jscs:enable. Spacing in these comments is fairly lenient. All of the following are equivalent:

/* jscs: enable */
// jscs: enable

# Disabling rule checks on the entire file

All rule checks on the entire file can be disabled by placing the special comment below on the top of the file

// jscs:disable
As the comments are applicable only to the file they are placed in there is no requirement to put the special comment // jscs:enable at the end of the file.