# Generator Gulp Less Bootstrap

> A Generator for Yeoman to work with the Less version of Bootstrap
It takes advantage of the gulp build tool for dependency management.

## Generator Directory  Structure
```
├── app
│   ├── bootstrap
│   │   ├── js file
│   │   └── less file  
│   ├── fonts
│   ├── html
│   │   └── index.html
│   ├── script
│   │   └── jquery-3.2.1.js
│   └── styles
│       └── index.less
├── gulpfile.babel.js
├── package.json
└── tasks
    ├── buld.js
    ├── clean.js
    ├── defualt.js
    ├── fronts.js
    ├── html.js
    ├── images.js
    ├── lib
    │   └── args.js
    ├── script.js
    ├── server.js
    └── styles.js
```
## Getting Started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator: `npm install generator-gulp-less-bootstrap`
- Run: `yo gulp-less-bootstrap` to scaffold your project
- Run `npm build` for building and `npm server` for preview

#### Previous Release:
This version includes Bootstrap 3


## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)


## Author
*ciming*

