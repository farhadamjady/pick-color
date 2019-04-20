A JSON with color names, some facilities and its values ( decimal and hex ). Based on http://dev.w3.org/csswg/css-color/#named-colors.

`npm install pick-color`

```js
let PickColor = require('pick-color');

let pickColor = new PickColor();

// Get the decimal code of color
pickColor.getDecimal('yellow'); // [255, 255 , 0]


// Get the hex code of color
pickColor.getHex('yellow'); // #FFFF00

// Change the color to whatever you want

// It means yellow color at position 0 should be 1
pickColor.editColor( 'yellow', 0, 1 ); // #FFFF01

// Another example
pickColor.editColor( 'yellow', 3, 'A' ); // #FFAF00

// Also it returns decimal code after edition
pickColor.editColor( 'yellow', 0, 1, 'dec' ); // [255, 255 , 1]

// Another example
pickColor.editColor( 'yellow', 3, 'A', 'dec' ); // [255, 175 , 0]
```
