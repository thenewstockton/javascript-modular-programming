/**
 * Class person, only contains two basic behaviours(walk, speak)
 * @param {string} name [is the first name of the person]
 */
function Person (name){

	var name 	= name;
	this.name 	= name;
}

/**
 * get a person walking
 * @return {string} output to the console how the person walk
 */
Person.prototype.walk = function(){
	console.log("I am person walking");
}

/**
 * get a person talking
 * @return {string} output to the console what the person speaks
 */
Person.prototype.speak = function(){
	console.log("I am person speaking");
}

/**
 * Class Student is a subclass of Person
 * @param {String} name is the name of the student
 */
function Student(name){

	var name = name;
	Person.call(this);
}

/**
 * Student Inherite from person
 * @type {Person}
 */
Student.prototype = new Person(name);
Student.prototype.contructor = Student;//the change the pointer reference to Student

/**
 * Override the function speak from the mother class Person
 * @return {string} output what the student says
 */
Student.prototype.speak = function(){
	console.log("I am a student speaking"); 
}

/**
 * Allow the student to take a course 
 * @return {string} output to the console what course is taken
 */
Student.prototype.takeACourse = function(){
	console.log("I am a student taking a course");
}

var student = new Student("william");
student.walk();
student.speak();
student.takeACourse();