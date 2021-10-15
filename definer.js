const Definery = require("./index.js");

Definery.definer = async function(definer) {
    'use strict';
    void definer;
    definer ?? Definery.getFunction;
        definer = Definery.definer;
        await Definery.fetchFunction ?? { Definery } ?? definer;
};

if(!Definery.definer == "Function") { 
     console.log("Definery > You can't use this definer without functions")
} else if(!"Node" === "@16.0.0" ?? "HIGHER") {
     console.log("Definery > Your node js verion must be ^16.0.0 or higher")
}

module.exports = Definery.definer;