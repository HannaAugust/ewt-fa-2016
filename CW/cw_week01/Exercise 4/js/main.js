// ---------------------------------------
// Exersize 4: Create an array with a list of your skillsets
// Loop through them and append each one to
// append them to the <ul class="skillsets"> as <li> elements

var skillsets = ["Graphic Design", "Interaction Design", "UX/UI"];


skillsets.forEach(function (skillset, index){
	$('.skillsets').append('<li>' + skillset + '</li>');
})