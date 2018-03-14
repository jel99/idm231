{

  // Start playing Pokémon music in background if user is browsing on desktop
  var isPaused;

  window.addEventListener('load', function() {bgMusic()}, false);
  window.addEventListener('resize', function() {bgMusic()}, false);

  var bg_music = document.getElementById('pokeMusic');
  function bgMusic() {
    var screen_width = window.innerWidth;

    if (screen_width > 1024 && !isPaused) {
      bg_music.loop = true;
      bg_music.volume = 0.5;
      bg_music.play();
      console.log('music playing');
     } else {
      bg_music.pause();
      console.log('music paused');
    }
  }

  // Allow user to mute and play the background music
  var music_button = document.getElementById('music-button');
  music_button.addEventListener('click', function() {PlayPause()}, false);

  function PlayPause() {  
    var which_state = music_button.getAttribute('src');

    if (which_state === 'images/music-on.svg') {
      bg_music.pause();
      isPaused = true; //To prevent music from playing again upon window resize
      music_button.setAttribute('src', 'images/music-off.svg')
      document.getElementById('music-text').innerHTML = 'Play Music';
      console.log('music paused');
    } else {
      bg_music.play();
      isPaused = false;
      music_button.setAttribute('src', 'images/music-on.svg')
      document.getElementById('music-text').innerHTML = 'Pause Music';
      console.log('music playing');
    }
  }

  // Check to see if the date entered is in the right format
  const pokeform = document.forms['pokeInfo'];
  pokeform.addEventListener('submit', checkDate, false);

  var feedback = document.getElementById('feedback');

  function checkDate(event) {
    console.log('checkdate called');
    event.preventDefault();

    var bday = document.getElementById('bday');

    const date = new Date(bday.value);
    console.log(date);

    // var date_test = bday.split("/");
    // console.log(date_test);

    // var whichMonth = date_test[0];
    // var whichDayOfMonth = date_test[1];
    // console.log(whichMonth + '/' + whichDayOfMonth);

    // var illegalDate;
    // if (whichMonth == 2 && whichDayOfMonth == 30) {
    //   illegalDate = true;
    //   console.log('illegalDate = true');
    // }
    // else if (whichMonth == 2 && whichDayOfMonth == 31)
    //   illegalDate = true;
    // else if (whichMonth == 4 && whichDayOfMonth == 31)
    //   illegalDate = true;
    // else if (whichMonth == 6 && whichDayOfMonth == 31)
    //   illegalDate = true;
    // else if (whichMonth == 9 && whichDayOfMonth == 31)
    //   illegalDate = true;
    // else if (whichMonth == 11 && whichDayOfMonth == 31)
    //   illegalDate = true;
    // else {
    //   illegalDate = false;

    //   const date = new Date(bday.value);
    //   console.log(date);
    // }

    // const whichMonth = date.getUTCMonth() + 1;
    // const whichDayOfMonth = date.getUTCDate();

    if  (isNaN(date)) {
      feedback.innerHTML = "Please enter a valid date in this format: \nMM/DD/YYYY";
      console.log('date error');
      bday.focus();
      bday.value = '';
      feedback.hidden = false;
    } else {
        feedback.hidden = true;
        console.log('no date error');
        getPokemon();

        bday.value = date;
    }
  }

  // Grabbing the Pokémon buttons
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

  // Get areas where zodiac phrase will output
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
  var oakRead = document.getElementById('oakRead');


// Determine the month entered by the user, find corresponding Pokémon to display.
var pokemon;
var name;
var phrase;

function getPokemon() {

  const bday = document.getElementById('bday');
  const date = new Date(bday.value);

  const whichMonth = date.getUTCMonth() + 1;
  const whichDayOfMonth = date.getUTCDate();


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

// Random phrase generator that outputs to the Dex Reading if the person entered a name.
function getPhrase(pokemonTemp) {
  name = getName();

  var pokemonFL = pokemonTemp.charAt(0).toUpperCase();
  var pokemonT = pokemonFL + pokemonTemp.slice(1);
  
  var phrases;
  if (pokemonT == "Arcanine"){
    phrases = [
      /* 0  */"Ah, " + name + ", looks like you are an " + pokemonT,
      /* 1  */"Hmm, seems like you are an " + pokemonT + ", " + name,
      /* 2  */"How interesting! " + name + ", it turns out you're an " + pokemonT,
      /* 3  */"Not bad, " + name + "! You are an " + pokemonT,
      /* 4  */"I'm not sure how you'll take this, " + name + ", but you're an " + pokemonT,
      /* 5  */"Now " + name + ", you'd better sit down for this: you're an " + pokemonT,
      /* 6  */"Well well well, if it isn't " + name + " masquerading as an " + pokemonT,
      /* 7  */"The results are in " + name + ": You are most similar to an " + pokemonT,
      /* 8  */name + ", I'm shocked! You are, in fact, an " + pokemonT,
      /* 9  */"Guess what, " + name + "? You're an " + pokemonT,
      /* 10 */"Yer an " + pokemonT + ", Harry!... I mean " + name,
      /* 11 */"I wish I could be an " + pokemonT + " just like you, " + name
    ];
  }
  else {
    phrases = [
      /* 0  */"Ah, " + name + ", looks like you are a " + pokemonT,
      /* 1  */"Hmm, seems like you are a " + pokemonT + ", " + name,
      /* 2  */"How interesting! " + name + ", it turns out you're a " + pokemonT,
      /* 3  */"Not bad, " + name + "! You are a " + pokemonT,
      /* 4  */"I'm not sure how you'll take this, " + name + ", but you're a " + pokemonT,
      /* 5  */"Now " + name + ", you'd better sit down for this: you're a " + pokemonT,
      /* 6  */"Well well well, if it isn't " + name + " masquerading as a " + pokemonT,
      /* 7  */"The results are in " + name + ": You are most similar to a " + pokemonT,
      /* 8  */name + ", I'm shocked! You are, in fact, a " + pokemonT,
      /* 9  */"Guess what, " + name + "? You're a " + pokemonT,
      /* 10 */"Yer a " + pokemonT + ", Harry!... I mean " + name,
      /* 11 */"I wish I could be a " + pokemonT + " just like you, " + name
    ];
  }

  var randBetween = Math.floor(Math.random()*12);
  console.log(randBetween);

  var chosenPhrase = phrases[randBetween];
  console.log(chosenPhrase);

  return chosenPhrase;
}


// Display the appropriate Pokédex entry for the user
function displayPokedex(pokemon) {

  name = getName();
  phrase = getPhrase(pokemon);

  switch (pokemon) {

    case 'charmeleon':
      console.log('Ran charmeleon');
      clearZodiac();

      if (name == "") {
        chaRead.textContent = "Like a Charmeleon, you are a confident person who won't stop until you've gotten what you want. One weakness of yours is that you're hot-headed and will scratch anyone who makes you mad with your razor-sharp claws.";
      } else {
        chaRead.textContent = phrase + ". Like a Charmeleon, you are a confident person who won't stop until you've gotten what you want. One weakness of yours is that you're hot-headed and will scratch anyone who makes you mad with your razor-sharp claws.";
      }

      showZodiac(pokemon);
      playSound('chaAud');

      break;

    case 'diglett':
      console.log('Ran diglett');
      clearZodiac();

      if (name == "") {
        digRead.textContent = "As a Diglett, you are reliable, practical, and responsible. You won't let another Diglett down, or let those pesky humans build a dam in your forest. However, being possesive is one of your weaknesses that you need to work on.";
      } else {
        digRead.textContent = phrase + ". As a Diglett, you are reliable, practical, and responsible. You won't let another Diglett down, or let those pesky humans build a dam in your forest. However, being possesive is one of your weaknesses that you need to work on.";
      }

      showZodiac(pokemon);
      playSound('digAud');
      break;

    case 'pidgey':
      console.log('Ran pidgey');
      clearZodiac();

      if (name == "") {
        pidRead.textContent = "Like a Pidgey, you are a gentle, affectionate person who doesn't like to get into fights if you don't have to. However, if danger approaches, you will kick up sand into your opponent's face to get away. Being nervous like this is one of your weaknesses.";
      } else {
        pidRead.textContent = phrase + ". Like a Pidgey, you are a gentle, affectionate person who doesn't like to get into fights if you don't have to. However, if danger approaches, you will kick up sand into your opponent's face to get away. Being nervous like this is one of your weaknesses.";
      }

      showZodiac(pokemon);
      playSound('pidAud');
      break;

    case 'lapras':
      console.log('Ran lapras');
      clearZodiac();

      if (name == "") {
        lapRead.textContent = "As a Lapras, you are a very loyal, emotional, and sympathetic person. You will ferry your friends to safety if they need it. However, you can be moody (possibly since you have been hunted to near extinction), and also insecure.";
      } else {
        lapRead.textContent = phrase + ". As a Lapras, you are a very loyal, emotional, and sympathetic person. You will ferry your friends to safety if they need it. However, you can be moody (possibly since you have been hunted to near extinction), and also insecure.";
      }

      showZodiac(pokemon);
      playSound('lapAud');
      break;

    case 'arcanine':
      console.log('Ran arcanine');
      clearZodiac();

      if (name == "") {
        arcRead.textContent = "Like an Arcanine, you enjoy being admired for your beauty and magnificence. However, sometimes this admiration can make you a bit arrogant and self-centered. But you also are very warm-hearted, generous, and cheerful, always looking on the bright side of life. You can cheer your friends up easily when they're down.";
      } else {
        arcRead.textContent = phrase + ". Like an Arcanine, you enjoy being admired for your beauty and magnificence. However, sometimes this admiration can make you a bit arrogant and self-centered. But you also are very warm-hearted, generous, and cheerful, always looking on the bright side of life. You can cheer your friends up easily when they're down.";
      }

      showZodiac(pokemon);
      playSound('arcAud');
      break;

    case 'sandshrew':
      console.log('Ran sandshrew');
      clearZodiac();

      if (name == "") {
        sanRead.textContent = "As a Sandshrew, you can adapt easily to whatever is thrown at you in life. You are very analytical in how you approach tasks, but can also be overly critical of yourself, possibly working too much and pushing people away because of it.";
      } else {
        sanRead.textContent = phrase + ". As a Sandshrew, you can adapt easily to whatever is thrown at you in life. You are very analytical in how you approach tasks, but can also be overly critical of yourself, possibly working too much and pushing people away because of it.";
      }

      showZodiac(pokemon);
      playSound('sanAud');
      break;

    case 'dodrio':
      console.log('Ran dodrio');
      clearZodiac();

      if (name == "") {
        dodRead.textContent = "Like a Dodrio, you are very good at cooperating within your own mind, and can execute detailed plans easily. Because of this, you are very diplomatic as well. At some times, however, you can be indecisive as to what to do in some situations.";
      } else {
        dodRead.textContent = phrase + ". Like a Dodrio, you are very good at cooperating within your own mind, and can execute detailed plans easily. Because of this, you are very diplomatic as well. At some times, however, you can be indecisive as to what to do in some situations.";
      }

      showZodiac(pokemon);
      playSound('dodAud');
      break;

    case 'staryu':
      console.log('Ran staryu');
      clearZodiac();

      if (name == "") {
        staRead.textContent = "As a Staryu, you are very resourceful and brave in a battle, being able to regenerate any part of yourself at will. However, not wanting anybody to figure out your one weak spot, you can be distrusting and secretive.";
      } else {
        staRead.textContent = phrase + ". As a Staryu, you are very resourceful and brave in a battle, being able to regenerate any part of yourself at will. However, not wanting anybody to figure out your one weak spot, you can be distrusting and secretive.";
      }

      showZodiac(pokemon);
      playSound('staAud');
      break;

    case 'rapidash':
      console.log('Ran rapidash');
      clearZodiac();

      if (name == "") {
        rapRead.textContent = "Like a Rapidash, you enjoy freedom, traveling fast, and being in the great outdoors. You really just love to run, and will chase after anything at top speed if you see that it's faster than you. However, because of being so speedy all the time, you can be really impatient when things get slow for you.";
      } else {
        rapRead.textContent = phrase + ". Like a Rapidash, you enjoy freedom, traveling fast, and being in the great outdoors. You really just love to run, and will chase after anything at top speed if you see that it's faster than you. However, because of being so speedy all the time, you can be really impatient when things get slow for you.";
      }

      showZodiac(pokemon);
      playSound('rapAud');
      break;

    case 'machoke':
      console.log('Ran machoke');
      clearZodiac();

      if (name == "") {
        macRead.textContent = "As a Machoke, you are responsible and disciplined, always going to the gym on time. You also enjoy helping friends move and will carry all their stuff for them. However, due to your disciplined nature, you can be somewhat condescending at times to others.";
      } else {
        macRead.textContent = phrase + ". As a Machoke, you are responsible and disciplined, always going to the gym on time. You also enjoy helping friends move and will carry all their stuff for them. However, due to your disciplined nature, you can be somewhat condescending at times to others.";
      }

      showZodiac(pokemon);
      playSound('macAud');
      break;

    case 'dragonite':
      console.log('Ran dragonite');
      clearZodiac();

      if (name == "") {
        draRead.textContent = "Like a Dragonite, you are very progressive in your ideologies, and are extremely independent. You do like to spend time with friends a lot, but can be uncompromising and temperamental at times.";
      } else {
        draRead.textContent = phrase + ". Like a Dragonite, you are very progressive in your ideologies, and are extremely independent. You do like to spend time with friends a lot, but can be uncompromising and temperamental at times.";
      }

      showZodiac(pokemon);
      playSound('draAud');
      break;

    case 'goldeen':
      console.log('Ran goldeen');
      clearZodiac();

      if (name == "") {
        golRead.textContent = "As a Goldeen, you really enjoy a good swim in your local river. To your friends, you are known as the Water Queen/King. You are also a very compassionate, gentle, and artistic person. However, you can sometimes be overly trusting of people, as well as too fearful of what lies ahead in the great river of life.";
      } else {
        golRead.textContent = phrase + ". As a Goldeen, you really enjoy a good swim in your local river. To your friends, you are known as the Water Queen/King. You are also a very compassionate, gentle, and artistic person. However, you can sometimes be overly trusting of people, as well as too fearful of what lies ahead in the great river of life.";
      }

      showZodiac(pokemon);
      playSound('golAud');
      break;

    case 'profoak':
      console.log('Ran prof oak help');
      clearZodiac();

      if (name == "") {
        oakRead.textContent = "Why hello there! Looks like you could use some help. Here's some instructions to get you started:";
      } else {
        oakRead.textContent = "Why hello there, " + name + "! Looks like you could use some help. Here's some instructions to get you started:";
      }

      showZodiac(pokemon);
      playSound('profAud');
      break;
  }
}


// Show the zodiac of the person's Pokématch
function showZodiac(pokemon) {
  document.getElementById(pokemon).setAttribute('class', 'dexEntry showZodiac');
  document.getElementById('inputForm').setAttribute('class', 'inputForm showZodiac');
}


// Remove the zodiac from the screen
function clearZodiac() {
  var dexEntries = document.getElementsByClassName('dexEntry');

  for (var i = 0; i < dexEntries.length; i ++) {
    dexEntries[i].setAttribute('class', 'dexEntry');
  }
}


// Show the name/date entry form again
function showForm() {
  document.getElementById('inputForm').setAttribute('class', 'inputForm');
}


// Get the person's first name for the phrase
function getName() {
  var fnameT = document.getElementById('fName').value;
      if (fname == "") { console.log('No name retrieved.'); }
      else { console.log('Name was retrieved.'); }

  var fletter = fnameT.charAt(0).toUpperCase();
  var fname = fletter + fnameT.slice(1);
  
  return fname;
}

// Play the Pokémon's cry when the zodiac is opened
function playSound(pokemon) {
  var cry = document.getElementById(pokemon);
  cry.volume = 0.4;
  cry.play();
}



// Could use event "load" to start background music playing
// Add listener for when page loads to then play background music
// window.addEventListener('load', [function], false)

}