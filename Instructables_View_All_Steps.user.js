// ==UserScript==
// @id          InstructablesViewAllSteps
// @name        Instructables View All Steps
// @namespace   http://cjsimon.github.io/InstructablesViewAllSteps
// @version     1.0.0
// @author      Christopher Simon <cjsimon333@gmail.com>
// @description View All Steps on Instructables
// @icon        https://raw.github.com/cjsimon/InstructablesAllSteps/icon48.png
// @icon64      https://raw.github.com/cjsimon/InstructablesAllSteps/icon64.png
// @include     /(http:\/\/|https:\/\/)?(www\.)?(instructables.com\/).*/
// @require  	http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  	https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    	GM_addStyle
// ==/UserScript==

var buttonTag = '#allsteps-btn';
var buttonDom = $(buttonTag);

(function() {
// Check if all steps mode has been specified in the url
var url = decodeURI(document.URL);
var hasAllSteps = url.match(/(\/)(\?)(ALLSTEPS)/i) ? true : false;
console.log("All Steps: " + hasAllSteps);

// Check if the View All Steps button element is loaded
// and load the page in All Steps mode accordingly
if(!hasAllSteps) waitForKeyElements(buttonTag, viewAllSteps);

function viewAllSteps() {
	// Reload the page based on the relative url specified from the button
	// Alternatively, a click event can be passed for the same functionality
	window.location.replace(buttonDom.attr('href'));
	//buttonDom.click();
}
})();