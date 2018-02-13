
//(function(){
  
  var charmeleon = document.getElementById('cha');
  var diglett = document.getElementById('dig');
  var pidgey = document.getElementById('pid');
  var lapras = document.getElementById('lap');
  var arcanine = document.getElementById('arc');
  var sandshrew = document.getElementById('san');
  var dodrio = document.getElementById('dod');
  var staryu = document.getElementById('sta');
  var rapidash = document.getElementById('rap');
  var machoke = document.getElementById('mac');
  var dragonite = document.getElementById('dra');
  var goldeen = document.getElementById('gol');
  
  var name = document.getElementById('fName').value;

// Make the Pokémon icon buttons functional
charmeleon.addEventListener('click', function() {displayPokedex('charmeleon');}, false);
diglett.addEventListener('click', function() {displayPokedex('diglett');}, false);
pidgey.addEventListener('click', function() {displayPokedex('pidgey');}, false);
lapras.addEventListener('click', function() {displayPokedex('lapras');}, false);
arcanine.addEventListener('click', function() {displayPokedex('arcanine');}, false);
sandshrew.addEventListener('click', function() {displayPokedex('sandshrew');}, false);
dodrio.addEventListener('click', function() {displayPokedex('dodrio');}, false);
staryu.addEventListener('click', function() {displayPokedex('staryu');}, false);
rapidash.addEventListener('click', function() {displayPokedex('rapidash');}, false);
machoke.addEventListener('click', function() {displayPokedex('machoke');}, false);
dragonite.addEventListener('click', function() {displayPokedex('dragonite');}, false);
goldeen.addEventListener('click', function() {displayPokedex('goldeen');}, false);



// Determine the month entered by the user, find corresponding Pokémon to display.

function getPokemon() {

  var bday = document.getElementById('bday').value;

  var date = bday.split('-');

  var whichMonth = date[1];
  var whichDayOfMonth = date[2];

  var pokemon;

  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    pokemon = 'machoke';
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    pokemon = 'rapidash';
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    pokemon = 'staryu';
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    pokemon = 'dodrio';
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    pokemon = 'sandshrew';
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    pokemon = 'arcanine';
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    pokemon = 'lapras';
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    pokemon = 'pidgey';
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    pokemon = 'diglett';
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    pokemon = 'charmeleon';
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    pokemon = 'goldeen';
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    pokemon = 'dragonite';
  }

  console.log(pokemon);
  displayPokedex(pokemon);

  return false;
}


function displayPokedex(pokemon) {
  switch (pokemon) {

    case 'charmeleon':
      console.log('Ran charmeleon');
      clearZodiac();
      showZodiac(pokemon);
      break;

    case 'diglett':
      console.log('Ran diglett');
      clearZodiac();
      showZodiac(pokemon);
      break;

    case 'pidgey':
      console.log('Ran pidgey');
      clearZodiac();
      showZodiac(pokemon);
      break;

    case 'lapras':
      console.log('Ran lapras');
      clearZodiac();
      showZodiac(pokemon);
      break;

    case 'arcanine':
      console.log('Ran arcanine');
      clearZodiac();
      showZodiac(pokemon);
      break;

    case 'sandshrew':
      console.log('Ran sandshrew');
      clearZodiac();
      showZodiac(pokemon);
      break;

    case 'dodrio':
      console.log('Ran dodrio');
      clearZodiac();
      showZodiac(pokemon);
      break;

    case 'staryu':
      console.log('Ran staryu');
      clearZodiac();
      showZodiac(pokemon);
      break;

    case 'rapidash':
      console.log('Ran rapidash');
      clearZodiac();
      showZodiac(pokemon);
      break;

    case 'machoke':
      console.log('Ran machoke');
      clearZodiac();
      showZodiac(pokemon);
      break;

    case 'dragonite':
      console.log('Ran dragonite');
      clearZodiac();
      showZodiac(pokemon);
      break;

    case 'goldeen':
      console.log('Ran goldeen');
      clearZodiac();
      showZodiac(pokemon);
      break;
  }
}


function showZodiac(pokemon) {

  document.getElementById(pokemon).setAttribute('class', 'dexEntry showZodiac');

  document.getElementById('inputForm').setAttribute('class', 'inputForm showZodiac');

}

function clearZodiac() {
  var dexEntries = document.getElementsByClassName('dexEntry');

  for (var i = 0; i < dexEntries.length; i ++) {
    dexEntries[i].setAttribute('class', 'dexEntry');
  }
}

function showForm() {
  document.getElementById('inputForm').setAttribute('class', 'inputForm');
}


// Could use event "load" to start background music playing

//})();


/*************

For the actual zodiac output, let's have the person's inputted First Name be
displayed to them in an interesting way.

For example: 'Hey [First Name], looks like you're Pokémon zodiac is Charizard!'

Also, in terms of the actual zodiac, in addition to the output showing your Pokémon,
let's have the ability to print the output or something.

*************/