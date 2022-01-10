# eslint-config-web-at-berkeley
ESLint configuration for Web @ Berkeley

Submodule within `mono`

## How to Use

Start by installing eslint and this package:

```sh
yarn add -D eslint @web-at-berkeley/eslint-config
```

Now, create a eslint config file:

```
touch .eslintrc.js
```

Put the following code in this config file:

```js
{
    "extends": "@web-at-berkeley/eslint-config"
}
```

You should now be setup properly to use the WDB shared ESLint config! Make sure you install your IDE specific ESLint plugin, like [this one for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

If using yarn PnP, make sure you run `yarn sdks <your editor>`!
