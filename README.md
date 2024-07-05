# eslint-config

personal preferable eslint-config, its a bit strict actually.

## Features

all of these configs are written in ESlint Flat Config.

- [common](./config/common.mjs) - common javascript rules.
- [typescript](./config/typescript.mjs) - for usage with typescript.
- [stylistic](./config/stylistic.mjs) - for code styling with [ESlint Stylistic](https://eslint.style).
- [node](./config/node.mjs) - for usage with a javascript runtime environment.
- [modules](./config/modules.mjs) - for usage with ESModules.

## Configuration

Create an `eslint.config.mjs` file in the project root,
and just export the rule you want !

Example:

```js
import { common, modules, node, stylistic, typescript } from "@rakemoon/eslint-config";

export default [...common, ...modules, ...node, ...stylistic, ...typescript];
```
