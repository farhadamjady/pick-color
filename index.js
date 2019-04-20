'use strict';

/**
 * This is the main class of project
 *
 * @constructor
 */
function PickColor()
{
	this.colors =
	{
		"aliceblue":
			{
				decimal: [240, 248, 255],
				hex: "#F0F8FF"
			},
		"antiquewhite":
			{
				decimal: [250, 235, 215],
				hex: "#FAEBD7"
			},
		"aqua":
			{
				decimal: [0, 255, 255],
				hex: "#00FFFF"
			},
		"aquamarine":
			{
				decimal: [127, 255, 212],
				hex: "#7FFFD4"
			},
		"azure":
			{
				decimal: [240, 255, 255],
				hex: "#F0FFFF"
			},
		"beige":
			{
				decimal: [245, 245, 220],
				hex: "#F5F5DC"
			},
		"bisque":
			{
				decimal: [255, 228, 196],
				hex: "#FFE4C4"
			},
		"black":
			{
				decimal: [0, 0, 0],
				hex: "#000000"
			},
		"blanchedalmond":
			{
				decimal: [255, 235, 205],
				hex: "#FFEBCD"
			},
		"blue":
			{
				decimal: [0, 0, 255],
				hex: "#0000FF"
			},
		"blueviolet":
			{
				decimal: [138, 43, 226],
				hex: "#8A2BE2"
			},
		"brown":
			{
				decimal: [165, 42, 42],
				hex: "#A52A2A"
			},
		"burlywood":
			{
				decimal: [222, 184, 135],
				hex: "#DEB887"
			},
		"cadetblue":
			{
				decimal: [95, 158, 160],
				hex: "#5F9EA0"
			},
		"chartreuse":
			{
				decimal: [127, 255, 0],
				hex: "#7FFF00"
			},
		"chocolate":
			{
				decimal: [210, 105, 30],
				hex: "#D2691E"
			},
		"coral":
			{
				decimal: [255, 127, 80],
				hex: "#FF7F50"
			},
		"cornflowerblue":
			{
				decimal: [100, 149, 237],
				hex: "#6495ED"
			},
		"cornsilk":
			{
				decimal: [255, 248, 220],
				hex: "#FFF8DC"
			},
		"crimson":
			{
				decimal: [220, 20, 60],
				hex: "#DC143C"
			},
		"cyan":
			{
				decimal: [0, 255, 255],
				hex: "#00FFFF"
			},
		"darkblue":
			{
				decimal: [0, 0, 139],
				hex: "#00008B"
			},
		"darkcyan":
			{
				decimal: [0, 139, 139],
				hex: "#008B8B"
			},
		"darkgoldenrod":
			{
				decimal: [184, 134, 11],
				hex: "#B8860B"
			},
		"darkgray":
			{
				decimal: [169, 169, 169],
				hex: "#A9A9A9"
			},
		"darkgreen":
			{
				decimal: [0, 100, 0],
				hex: "#006400"
			},
		"darkgrey":
			{
				decimal: [169, 169, 169],
				hex: "#A9A9A9"
			},
		"darkkhaki":
			{
				decimal: [189, 183, 107],
				hex: "#BDB76B"
			},
		"darkmagenta":
			{
				decimal: [139, 0, 139],
				hex: "#8B008B"
			},
		"darkolivegreen":
			{
				decimal: [85, 107, 47],
				hex: "#556B2F"
			},
		"darkorange":
			{
				decimal: [255, 140, 0],
				hex: "#FF8C00"
			},
		"darkorchid":
			{
				decimal: [153, 50, 204],
				hex: "#9932CC"
			},
		"darkred":
			{
				decimal: [139, 0, 0],
				hex: "#8B0000"
			},
		"darksalmon":
			{
				decimal: [233, 150, 122],
				hex: "#E9967A"
			},
		"darkseagreen":
			{
				decimal: [143, 188, 143],
				hwx: "#8FBC8F"
			},
		"darkslateblue":
			{
				decimal: [72, 61, 139],
				hex: "#483D8B"
			},
		"darkslategray":
			{
				decimal: [47, 79, 79],
				hex: "#2F4F4F"
			},
		"darkslategrey":
			{
				decimal: [47, 79, 79],
				hex: "#2F4F4F"
			},
		"darkturquoise":
			{
				decimal: [0, 206, 209],
				hex: "#00CED1"
			},
		"darkviolet":
			{
				decimal: [148, 0, 211],
				hex: "#9400D3"
			},
		"deeppink":
			{
				decimal: [255, 20, 147],
				hex: "#FF1493"
			},
		"deepskyblue":
			{
				decimal: [0, 191, 255],
				hex: "#00BFFF"
			},
		"dimgray":
			{
				decimal: [105, 105, 105],
				hex: "#696969"
			},
		"dimgrey":
			{
				decimal: [105, 105, 105],
				hex: "#696969"
			},
		"dodgerblue":
			{
				decimal: [30, 144, 255],
				hex: "#1E90FF"
			},
		"firebrick":
			{
				decimal: [178, 34, 34],
				hex: "#B22222"
			},
		"floralwhite":
			{
				decimal: [255, 250, 240],
				hex: "#FFFAF0"
			},
		"forestgreen":
			{
				decimal: [34, 139, 34],
				hex: "#228B22"
			},
		"fuchsia":
			{
				decimal: [255, 0, 255],
				hex: "#FF00FF"
			},
		"gainsboro":
			{
				decimal: [220, 220, 220],
				hex: "#DCDCDC"
			},
		"ghostwhite":
			{
				decimal: [248, 248, 255],
				hex: "#F8F8FF"
			},
		"gold":
			{
				decimal: [255, 215, 0],
				hex: "#FFD700"
			},
		"goldenrod":
			{
				decimal: [218, 165, 32],
				hex: "#DAA520"
			},
		"gray":
			{
				decimal: [128, 128, 128],
				hex: "#808080"
			},
		"green":
			{
				decimal: [0, 128, 0],
				hex: "#008000"
			},
		"greenyellow":
			{
				decimal: [173, 255, 47],
				hex: "#ADFF2F"
			},
		"grey":
			{
				decimal: [128, 128, 128],
				hex: "#808080"
			},
		"honeydew":
			{
				decimal: [240, 255, 240],
				hex: "#F0FFF0"
			},
		"hotpink":
			{
				decimal: [255, 105, 180],
				hex: "#FF69B4"
			},
		"indianred":
			{
				decimal: [205, 92, 92],
				hex: "#CD5C5C"
			},
		"indigo":
			{
				decimal: [75, 0, 130],
				hex: "#4B0082"
			},
		"ivory":
			{
				decimal: [255, 255, 240],
				hex: "#FFFFF0"
			},
		"khaki":
			{
				decimal: [240, 230, 140],
				hex: "#F0E68C"
			},
		"lavender":
			{
				decimal: [230, 230, 250],
				hex: "#E6E6FA"
			},
		"lavenderblush":
			{
				decimal: [255, 240, 245],
				hex: "#FFF0F5"
			},
		"lawngreen":
			{
				decimal: [124, 252, 0],
				hex: "#7CFC00"
			},
		"lemonchiffon":
			{
				decimal: [255, 250, 205],
				hex: "#FFFACD"
			},
		"lightblue":
			{
				decimal: [173, 216, 230],
				hex: "#ADD8E6"
			},
		"lightcoral":
			{
				decimal: [240, 128, 128],
				hex: "#F08080"
			},
		"lightcyan":
			{
				decimal: [224, 255, 255],
				hex: "#E0FFFF"
			},
		"lightgoldenrodyellow":
			{
				decimal: [250, 250, 210],
				hex: "#FAFAD2"
			},
		"lightgray":
			{
				decimal: [211, 211, 211],
				hex: "#D3D3D3"
			},
		"lightgreen":
			{
				decimal: [144, 238, 144],
				hex: "#90EE90"
			},
		"lightgrey":
			{
				decimal: [211, 211, 211],
				hex: "#D3D3D3"
			},
		"lightpink":
			{
				decimal: [255, 182, 193],
				hex: "#FFB6C1"
			},
		"lightsalmon":
			{
				decimal: [255, 160, 122],
				hex: "#FFA07A"
			},
		"lightseagreen":
			{
				decimal: [32, 178, 170],
				hex: "#20B2AA"
			},
		"lightskyblue":
			{
				decimal: [135, 206, 250],
				hex: "#87CEFA"
			},
		"lightslategray":
			{
				decimal: [119, 136, 153],
				hex: "#778899"
			},
		"lightslategrey":
			{
				decimal: [119, 136, 153],
				hex: "#778899"
			},
		"lightsteelblue":
			{
				decimal: [176, 196, 222],
				hex: "#B0C4DE"
			},
		"lightyellow":
			{
				decimal: [255, 255, 224],
				hex: "#FFFFE0"
			},
		"lime":
			{
				decimal: [0, 255, 0],
				hex: "#00FF00"
			},
		"limegreen":
			{
				decimal: [50, 205, 50],
				hex: "#32CD32"
			},
		"linen":
			{
				decimal: [250, 240, 230],
				hex: "#FAF0E6"
			},
		"magenta":
			{
				decimal: [255, 0, 255],
				hex: "#FF00FF"
			},
		"maroon":
			{
				decimal: [128, 0, 0],
				hex: "#800000"
			},
		"mediumaquamarine":
			{
				decimal: [102, 205, 170],
				hex: "#66CDAA"
			},
		"mediumblue":
			{
				decimal: [0, 0, 205],
				hex: "#0000CD"
			},
		"mediumorchid":
			{
				decimal: [186, 85, 211],
				hex: "#BA55D3"
			},
		"mediumpurple":
			{
				decimal: [147, 112, 219],
				hex: "#9370DB"
			},
		"mediumseagreen":
			{
				decimal: [60, 179, 113],
				hex: "#3CB371"
			},
		"mediumslateblue":
			{
				decimal: [123, 104, 238],
				hex: "#7B68EE"
			},
		"mediumspringgreen":
			{
				decimal: [0, 250, 154],
				hex: "#00FA9A"
			},
		"mediumturquoise":
			{
				decimal: [72, 209, 204],
				hex: "#48D1CC"
			},
		"mediumvioletred":
			{
				decimal: [199, 21, 133],
				hex: "#C71585"
			},
		"midnightblue":
			{
				decimal: [25, 25, 112],
				hex: "#191970"
			},
		"mintcream":
			{
				decimal:[245, 255, 250],
				hex: "#F5FFFA"
			},
		"mistyrose":
			{
				decimal: [255, 228, 225],
				hex: "#FFE4E1"
			},
		"moccasin":
			{
				decimal: [255, 228, 181],
				hex: "#FFE4B5"
			},
		"navajowhite":
			{
				decimal: [255, 222, 173],
				hex: "#FFDEAD"
			},
		"navy":
			{
				decimal: [0, 0, 128],
				hex: "#000080"
			},
		"oldlace":
			{
				decimal: [253, 245, 230],
				hex: "#FDF5E6"
			},
		"olive":
			{
				decimal: [128, 128, 0],
				hex: "#808000"
			},
		"olivedrab":
			{
				decimal: [107, 142, 35],
				hex: "#6B8E23"
			},
		"orange":
			{
				decimal: [255, 165, 0],
				hex: "#FFA500"
			},
		"orangered":
			{
				decimal: [255, 69, 0],
				hex: "#FF4500"
			},
		"orchid":
			{
				decimal: [218, 112, 214],
				hex: "#DA70D6"
			},
		"palegoldenrod":
			{
				decimal: [238, 232, 170],
				hex: "#EEE8AA"
			},
		"palegreen":
			{
				decimal: [152, 251, 152],
				hex: "#98FB98"
			},
		"paleturquoise":
			{
				decimal: [175, 238, 238],
				hex: "#AFEEEE"
			},
		"palevioletred":
			{
				decimal: [219, 112, 147],
				hex: "#DB7093"
			},
		"papayawhip":
			{
				decimal: [255, 239, 213],
				hex: "#FFEFD5"
			},
		"peachpuff":
			{
				decimal: [255, 218, 185],
				hex: "#FFDAB9"
			},
		"peru":
			{
				decimal: [205, 133, 63],
				hex: "#CD853F"
			},
		"pink":
			{
				decimal: [255, 192, 203],
				hex: "#FFC0CB"
			},
		"plum":
			{
				decimal: [221, 160, 221],
				hex: "#DDA0DD"
			},
		"powderblue":
			{
				decimal: [176, 224, 230],
				hex: "#B0E0E6"
			},
		"purple":
			{
				decimal: [128, 0, 128],
				hex: "#800080"
			},
		"rebeccapurple":
			{
				decimal: [102, 51, 153],
				hex: "#663399"
			},
		"red":
			{
				decimal: [255, 0, 0],
				hex: "#FF0000"
			},
		"rosybrown":
			{
				decimal: [188, 143, 143],
				hex: "#BC8F8F"
			},
		"royalblue":
			{
				decimal: [65, 105, 225],
				hex: "#4169E1"
			},
		"saddlebrown":
			{
				decimal: [139, 69, 19],
				hex: "#8B4513"
			},
		"salmon":
			{
				decimal: [250, 128, 114],
				hex: "#FA8072"
			},
		"sandybrown":
			{
				decimal: [244, 164, 96],
				hex: "#F4A460"
			},
		"seagreen":
			{
				decimal: [46, 139, 87],
				hex: "#2E8B57"
			},
		"seashell":
			{
				decimal: [255, 245, 238],
				hex: "#FFF5EE"
			},
		"sienna":
			{
				decimal: [160, 82, 45],
				hex: "#A0522D"
			},
		"silver":
			{
				decimal: [192, 192, 192],
				hex: "#C0C0C0"
			},
		"skyblue":
			{
				decimal: [135, 206, 235],
				hex: "#87CEEB"
			},
		"slateblue":
			{
				decimal: [106, 90, 205],
				hex: "#6A5ACD"
			},
		"slategray":
			{
				decimal: [112, 128, 144],
				hex: "#708090"
			},
		"slategrey":
			{
				decimal: [112, 128, 144],
				hex: "#708090"
			},
		"snow":
			{
				decimal: [255, 250, 250],
				hex: "#FFFAFA"
			},
		"springgreen":
			{
				decimal: [0, 255, 127],
				hex: "#00FF7F"
			},
		"steelblue":
			{
				decimal: [70, 130, 180],
				hex: "#4682B4"
			},
		"tan":
			{
				decimal: [210, 180, 140],
				hex: "#D2B48C"
			},
		"teal":
			{
				decimal: [0, 128, 128],
				hex: "#008080"
			},
		"thistle":
			{
				decimal: [216, 191, 216],
				hex: "#D8BFD8"
			},
		"tomato":
			{
				decimal: [255, 99, 71],
				hex: "#FF6347"
			},
		"turquoise":
			{
				decimal: [64, 224, 208],
				hex: "#40E0D0"
			},
		"violet":
			{
				decimal: [238, 130, 238],
				hex: "#EE82EE"
			},
		"wheat":
			{
				decimal: [245, 222, 179],
				hex: "#F5DEB3"
			},
		"white":
			{
				decimal: [255, 255, 255],
				hex: "#FFFFFF"
			},
		"whitesmoke":
			{
				decimal: [245, 245, 245],
				hex: "#F5F5F5"
			},
		"yellow":
			{
				decimal: [255, 255, 0],
				hex: "#FFFF00"
			},
		"yellowgreen":
			{
				decimal: [154, 205, 50],
				hex: "#9ACD32"
			},
	};
}

/**
 * Return the decimal code of given color
 *
 * @param colorName
 * @returns {*}
 */
PickColor.prototype.getDecimal = function ( colorName )
{
	return this.colors[colorName].decimal;
};

/**
 * Return the hex code of given color
 *
 * @param colorName
 * @returns {*}
 */
PickColor.prototype.getHex = function ( colorName )
{
	return this.colors[colorName].hex;
};

/**
 * Get a color name and change it
 *
 * @param colorName
 * @param position
 * @param newCode
 * @param returnType
 */
PickColor.prototype.editColor = function ( colorName, position, newCode, returnType )
{
	let hexCode = this.colors[colorName].hex;

	let clearCode = hexCode.split("#")[1];

	let clearCodeArr = clearCode.split("");

	clearCodeArr[clearCodeArr.length-position-1] = newCode;

	if (returnType && returnType === 'dec' )
	{
		let  decSeparated= clearCodeArr.join("").match(/\w{2}/g);

		decSeparated = decSeparated.map(( i ) => +("0x" + i ));

		return decSeparated;
	}

	return "#" + clearCodeArr.join("");
};

module.exports = PickColor;
