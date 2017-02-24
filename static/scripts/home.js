console.log('Hello World');

document.getElementById('changeColor').addEventListener('click', function(){
  var color = document.getElementById('backgroundColor').value;
  var body = document.getElementById('body');
  body.style.background = color;
});

document.getElementById('changeTextColor').addEventListener('click', function(){
  var color = document.getElementById('textColor').value;
  var body = document.getElementById('body');
  body.style.color = color;
});

document.getElementById('hideFormButton').addEventListener('click', function(){
  document.getElementById('new-pet-form').style.visibility = "hidden";

});

document.getElementById('hideBody').addEventListener('click', function(){
  document.getElementById('body').style.visibility = "hidden";

});

function validateForm() {
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;
  console.log('name, species, age');
  console.log('Validating Form');
  if (!name.length || !species.length || !age.length){
    alert('Fields must not be blank');
  }
  if (isNaN(parseInt(age)) || typeof parseInt(age) !== 'number'){
    alert('Age is a number only');
  }
  return false;
}
