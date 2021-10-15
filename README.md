# About

Define your functions with simple definer

# Installation
```
npm i definery
```

# Usage
```js
const Definery = require("definery");
const definer = new Definery.definer();

definer(console.send = console.log);

definer(console.send("hello world!"));
```