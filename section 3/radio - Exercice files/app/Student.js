define((["require","radio", "../app/Calculator"]), function(require, radio, Calculator){

	function Student(name){

		var _name;
		this._name = name;

		this.makeAllCalculations = function(number1, number2){

			var calculator = new Calculator(number1, number2);
			radio("addStudentResultToPage").broadcast(this._name, calculator.addition(), calculator.substraction());
		}
	}

	Student.prototype = {

		constructor: Student,
		getStudent: function(){
			return this;
		}
	}

	return Student;
});