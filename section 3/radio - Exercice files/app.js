/**
 * configure requireJs
 */

requirejs.config({
	baseUrl : 'lib',
	paths: {
		app : '../app',
		jquery: "https://code.jquery.com/jquery-1.12.0.min"
	}
});

requirejs(['app/main']);
