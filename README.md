# eslint-config-web-at-berkeley
ESLint configuration for Web @ Berkeley

Submodule within `mono`

## How to Use

Start by installing eslint and this package:

```sh
yarn add -D eslint @web-at-berkeley/eslint-config
```

Now, create a eslint config file:

```sh
touch .eslintrc.js
```

Put the following code in this config file:

```js
{
    "extends": "@web-at-berkeley/eslint-config"
}
```

In your project's root directory, run the following
```sh
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-react prettier typescript
```

You should now be setup properly to use the WDB shared ESLint config! Make sure you install your IDE specific ESLint plugin, like [this one for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

If using yarn PnP, make sure you run `yarn sdks <your editor>`!
