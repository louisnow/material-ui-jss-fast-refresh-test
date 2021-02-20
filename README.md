## Running

    yarn start

Using webpack 5, the

Material UI with [it's JSS][1] are being used. The repo is based off the fast refresh [example here][4]

```
jss/
  a.js Default or named export `astyle`
  b.js Default or named export `bstyle`
  index.js - Re-exports the JSS
```

All other files import like `import { astyle } from './jss'`

```
ComponentA.jsx - contains `import { astyle } from './jss'`
ComponentB.jsx - contains `import { bstyle } from './jss'`
App.jsx - imports ComponentA and ComponentB
```

Updating `a.js` causes `ComponentB` to re-render as well, is there any way I can tell webpack to not reload the entire `jss/index.js`?

[![enter image description here][2]][2]

Components work fine

```
componets/
  ComponentC.jsx - default or named export
  ComponentD.jsx - default or named export
  index.js - Re-exports the components

app.jsx - import { ComponentC, ComponentD } from './components'
```

Updating `ComponentC` will not re-render `ComponentD` or `components/index.js`

[![enter image description here][3]][3]

I'm looking for the least disruptive solution and would prefer not to import all the styles directly by file name getting rid of the `jss/index.js`

[1]: https://material-ui.com/styles/api/#createstyles-styles-styles
[2]: https://i.stack.imgur.com/ZDvcy.png
[3]: https://i.stack.imgur.com/fGnuv.png
[4]: https://github.com/pmmmwh/react-refresh-webpack-plugin/tree/main/examples/webpack-dev-server
