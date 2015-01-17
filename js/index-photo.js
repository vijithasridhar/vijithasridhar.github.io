var paths = document.querySelectorAll('.drawPath');

var fills = ['#010101', '#686868', '#393939', '#191919', '#282828', '#494949', '#7b7b7b', '#9a9a9a', '#575757', '#878787',
				'#a8a8a8', '#bababa', '#cdcdcd', '#e8e8e8', '#dadada', '#ffffff'];

for (var i = 0; i < paths.length; i++) {
	var path = paths[i];
	var length = path.getTotalLength();
	// Clear any previous transition
	path.style.WebkitTransition = path.style.transition = 'none';
	// Set up the starting positions
	//path.style.stroke= '#ffaaaa';
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;
	path.style.fill = 'transparent';

	var classList1 = path.classList;
	var fillColor = fills[parseInt(classList1[1].substring(8)) - 1]

	// Trigger a layout so styles are calculated & the browser
	// picks up the starting position before animating
	path.getBoundingClientRect();
	// Define our transition
	path.style.WebkitTransition = path.style.transition = 'stroke-dashoffset 4s ease-in-out, fill 4s ease-out';
	// Go!
	path.style.fill = fillColor;				//change to black if using original flower svg
	if ((i % 100) == 1) {
		console.log(path.style.fill + ' endFill: ' + fillColor + ' and stroke: ' + path.style.stroke);
	}
	path.style.strokeDashoffset = '0';
}