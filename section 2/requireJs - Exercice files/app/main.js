define(function(require){

	var Page = require('./Page');
	var page = new Page();
	


	var Student 	= require('./Student');

	var student1	= new Student("william");
	var student2	= new Student("John");

	student1.makeAllCalculations(40, 80); 
	student2.makeAllCalculations(50, 10);
});