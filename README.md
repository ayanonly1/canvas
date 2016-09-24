# Canvas

A simple JavaScript library to manipulate HTML Canvas elements.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for testing purposes.

### Pre-requisites

 * NodeJS
 * Node Package Manager (npm)
 * A web browser
 * Bower (`npm install -g bower`)
 * Gulp CLI (`npm install -g gulp-cli`)

### Installation
 * Clone the repository.
 * `cd` into the cloned repository.
 * Run `npm install`.
 * Run `bower install`.
 * Navigate to `test/index.html` from the web browser.

### Project Structure
```
.
├── bower_components
├── dist
|   └── js
├── docs
|   └── gen
├── node_modules
├── scripts
|   ├── Canvas.js
|   ├── image.js
|   ├── path.js
|   └── text.js
├── sample
|   ├── res
|   ├── scripts
|	|	└── main.js
|	└──index.html
└── README.md
```

### Building
 * The `gulp stitch` task compiles the JS files with Google Closure Compiler, minifies them into a single file and puts them inside `dist/js`.
 * Run `gulp watch` to have Gulp look for changes made within `scripts/*.js` files and automatically run the `lint` task followed by the `stitch` task.
 * Run `gulp doc` to have gulp generate JSDoc documentation and put them in `docs/gen` automatically

### Contribuing
 * Use the `git-flow` tool to generate feature branches off of the `develop` branch
 * Publish feature branches onto the remote using `git-flow`
 * Once feature is complete, use `git-flow` to finish the feature into the `develop` branch