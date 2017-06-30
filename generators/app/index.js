'use strict';
const path = require('path');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _s = require('underscore.string');

module.exports = class extends Generator {
  constructor (...args) {
    super(...args)
    this.pkg = require('../../package.json')
    // set source root path to templates
    this.sourceRoot(path.join(__dirname, 'templates'))
  }
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the cat\'s pajamas ' + chalk.red('generator-gulp-less-bootstrap') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }
  prompting() {
    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'What would you like to call this project?',
      default: this.appname
    },{
      name: 'description',
      message: 'How would you like to describe this project?',
      default: ''
    }];
    return this.prompt(prompts).then(function(answers) {
      this.appname = answers.name.replace(/"/g, '\\"');
      this.description = answers.description.replace(/"/g, '\\"')
    }.bind(this))
  }
  tasks () {
    this.fs.copy(
      this.templatePath('_babelrc'),
      this.destinationPath('.babelrc')
    )
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    )
    this.fs.copy(
      this.templatePath('gulpfile.babel.js'),
      this.destinationPath('gulpfile.babel.js')
    )

    this.fs.copy(
      this.templatePath('tasks/**/*'),
      this.destinationPath('tasks')
    )
  }
  packageJSON () {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: _s.slugify(this.appname),
        description: this.description
      }
    )
  }
  appFile () {
    this.fs.copy(
      this.templatePath('app/'),
      this.destinationPath('app')
    )
  }
  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  }

  installing () {
    this.log('I\'m all done. Running ' + chalk.yellow('npm install') + ' for you to install the required dependencies. If this fails, try running the command yourself.')
    this.npmInstall()
  }

  end () {
    this.log(
      yosay('Please run ' + chalk.red('npm run start') + ' or  ' + chalk.yellow('npm run server') + ' to start and run'+ chalk.yellow('npm run server') + 'to build')
    )
  }
};
