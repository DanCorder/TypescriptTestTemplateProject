# Typescript Test Template Project [![Build Status](https://travis-ci.org/DanCorder/TypescriptTestTemplateProject.png)](https://travis-ci.org/DanCorder/TypescriptTestTemplateProject) [![Coverage Status](https://coveralls.io/repos/github/DanCorder/TypescriptTestTemplateProject/badge.svg?branch=master)](https://coveralls.io/github/DanCorder/TypescriptTestTemplateProject?branch=master)
This is a project to experiment with ways of configuring TypeScript projects to allow testing and code coverage reporting.

The "production code" such as it is is simply compiled into a single JS file in /dist. Better packaging of production code is currently out of scope for this project.

## Build and Test
To build this project you will need to have [node.js](https://nodejs.org/) installed.
If you plan to do a lot of TypeScript development you will probably want to install TypeScript and Typings globally, but that isn't necesary to build this project.

The first time you build the project you will need to run the following command to download the various dependencies listed in package.json.

> npm install

Building and testing is done using NPM scripts. To build the project use
> npm run build

to just run the unit tests use

> npm run test

There are other commands available, have a look in package.json if you're curious.

## Continuous Integration
Continuous integration is provided by [Travis](https://travis-ci.org/).
Travis provides CI servers that run a script whenever you push a commit to github.
In this case we get Travis to do a full build of the project which includes running the tests and a TypeScript linter.
Travis also provides you with the nice little build status icon that you can see at the top of this file.
Travis is free for open source projects.

## Code Coverage
Code coverage metrics are created by [Istanbul](https://gotwarlost.github.io/istanbul/) when the tests are run.
Istanbul generates a handy set of web pages in /coverage that you can use to see details of the code coverage.
When the tests are run on the Travis CI server the code coverage data is uploaded to [Coveralls.io](https://coveralls.io/) which provides a way of tracking code coverage over time and another nice little icon for this readme.

## Structure
The project has a src directory for production code and a test directory for test code.
If you also want HTML, CSS, etc in your project then it would be a good idea to put the TypeScript code one level deeper in a "script" directory.
The src and test directories each contains their own tsconfig.json file.

### .gitignore
To ignore built code, node_modules, coverage, etc. You could also ignore the test/typings directory at the cost of an extra initial install step.

### .travis.yml
For configuring [Travis](https://travis-ci.org/).

### package.json
[Package.json](https://docs.npmjs.com/files/package.json) serves two main purposes; it stores all the npm packages that this project depends on, and it stores all the build scripts for the project.

### LICENSE.txt
This project is provided under the MIT licence.
If you base your own projects off it you may (or may not) prefer to use a [different license](http://choosealicense.com/).

### src/tsconfig.json and test/tsconfig.json
These files detail how the code in each directory should be compiled.
See the [official documentation](https://www.typescriptlang.org/docs/handbook/tsconfig.json.html) for more details.

### test/typings.json
This file contains the list of TypeScript definitions provided by [Typings](https://github.com/typings/typings) that the test part of the project depends on.
In this case Jasmine (the test library we're using) is a JavaScript library, so to use it safely in TypeScript code we need a type definition.
Typings is listed as a dev dependency of this project so you can use the script /node_modules/typings/dist/bin.js if you haven't installed Typings globally already.

### test/jasmine.json
Jasmine.json contains configuration information for our test library [Jasmine](http://jasmine.github.io/).