
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

  // Make the Pokémon icon buttons functional
  charmeleon.addEventListener('click', function() {displayPokedex('charmeleon');});
  diglett.addEventListener('click', function() {displayPokedex('diglett');});
  pidgey.addEventListener('click', function() {displayPokedex('pidgey');});
  lapras.addEventListener('click', function() {displayPokedex('lapras');});
  arcanine.addEventListener('click', function() {displayPokedex('arcanine');});
  sandshrew.addEventListener('click', function() {displayPokedex('sandshrew');});
  dodrio.addEventListener('click', function() {displayPokedex('dodrio');});
  staryu.addEventListener('click', function() {displayPokedex('staryu');});
  rapidash.addEventListener('click', function() {displayPokedex('rapidash');});
  machoke.addEventListener('click', function() {displayPokedex('machoke');});
  dragonite.addEventListener('click', function() {displayPokedex('dragonite');});
  goldeen.addEventListener('click', function() {displayPokedex('goldeen');});


  var name = document.getElementById('fName').value;

  // var chaRead = document.getElementById('chaRead');
  // var digRead = document.getElementById('digRead');
  // var pidRead = document.getElementById('pidRead');
  // var lapRead = document.getElementById('lapRead');
  // var arcRead = document.getElementById('arcRead');
  // var sanRead = document.getElementById('sanRead');
  // var dodRead = document.getElementById('dodRead');
  // var staRead = document.getElementById('staRead');
  // var rapRead = document.getElementById('rapRead');
  // var macRead = document.getElementById('macRead');
  // var draRead = document.getElementById('draRead');
  // var golRead = document.getElementById('golRead');


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
      playSound('chaAud');

      // chaRead.textContent = "Ah "+name+" looks like you are a Charmeleon. Like a Charmeleon, you are a confident person who won't stop until you've gotten what you want. One weakness of yours is that you're hot-headed and will scratch anyone who makes you mad with your razor-sharp claws.";

      break;

    case 'diglett':
      console.log('Ran diglett');
      clearZodiac();
      showZodiac(pokemon);
      playSound('digAud');
      break;

    case 'pidgey':
      console.log('Ran pidgey');
      clearZodiac();
      showZodiac(pokemon);
      playSound('pidAud');
      break;

    case 'lapras':
      console.log('Ran lapras');
      clearZodiac();
      showZodiac(pokemon);
      playSound('lapAud');
      break;

    case 'arcanine':
      console.log('Ran arcanine');
      clearZodiac();
      showZodiac(pokemon);
      playSound('arcAud');
      break;

    case 'sandshrew':
      console.log('Ran sandshrew');
      clearZodiac();
      showZodiac(pokemon);
      playSound('sanAud');
      break;

    case 'dodrio':
      console.log('Ran dodrio');
      clearZodiac();
      showZodiac(pokemon);
      playSound('dodAud');
      break;

    case 'staryu':
      console.log('Ran staryu');
      clearZodiac();
      showZodiac(pokemon);
      playSound('staAud');
      break;

    case 'rapidash':
      console.log('Ran rapidash');
      clearZodiac();
      showZodiac(pokemon);
      playSound('rapAud');
      break;

    case 'machoke':
      console.log('Ran machoke');
      clearZodiac();
      showZodiac(pokemon);
      playSound('macAud');
      break;

    case 'dragonite':
      console.log('Ran dragonite');
      clearZodiac();
      showZodiac(pokemon);
      playSound('draAud');
      break;

    case 'goldeen':
      console.log('Ran goldeen');
      clearZodiac();
      showZodiac(pokemon);
      playSound('golAud');
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
  document.getElementById('inputForm').reset();
}


function playSound(pokemon) {
  var music = document.getElementById(pokemon);

  music.play();
}


// Could use event "load" to start background music playing
// Add listener for when page loads to then play background music
// window.addEventListener('load', [function], false)

//})();


/*************

For the actual zodiac output, let's have the person's inputted First Name be
displayed to them in an interesting way.

For example: 'Hey [First Name], looks like you're Pokémon zodiac is Charizard!'

Also, in terms of the actual zodiac, in addition to the output showing your Pokémon,
let's have the ability to print the output or something.

*************/