// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.greet = function(name, age) {
	console.log(`Hello, my name is ${name}, I am ${age} years old.`);
}
const dineshDetails = new Person('Dinesh', 23);
console.log(dineshDetails);
dineshDetails.greet('Dinesh', 23);

function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
	this.jobTitle = jobTitle;
}
Employee.prototype.jobGreet = function(name, age,jobTitle) {
	console.log(`Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}`, );
}
const EmpDetails = new Employee('Dinesh', 25, 'SDE');
console.log(EmpDetails);
EmpDetails.jobGreet('Dinesh', 25, 'SDE');
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
