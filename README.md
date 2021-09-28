# NPM CLI Starter

The goal here is to have a vanilla cli project starter with TypeScript support. In addition it has commit lint and ava for testing.

![flavorite](https://raw.githubusercontent.com/patomation/vanilla-starter/master/public/favicon.ico)

## Install
```
npm install
```

## Using the CLI locally
1. Run npm link in this directory to get the cli to be available on your path
```
# You must build it first
npm run build
# then link it to get it globally
npm link
```
2. Run dev to watch for ts changes and auto build
```
npm run dev
or
npm run watch:compile
```
3. To run the cli command see the `package.json` bin key.
```
{
...
"bin": {
    "npm-cli-starter": "build/index.js"
  },
}
```
Where npm-cli-starter is the command, your can replace it with anything else that you want. 
And build/index.js is the entry for the command.


## Test
```
npm run test
```
supports naming convention: moduleName.test.ts
Check out [ava](https://github.com/avajs/ava)



## Helpful links:
[building-a-simple-command-line-tool-with-npm](https://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm.html)
This is the source of my inspiration for this one. I already maintain a TypScript npm package starter. Making it a cli package is just a couple of modifications.
[install-a-locally-developed-npm-package-globally](https://stackoverflow.com/questions/28440893/install-a-locally-developed-npm-package-globally)

# This project was "forked" from [npm-package-starter](https://github.com/patomation/npm-package-starter)