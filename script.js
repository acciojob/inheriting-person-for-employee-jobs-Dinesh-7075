// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.greet = function(name, age) {
	console.log(`Hello, my name is ${name}, I am ${name} years old.`);
}

function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
	this.jobTitle = jobTitle;
}
Employee.prototype.jobGreet = function(name, age,jobTitle) {
	console.log(`Hello, my name is ${name}, I am ${name} years old, and my job title is ${jobTitle}`, );
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
