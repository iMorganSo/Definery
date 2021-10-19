# Why Definery?

Definery is a simple package to define your node js functions and improve your codes.

# Installation

```
npm i definery
```
NOTE: Yarn manager is not supported yet.



# Required

node.js @16 or higher,
some functions from your own create,
optional: [You can use some API for your own use],


# Usage

```js
const Definery = require("definery");

Definery.definer(console.log("Hello world!"));
```

# Another usage

```js
const Definery = require("definery");

definer = Definery.definer;

definer(console.log("Hello world!"));
```

# node-fetch Example

```js
const Definery = require("definery");
const fetch = require("node-fetch");

fetch("some function", Definery.definer("function")).then("function").catch(err => {
    console.log(err);
    Definery.definer(err);
})

```