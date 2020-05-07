# yacc

Yet Another Code Camp

### Step 4:

In this step, we will install node. Node is a javascript toolkit that we will use for loads of stuff.
On mac: `brew install node@12`
On windows: https://nodejs.org/en/ download and install version 12 LTS. LTS stands for Long Term Support.

After installing node, open VS Code and select the `Terminal` menu option in the main menu and choose `New Terminal`.

In the terminal, type `yarn init`

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
