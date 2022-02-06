# Webpack and Type

## Introduction

* `Webpack` is basically a bundling tool its there to help us with our development workflow. That basically means that it can be used to bundle up all of our source files and code into a web optimised output folder ready for distribution.
* It can be used for many different types of projects whereby code is somehow compiled or bundled before being deployed. For eg. A react project where we write `JSX` templates, and that `JSX` needs to be compiled into regular javascript before its been served to the browser or maybe we have JavaScript code which is split up into different modules and all of this needs to be compiled into a single output file before being served to the browser as well. Or even things like `SASS` which needs to be compiled into a regular CSS before its loaded in the browser.
* So webpack can be used for many different things in our project. 
* `Webpack` is used to compile `TypeScript` into `JavaScript`.
* It is used to bundle all of our source code into a single javascript output file ready for deployment
* Webpack also provider a `webpack dev server` (development server) to preview all of out work in a browser on the fly as we are creating our project.

## Webpack Installation

* Setting up TypeScript project with a `tsconfig.json` file
```
tsc --init
```
* Also we will use `"target": "es6"` and `"module": "es2015"`
```
{
    "compilerOptions": {
        "target": "es6",
        "module": "es2015"
    }
}
```
* We will also need a `package.json` file to keep track of all of our dependencies because we will need to install few dependencies for webpack. We can do that by using 
```
npm init
```
* Once we have the `package.json` file we can install and manage all the required dependencies for the project.
* We will need the following node packages as dev dependencies:
    1. `webpack` - core webpack package that ultimately bundles all of our code together
    2. `webpack-cli` - to interact with webpack via the command line interface. It is a tool that allows us to run webpack commands from the command line
    3. `ts-loader` - It is a package that teaches webpack how to compile typescript into javascript and without it, it wouldn't be able to do that
```
npm install webpack webpack-cli ts-loader -D
```
* Also we will need `typescript` node package as a dev dependency
```
npm install typescript -D
```

## Webpack Config File

* In order to tell `webpack` how to compile and bundle our code, we need to create a webpack config file.
* So we need to create a new file in the root directory with name as `webpack.config.js`. The naming of this file is important and it is a `javascript` file.
* The first thing we need to do inside this file is to export an object using the NodeJS module system, because webpack is ultimately is going to be read by NodeJS
```
module.exports = {
    // here goes the configuration
}
```
* Inside this object we need to first specify the `entry` and `output` files. Entry file means the typescript source files (i.e files from the /src folder) and output files means the resulting javascript buldle that webpack is going to spit out into the public folder at the end.
* The `entry` file is the main file in the dependency tree which imports all the other files also.
* The `output` is going to be an object, where we need to specify a few different properties. 
    1. `filename`: What do we want to call the javascript file that is going to dumped ultimately inside the public folder
    2. `path`: absolute path to where we want to output this file. As this is an absolute path we will use `path` module to create it. Path module is something that comes along with nodeJS, we don't need to install anything extra
* The next thing we need to do is tell webpack to compile typescript files or modules using the TS Loader package into JavaScript. Because without this all we are doing is specifying an `entry` point and an `output`, and it doesn't know what to do in between to compile the TypeScript into JavaScript. And to do this we will use the `module` property.
* `module` just basically means file, so its going to look at files and do things to the different files. It is an `object` and inside it we have a `rules` property which is an `array`. Inside this `array` we can have an `object` for each different rule.
* We need a rule that is going to transform or compile typescript files into javascript
```
{
    test: /\.ts$/,
    use: 'ts-loader'
}
```
* In above rule we specify a `test` for a file, i.e a regex to check for only typescript file.
* Once a file passes that test we use the `ts-loader` package using `use` property to convert that file into javascript.
* We also want a property called `include` which is an `array`. This property is going to specify where the typescript files could be. (eg we may need to only include ts files from the src folder)
* We can also specify the `target`. Because JavaScript can be written for both server and browser, webpack offers multiple deployment targets that you can set in your webpack configuration. 
* We will use `target: ['web', 'es5']`. So here webpack will generate a runtime code for `web` platform and will use only `ES5` features.
* The final webpack config file will look as follows

```
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    target: ['web', 'es5']
}
```
* To run this config file or to perform the bundling all we need to do is call this command
```
webpack
```
* This will run the `webpack.config.js` file for us and perform all the operations defined in the config file and create a buldled js file for us.
* We can also define a script for this in the `package.json` file
```
"scripts": {
    "build": "webpack",
    ...
}
```
* Now we can run the following command, and it will do the same thing for us
```
npm run build
```

