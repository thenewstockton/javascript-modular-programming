define(function(){

	function Calculator(number1, number2){

		if((typeof number1 == "undefined") || (typeof number2 == "undefined")){
			console.error("wrong parameter");
			throw "Bad parameter";
		}

		var _number1;
		var _number2;

		this._number1 = number1;
		this._number2 = number2;

		this.addition = function(){
			return "addition : " + (this._number1 + this._number2);
		}

		this.substraction = function(){
			return "substraction : " + (this._number1 - this._number2);
		}

		this.multiplication = function(){
			return "multiplication : " + (this._number1 * this._number2);
		}
	}

	Calculator.prototype = {

		constructor : Calculator,
		getCalculator: function(){
			return this;
		}
	}

	return Calculator;
});