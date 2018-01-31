define((["require", "radio"]), function(require, radio){

	// var radio = require('radio');

	function Page(){

		radio('addStudentResultToPage').subscribe( addStudentResultToPage);
	}

	Page.prototype = {
		constructor : Page,
		getPage : function(){
			return this;
		}
	};

	function addStudentResultToPage(name, additionResult, substractionResult, multiplicationResult){
		var h2Cloned = $('h2.template').clone().removeClass('template');
		h2Cloned.html(
				"name: " + name + "</br>"
				+ "additionResult: " + additionResult + "</br>"
				+ "substractionResult: " + substractionResult + "</br>"
				+ "multiplicationResult: " + multiplicationResult + "</br>"
			);
		$('body').prepend(h2Cloned);
	}
	return Page;
});