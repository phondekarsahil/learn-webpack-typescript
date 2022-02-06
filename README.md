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
