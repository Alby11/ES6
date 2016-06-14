"use strict";

//Custom Interpolation
let bar = 'BAR',
    baz = 'BAZ',
    quux = 'QUUX';
console.log(`http://example.com/foo?bar=${bar + baz}&quux=${quux}`);
console.log([ "http://example.com/foo?bar=", "&quux=", "" ],bar + baz, quux);