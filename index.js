'use strict';

let definerfile = require("./definer.js");

/**
 * @var { Definery }[definer]:definerfile
 */

function Definery(definer) {
    this.definer = definerfile
};

Definery.definer = function() {
    Definery.definer = definerfile;
};