define((["require", "jquery", "radio"]), function(require, $,radio){

	function Page(){

		radio('addStudentResultToPage').subscribe(addStudentResultToPage);
	}

	function addStudentResultToPage(name, additionResult, substractionResult){
		var h2Cloned = $('h2.template').clone().removeClass("template");
		h2Cloned.html(
			"name: "  + name + "<br/>"
			+ "additionResult : " + additionResult + "<br/>"
			+ "substractionResult: " + substractionResult + "<br/>"


			);
		$('body').prepend(h2Cloned);
	}

	Page.prototype = {
		constructor : Page,
		getPage: function(){

			return this;
		}
	}

	return Page;

});