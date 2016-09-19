// ---------------------------------------
// Exersize 3: Create an object with your firstName and lastName
// append them to the html using jQuery
//
// syntax for an object:
// var obj = {};


var obj = {
	firstName:'Hannah',
	lastName:'Bahdanava'
}

console.log(obj.firstName);

$('.first-name').append(obj.firstName);
$('.last-name').append(obj.lastName);
