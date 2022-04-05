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

# Returned JSON value

```json
{
    "function" {
        "name": "Your function name will displays over here in our API JSON file",
        "usedDefiner": "true",
        "usedGetFunction": "null",
        "functionType": "Your function name will displays over here in our API JSON file",
        "string": "null",
        "number": "null",
        "function": "null",
        "asyncFunction": "null",
        "NoAsyncOrFunction": "null",
        "array": "null",
        "args": "instead of 1(minimum) to Infinity args value[Args will displays in this array]"
    }
}
```

# Helpful info

You can't get the info of returned JSON value, and the only one way to get them is to use some exporter to get them as console primare value content or JSON value type.

Required Node js version is v16.6.0 or higher