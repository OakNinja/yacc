# yacc

Yet Another Code Camp

### Step 4:

In this step, we will install node and yarn. Node is a javascript toolkit that we will use for loads of stuff. Yarn is a package manager which helps you to download useful stuff that makes web development easier.
On mac: `brew install node@12` then `brew install yarn`
On windows: Go to https://nodejs.org/en/ and download and install version 12 LTS. LTS stands for Long Term Support. Then install [yarn](https://classic.yarnpkg.com/en/).

After installing node, open VS Code and select the `Terminal` menu option in the main menu and choose `New Terminal`.

In the terminal, type `yarn init`

If it doesn't work (yarn not found blabla or something like that) try restarting vs code.

Yarn will ask a couple of questions, just press `Return/Enter` to set the suggested default.

A new file will be created in the root (side by side with the rest of the project files) named `package.json`

Next, we will set up linting:
Some reading on linting: https://travishorn.com/setting-up-eslint-on-vs-code-with-airbnb-javascript-style-guide-6eb78a535ba6

run the following commands in your terminal:

`yarn add install-peerdeps --dev eslint-config-airbnb`

`yarn add eslint prettier --save-dev`

`yarn add eslint-config-prettier eslint-plugin-prettier --save-dev`

Next, create a new file named `.eslintrc.json` and add the following content (It's ok to copy paste):

```javascript
{
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
    "rules": {
    "prettier/prettier": ["error"]
  }
}
```

Now we will install two plugins for VS Code, [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Last part of step 4:

- Click the cogwheel in the lower left part of VS Code
- Choose settings in the context menu
- In the search box, search for: `format-on-save`
- Tick the format on save checkbox
