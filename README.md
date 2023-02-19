# How to use typescript paths in ESM module ?

master branch show **working**  example with common js + paths + tsconfig-paths

But then I start to use ESM modules:
1. add "type": "module" to package.json
2. add  "module": "Node16" to tsconfig.json
3. Add "esm": true and  "experimentalSpecifierResolution": "node" to ts-node sections of tsconfig.json

After convert to ESM modules ts-node paths stop working.
