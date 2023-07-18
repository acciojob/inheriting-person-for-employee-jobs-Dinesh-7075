// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.greet = function(name, age) {
	console.log(`Hello, my name is ${name}, I am ${age} years old.`);
}
const person  = new Person("Alice", 25);
console.log(person );
person .greet("Alice", 25);

function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
	this.jobTitle = jobTitle;
}
Employee.prototype.jobGreet = function(name, age, jobTitle) {
	console.log(`Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}`, );
}
const employee  = new Employee("Bob", 30, "Manager");
console.log(employee );
employee .jobGreet("Bob", 30, "Manager");
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
