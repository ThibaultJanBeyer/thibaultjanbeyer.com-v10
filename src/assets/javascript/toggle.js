/**
 * 
 * Toggle Content on button press
 * use "toggle--button" as class for your handler then "toggle--close" or "toggle--open" to have it opened or closed at start
 * Important: all this has to be within an element that has the "toggle--scope" element. The scope tells the plugin what element will be opened on button click (the one that is in the same scope as the button)
 *  
 */
(function () {
	var buttons = document.querySelectorAll('.toggle--button');
	var closedContainers = document.querySelectorAll('toggle--close');
  
  [].forEach.call(closedContainers, function (el) {
    //hide
		el.classList.add('hidden');
	});

	[].forEach.call(buttons, function (el) {
		el.addEventListener('click', function () {
			toggle(this);
		}, false);
	});

	function toggle(el) {
		// set the scope variable to the element that has the .toggle--scope class)
		var scope = getParentScope(el, 'toggle--scope');
		// get the element that will be toggled in that scope
		var toggleElement = scope.querySelector(':scope > .toggle');
    
    //if closed
		if (toggleElement.classList.contains('toggle--close')) {

      // show for everyone
      toggleElement.classList.remove('hidden');
      
			el.classList.add('toggle--button-close');
			toggleElement.classList.remove('toggle--close');
			toggleElement.classList.add('toggle--open');

    //if opened
		} else if (toggleElement.classList.contains('toggle--open')) {

			toggleElement.classList.remove('toggle--open');
			toggleElement.classList.add('toggle--close');
      
			el.classList.remove('toggle--button-close');
      
      // hide for everyone (after delay)
      setTimeout(function() {
        toggleElement.classList.add('hidden');
      }, 1000);

		} else {

			console.log('ERROR: function toggle() : Sorry ' + toggleElement + ' has neighter toggle--close nor toggle--open class.');

		}
	}

	function getParentScope(element, classname, range = 5) {
		// check if current element has the searched class
    if (element.classList.contains(classname)) {
			// if so, then return the current element
			return element;
		} else {
			// if not check if we are still in search range
			// this integer will to prevent infinite loops if no parent with that class is found x level deep
			--range;
			if (range > 0) {
				// if so redo everything with the parrent element and range -1
				return getParentScope(element.parentNode, classname, range);
			} else {
				// if we are above range write an error
				console.log('ERROR: function getParentScope() : Sorry couldn’t find any parent with ' + classname + ' within the seleceted range.');
			}
		}
	}

})();