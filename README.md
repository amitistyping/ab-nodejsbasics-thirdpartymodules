<img width="150px" src="https://w0244079.github.io/nscc/nscc-jpeg.jpg" >

# APPD 5015 - Lab - NodeJS Third-Party Modules (NPM)

By far the most interesting part of learning modules in NodeJS involves the availability of modules created by other developers. Developers can create and upload these modules in package format to the [Node Package Manager (NPM) repository site](https://www.npmjs.com/). Over the last number of years, thousands of packages performing thousands of tasks have been created and added to the repository. Before coding it yourself, ask yourself if there might be an NPM package you can use instead. Making these pre-packaged modules freely available promotes quicker development time.

This lab asks you to work with a selection of these Third-Party modules. Including these modules in your projects requires the use of the built-in `Node Package Manager (NPM)` utility that comes installed with NodeJS. At their core, packages that you install via NPM are just additional modules. The additional challenge is setting up and managing the packages.

*NOTE: As with most programming tasks, there are various ways to accomplish the same goal. There is not only one fixed way to accomplish these, so solutions may vary slightly from student to student.*

*NOTE: Remember that as you progress through the lab work to commit and push your work to github. Commiting and pushing is akin to nice big SAVE button which backs up your code as you work. You cannot commit and push your code changes too much!*

## Step 1 - Introducing a `package.json` file into your workspace
In order to manage and keep track of the packages that will be downloaded from the NPM repository site, NPM uses a special file called `package.json` to list all of the packages that have been requested. To use any NPM package in your project workspace, you'll need to create this file. Fortunately, the NPM utility provides a command to generate a skeleton version of this file.

### Step Instructions

1. At the root of your newly cloned lab repository, run the NPM utility's `npm init` command to generate a new `package.json` file. (You can accept all defaults for this file generation)

## Step 2 - Use NPM to pull down, a.k.a. `install`, select modules, a.k.a `packages`, into your project
Once your `package.json` file has been generated, it will now be used to keep track of any packages you introduce into your project workspace.

### Step Instructions

Note: As you are performing the following package installs, notice the additions that are being made to your `package.json` file.

1. Use NPM to install the `builtin-modules` package - ([https://www.npmjs.com/package/chalk](https://www.npmjs.com/package/builtin-modules))
2. Use NPM to install the `is-builtin-module` package - ([https://www.npmjs.com/package/chalk](https://www.npmjs.com/package/is-builtin-module))
3. Use NPM to install the `Validator` package - ([https://www.npmjs.com/package/validator](https://www.npmjs.com/package/validator))
4. Use NPM to install the `Chalk` package - ([https://www.npmjs.com/package/chalk](https://www.npmjs.com/package/chalk))
5. Use NPM to install the `MomentJS` package - ([https://www.npmjs.com/package/moment](https://www.npmjs.com/package/moment))
6. Use NPM to install the `Lodash` package - ([https://www.npmjs.com/package/lodash](https://www.npmjs.com/package/lodash))
7. Use NPM to install the `Axios` package - ([https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios))

## Step 3 - Use the installed NPM packages to perform specific tasks
Now that you've installed the required packages, it's time to do something with them! Perform the following tasks using the documentation/examples for each package as a guide

### Step Instructions

1. Create a file called `builtin.js` which uses the `built-in-modules` package to display the list of available node built-in (core) modules on your system. Use the `chalk` package to console output as green.
2. Create a file called `is-built-in.js` which uses the `is-builtin-module`. Try it with the values `crypto` and `unicorn` and demonstrate what is returned. Use the `chalk` package to console output as yellow.
3. Create a file called `validator.js` which uses the `validator` package to display whether a supplied string is a valid email or not. Demonstrate a couple of different examples of strings. Use the `chalk` package to console output with a light blue background.
4. Create a file called `moment.js` which uses the `moment` package to do the following (use the [momentjs.com](https://moment.js) homepage for reference and examples):
    1. Display today's name of day only in the console: `ex: Wednesday`
    2. Display today's date in the console like the following example :`Jan 15th 2022`
5. Create a file called `lodash.js` which uses the `lodash` package to do the following:
    1. Use the built in Lodash function called `uniq` to remove duplicates from the following array of numbers:
``` javascript
[1, 2, 8, 3, 9, 3, 3, 6, 3, 2, 3, 9, 8, 7, 7, 2, 9, 3, 8, 1]
```
6. Create a file called `pickacard.js` which uses the `axios` package to fetch data from restful apis. (Similar to a browser's built-in `fetch` api)
    1. Use the package to retrieve data from the following remote data endpoint: `https://deckofcardsapi.com/api/deck/new/draw/?count=1`
    2. Once you have the JSON data retrieved, extract the value and the suit of your random card and display it in the console. Use `chalk` to colorize the output with the following conditions:
          1. If the suit is `Clubs`, make the output some form of green.
          2. Otherwise, if the suit is `Diamonds`, make the output some form of light blue.
          3. Otherwise, if the suit is `Hearts`, make the output some form of red.
          4. Otherwise, make the output some form of yellow.

## Step 4 - Select and demonstrate a third-party module of your choosing
NPM literally contains thousands upon thousands of packages that do virtually everything you can think of! Find one (keep it a very simple one), install it, and demonstrate some simple way that it works!
