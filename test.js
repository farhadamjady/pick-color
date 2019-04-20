'use strict';

let PickColor = require('./');
let assert = require('assert');

let pickColor = new PickColor();

assert.deepEqual(pickColor.getDecimal('yellow'), [255, 255 , 0]);
assert.deepEqual(pickColor.getHex('yellow'), '#FFFF00');
assert.deepEqual(pickColor.editColor('yellow', 3, 'A' ), '#FFAF00');
assert.deepEqual(pickColor.editColor('yellow', 3, 'A', 'dec' ), [255, 175 , 0]);