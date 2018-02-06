
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


// Determine the month entered by the user, find corresponding Pokémon to display.

function getPokemon() {

  var bday = document.getElementById('bday').value;
  var name = document.getElementById('fName').value;

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

  displayPokedex(pokemon);

  return false;
}


function showInfoBox() {
  var x = document.getElementById('infoBox');
  if (x.className === 'infoBox') {
      x.className += ' showInfo';
  } else {
      x.className = 'infoBox';
  }
}


function displayPokedex(pokemon) {
  if (pokemon == 'charmeleon') {
    
  }
  else if (pokemon == 'diglett') {
    
  }
  else if (pokemon == 'pidgey') {
    
  }
  else if (pokemon == 'lapras') {
    
  }
  else if (pokemon == 'arcanine') {
    
  }
  else if (pokemon == 'sandshrew') {
    
  }
  else if (pokemon == 'dodrio') {
    
  }
  else if (pokemon == 'staryu') {
    
  }
  else if (pokemon == 'rapidash') {
    
  }
  else if (pokemon == 'machoke') {
    
  }
  else if (pokemon == 'dragonite') {
    
  }
  else if (pokemon == 'goldeen') {
    
  }
}


/*************

For the actual zodiac output, let's have the person's inputted First Name be
displayed to them in an interesting way.

For example: 'Hey [First Name], looks like you're Pokémon zodiac is Charizard!'

Also, in terms of the actual zodiac, in addition to the output showing your Pokémon,
let's have the ability to print the output or something.

*************/