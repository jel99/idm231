//(function(){}
{
  
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


  

  var chaRead = document.getElementById('chaRead');
  var digRead = document.getElementById('digRead');
  var pidRead = document.getElementById('pidRead');
  var lapRead = document.getElementById('lapRead');
  var arcRead = document.getElementById('arcRead');
  var sanRead = document.getElementById('sanRead');
  var dodRead = document.getElementById('dodRead');
  var staRead = document.getElementById('staRead');
  var rapRead = document.getElementById('rapRead');
  var macRead = document.getElementById('macRead');
  var draRead = document.getElementById('draRead');
  var golRead = document.getElementById('golRead');


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


var name;

// Random phrase generator that outputs to the Dex Reading if the person entered a name.
function getPhrase() {
  
  name = getName();
  
  var phrases = [
    "Ah, " + name + ", looks like you are a " + Charmeleon + ".",
    ,
  ]
}

// Display the appropriate Pokédex entry for the user
function displayPokedex(pokemon) {
  switch (pokemon) {

    case 'charmeleon':
      console.log('Ran charmeleon');
      clearZodiac();

      name = getName();
      if (name == "") {
        chaRead.textContent = "Like a Charmeleon, you are a confident person who won't stop until you've gotten what you want. One weakness of yours is that you're hot-headed and will scratch anyone who makes you mad with your razor-sharp claws.";
      } else {
        chaRead.textContent = "Ah, " + name + ", looks like you are a Charmeleon. Similar to a Charmeleon, you are a confident person who won't stop until you've gotten what you want. One weakness of yours is that you're hot-headed and will scratch anyone who makes you mad with your razor-sharp claws.";
      }

      showZodiac(pokemon);
      playSound('chaAud');

      break;

    case 'diglett':
      console.log('Ran diglett');
      clearZodiac();

      name = getName();
      if (name == "") {
        digRead.textContent = "As a Diglett, you are reliable, practical, and responsible. You won't let another Diglett down, or let those pesky humans build a dam in your forest. However, being possesive is one of your weaknesses that you need to work on.";
      } else {
        digRead.textContent = "Hmm seems like you are a Diglett, " + name +". As a Diglett, you are reliable, practical, and responsible. You won't let another Diglett down, or let those pesky humans build a dam in your forest. However, being possesive is one of your weaknesses that you need to work on.";
      }

      showZodiac(pokemon);
      playSound('digAud');
      break;

    case 'pidgey':
      console.log('Ran pidgey');
      clearZodiac();

      name = getName();
      if (name == "") {
        pidRead.textContent = "Like a Pidgey, you are a gentle, affectionate person who doesn't like to get into fights if you don't have to. However, if danger approaches, you will kick up sand into your opponent's face to get away. Being nervous like this is one of your weaknesses.";
      } else {
        pidRead.textContent = "Ah, " + name + ", looks like you are a Charmeleon. Similar to a Charmeleon, you are a confident person who won't stop until you've gotten what you want. One weakness of yours is that you're hot-headed and will scratch anyone who makes you mad with your razor-sharp claws.";
      }

      showZodiac(pokemon);
      playSound('pidAud');
      break;

    case 'lapras':
      console.log('Ran lapras');
      clearZodiac();

      name = getName();
      if (name == "") {
        lapRead.textContent = "As a Lapras, you are a very loyal, emotional, and sympathetic person. You will ferry your friends to safety if they need it. However, you can be moody (possibly since you have been hunted to near extinction), and also insecure.";
      } else {
        lapRead.textContent = "Ah, " + name + ", looks like you are a Charmeleon. Similar to a Charmeleon, you are a confident person who won't stop until you've gotten what you want. One weakness of yours is that you're hot-headed and will scratch anyone who makes you mad with your razor-sharp claws.";
      }

      showZodiac(pokemon);
      playSound('lapAud');
      break;

    case 'arcanine':
      console.log('Ran arcanine');
      clearZodiac();

      name = getName();
      if (name == "") {
        arcRead.textContent = "Like an Arcanine, you enjoy being admired for your beauty and magnificence. However, sometimes this admiration can make you a bit arrogant and self-centered. But you also are very warm-hearted, generous, and cheerful, always looking on the bright side of life. You can cheer your friends up easily when they're down.";
      } else {
        arcRead.textContent = "Ah, " + name + ", looks like you are a Charmeleon. Similar to a Charmeleon, you are a confident person who won't stop until you've gotten what you want. One weakness of yours is that you're hot-headed and will scratch anyone who makes you mad with your razor-sharp claws.";
      }

      showZodiac(pokemon);
      playSound('arcAud');
      break;

    case 'sandshrew':
      console.log('Ran sandshrew');
      clearZodiac();

      name = getName();
      if (name == "") {
        sanRead.textContent = "As a Sandshrew, you can adapt easily to whatever is thrown at you in life. You are very analytical in how you approach tasks, but can also be overly critical of yourself, possibly working too much and pushing people away because of it.";
      } else {
        sanRead.textContent = "Ah, " + name + ", looks like you are a Charmeleon. Similar to a Charmeleon, you are a confident person who won't stop until you've gotten what you want. One weakness of yours is that you're hot-headed and will scratch anyone who makes you mad with your razor-sharp claws.";
      }

      showZodiac(pokemon);
      playSound('sanAud');
      break;

    case 'dodrio':
      console.log('Ran dodrio');
      clearZodiac();

      name = getName();
      if (name == "") {
        dodRead.textContent = "Like a Dodrio, you are very good at cooperating within your own mind, and can execute detailed plans easily. Because of this, you are very diplomatic as well. At some times, however, you can be indecisive as to what to do in some situations.";
      } else {
        dodRead.textContent = "Ah, " + name + ", looks like you are a Charmeleon. Similar to a Charmeleon, you are a confident person who won't stop until you've gotten what you want. One weakness of yours is that you're hot-headed and will scratch anyone who makes you mad with your razor-sharp claws.";
      }

      showZodiac(pokemon);
      playSound('dodAud');
      break;

    case 'staryu':
      console.log('Ran staryu');
      clearZodiac();

      name = getName();
      if (name == "") {
        staRead.textContent = "As a Staryu, you are very resourceful and brave in a battle, being able to regenerate any part of yourself at will. However, not wanting anybody to figure out your one weak spot, you can be distrusting and secretive.";
      } else {
        staRead.textContent = "Ah, " + name + ", looks like you are a Charmeleon. Similar to a Charmeleon, you are a confident person who won't stop until you've gotten what you want. One weakness of yours is that you're hot-headed and will scratch anyone who makes you mad with your razor-sharp claws.";
      }

      showZodiac(pokemon);
      playSound('staAud');
      break;

    case 'rapidash':
      console.log('Ran rapidash');
      clearZodiac();

      name = getName();
      if (name == "") {
        rapRead.textContent = "Like a Rapidash, you enjoy freedom, traveling fast, and being in the great outdoors. You really just love to run, and will chase after anything at top speed if you see that it's faster than you. However, because of being so speedy all the time, you can be really impatient when things get slow for you.";
      } else {
        rapRead.textContent = "Ah, " + name + ", looks like you are a Charmeleon. Similar to a Charmeleon, you are a confident person who won't stop until you've gotten what you want. One weakness of yours is that you're hot-headed and will scratch anyone who makes you mad with your razor-sharp claws.";
      }

      showZodiac(pokemon);
      playSound('rapAud');
      break;

    case 'machoke':
      console.log('Ran machoke');
      clearZodiac();

      name = getName();
      if (name == "") {
        macRead.textContent = "As a Machoke, you are responsible and disciplined, always going to the gym on time. You also enjoy helping friends move and will carry all their stuff for them. However, due to your disciplined nature, you can be somewhat condescending at times to others.";
      } else {
        macRead.textContent = "Ah, " + name + ", looks like you are a Charmeleon. Similar to a Charmeleon, you are a confident person who won't stop until you've gotten what you want. One weakness of yours is that you're hot-headed and will scratch anyone who makes you mad with your razor-sharp claws.";
      }

      showZodiac(pokemon);
      playSound('macAud');
      break;

    case 'dragonite':
      console.log('Ran dragonite');
      clearZodiac();

      name = getName();
      if (name == "") {
        draRead.textContent = "Like a Dragonite, you are very progressive in your ideologies, and are extremely independent. You do like to spend time with friends a lot, but can be uncompromising and temperamental at times.";
      } else {
        draRead.textContent = "Ah, " + name + ", looks like you are a Charmeleon. Similar to a Charmeleon, you are a confident person who won't stop until you've gotten what you want. One weakness of yours is that you're hot-headed and will scratch anyone who makes you mad with your razor-sharp claws.";
      }

      showZodiac(pokemon);
      playSound('draAud');
      break;

    case 'goldeen':
      console.log('Ran goldeen');
      clearZodiac();

      name = getName();
      if (name == "") {
        golRead.textContent = "As a Goldeen, you really enjoy a good swim in your local river. To your friends, you are known as the Water Queen/King. You are also a very compassionate, gentle, and artistic person. However, you can sometimes be overly trusting of people, as well as too fearful of what lies ahead in the great river of life.";
      } else {
        golRead.textContent = "Ah, " + name + ", looks like you are a Charmeleon. Similar to a Charmeleon, you are a confident person who won't stop until you've gotten what you want. One weakness of yours is that you're hot-headed and will scratch anyone who makes you mad with your razor-sharp claws.";
      }

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
}

function getName() {
  var fname = document.getElementById('fName').value;
      if (fname == "") { console.log('No name retrieved.'); }
      else { console.log('Name was retrieved.'); }
  return fname;
}

function playSound(pokemon) {
  var music = document.getElementById(pokemon);

  music.play();
}


// Could use event "load" to start background music playing
// Add listener for when page loads to then play background music
// window.addEventListener('load', [function], false)

}
//})();


/*************

For the actual zodiac output, let's have the person's inputted First Name be
displayed to them in an interesting way.

For example: 'Hey [First Name], looks like you're Pokémon zodiac is Charizard!'

Also, in terms of the actual zodiac, in addition to the output showing your Pokémon,
let's have the ability to print the output or something.

*************/