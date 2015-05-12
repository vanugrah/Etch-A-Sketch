$(document).ready(function($) {
	
	// create grid
	newGrid();
	
	$("#1").click(function() {
		clearGrid();
		newGrid();
		blackAndWhite();
	});

	$("#2").click(function() {
		clearGrid();
		newGrid();
		multiColor();
	});

	$("#3").click(function() {
		clearGrid();
		newGrid();
		orange();
	});

	$("#4").click(function() {
		clearGrid();
		newGrid();
	});
	
});

// Initializes a blank grid.
function newGrid() {
	for (var i = 0; i < 16; i++) {
		
		$(".grid-container").append( "<div class=" + "grid-row-" + i + "></div>");

		for (var j = 0; j < 32; j++) {
			$(".grid-row-" + i).append("<div class=grid-elem></div>");
		}
	}
}

// Clears the grid
function clearGrid() {
	$(".grid-container").html('');
}

// Function to change the marker color to black and white.
function blackAndWhite() {
		$(".grid-elem").mouseenter(function() {
		var color = hex2int(rgb2hex($(this).css("background-color")));
		color += 0x252525;
		color = int2hex(color);
		$(this).css('background-color', '#' + color);
	});
}

// Pretty much the same thing but the marker changes colors. 
function multiColor() {
		
		$(".grid-elem").mouseenter(function() {

		var color = rgb2hex($(this).css("background-color"));
		color = hex2int(rgb2hex($(this).css("background-color")));
		color += 0x220101;

		color = int2hex(color);
		$(this).css('background-color', '#' + color);
	});
}

// Function to change the marker color to different shades of orange.
function orange() {
	$(".grid-elem").mouseenter(function() {

		var color = rgb2hex($(this).css("background-color"));

		if (color == '#515151') { // original color
			color = 'FF8533';
		} else if (color.substring(1,3) < '69') {
			color = hex2int(color);
			color -= 0x050001;
		} else {
			color = hex2int(color);
			color -= 0x211901;
		}

		color = int2hex(color);
		$(this).css('background-color', '#' + color);
	});
}

// Function to convert hex format to a rgb color
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

// Function to convert from hex to dec
function hex2int(hex) {
	return parseInt(hex.substring(1,hex.length),16);
}

// Function to convert from dec to hex
function int2hex(num) {
	return num.toString(16);
}

