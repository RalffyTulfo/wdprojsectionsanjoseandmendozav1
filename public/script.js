const discography = [
  {
    name: "Doo Wops & Hooligans",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/DooWops.jpg?v=1734779476447",
    color: '#fbf0c4',
    textColor: '#291b17',
    date: 2010,
    streams: 245,
    songs: [
      "Just the Way You Are",
      "Grenade",
      "The Lazy Song",
      "Marry You",
      "Count on Me",
      "Talking to the Moon",
      "Runaway Baby",
      "Liquor Store Blues (feat. Damian Marley)",
      "The Other Side (feat. CeeLo Green and B.o.B)",
      "Our First Time"
    ]
  },
  {
    name: "It Will Rain",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/ItWillRain.jpg?v=1734829854447",
    color: '#c4bcaf',
    textColor: '#291b17',
    date: 2011,
    streams: 105,
    songs: [
      "It Will Rain"
    ]
  },
  {
    name: "Unorthodox Jukebox",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/UnorthoJuke.jpg?v=1734779496578",
    color: '#d9ceb9',
    textColor: '#921f22',
    date: 2012,
    streams: 242,
    songs: [
      "Locked Out of Heaven",
      "Treasure",
      "When I Was Your Man",
      "Gorilla",
      "If I Knew",
      "Moonshine",
      "Natalie",
      "Show Me",
      "Money Make Her Smile",
      "Young Girls"
    ]
  },
  {
    name: "24k Magic",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/24kMagic.jpg?v=1734779468894",
    color: '#ba282a',
    textColor: '#f1ede9',
    date: 2016,
    streams: 239,
    songs: [
      "24K Magic",
      "That's What I Like",
      "Finesse",
      "Versace on the Floor",
      "Chunky",
      "Perm",
      "Straight Up & Down",
      "Too Good to Say Goodbye",
      "Calling All My Lovelies"
    ]
  },
  {
    name: "Wake Up In The Sky",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/WakeUpSky.jpg?v=1734829845944",
    color: '#0a0605',
    textColor: '#f1ede9',
    date: 2018,
    streams: 109,
    songs: [
      "Wake Up in the Sky"
    ]
  },
  {
    name: "Please Me",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/PleaseMe.png?v=1734829836651",
    color: '#2f2355',
    textColor: '#f1ede9',
    date: 2019,
    streams: 61,
    songs: [
      "Please Me"
    ]
  },
  {
    name: "Blow",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/Blow.jpg?v=1734829799060",
    color: '#fafafa',
    textColor: '#291b17',
    date: 2020,
    streams: 17,
    songs: [
      "Blow"
    ]
  },
  {
    name: "An Evening With Silk Sonic",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/SilkSonic.png?v=1734779491655",
    color: '#cd9b64',
    textColor: '#6d4238',
    date: 2021,
    streams: 143,
    songs: [
      "Leave the Door Open",
      "Fly as Me",
      "After Last Night (with Thundercat and Bootsy Collins)",
      "Smokin Out the Window",
      "Put On a Smile",
      "Skate",
      "777",
      "Blast Off"
    ]
  },
  {
    name: "Die With A Smile",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/DieSmile.jpg?v=1734829826264",
    color: '#2f88b5',
    textColor: '#f1ede9',
    date: 2023,
    streams: 131,
    songs: [
      "Die with a Smile"
    ]
  },
  {
    name: "APT",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/Apt.jpg?v=1734829795018",
    color: '#f2688c',
    textColor: '#291b17',
    date: 2024,
    streams: 69,
    songs: [
      "APT"
    ]
  },
  {
    name: "blank",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/blank.png?v=1734876746288",
    color: '#291b17',
    textColor: '#f1ede9',
    songs: [
      "Click on the Covers to keep going"
    ]
  }
];

function changeColor(color) {
  document.body.style.backgroundColor = color;
}

function changeTextColor(color) {
  document.getElementById("discoTitle").style.color = color;
  document.getElementById("discoCopyright").style.color = color;
  document.body.style.color = color;
}
function showDiscoSongs(songs) {
  var shownList = "";
  for (let j = 0; j < songs.length; j++){
    shownList = shownList + songs[j] + "<br>"}
  
  document.getElementById("songList").innerHTML = "<p class=" + "shownList" + ">" + shownList + "</p>";
}

function returnDisco() {
  var imgElement1 = document.getElementById('discoBack');
  var imgElement2 = document.getElementById('discoPrimary');
  var imgElement3 = document.getElementById('discoGo');
  
  for (let i = 0; i < discography.length; i++) { 
    if (discography[i].image == imgElement2.src) {
      imgElement1.src = discography[(i + 2) % discography.length].image;
      imgElement2.src = discography[(i + 1) % discography.length].image;
      imgElement3.src = discography[i].image;

      // Change both background and text color based on the next album
      showDiscoSongs(discography[(i + 1) % discography.length].songs);
      changeColor(discography[(i + 1) % discography.length].color);
      changeTextColor(discography[(i + 1) % discography.length].textColor);
      break;
    }
  }
}

function goDisco() {
  var imgElement1 = document.getElementById('discoBack');
  var imgElement2 = document.getElementById('discoPrimary');
  var imgElement3 = document.getElementById('discoGo');
  
  for (let i = 0; i < discography.length; i++) { 
    if (discography[i].image == imgElement2.src) {
      imgElement1.src = discography[i].image;
      imgElement2.src = discography[(i - 1 + discography.length) % discography.length].image;
      imgElement3.src = discography[(i - 2 + discography.length) % discography.length].image;

      // Change both background and text color based on the previous album
      showDiscoSongs(discography[(i - 1 + discography.length) % discography.length].songs)
      changeColor(discography[(i - 1 + discography.length) % discography.length].color);
      changeTextColor(discography[(i - 1 + discography.length) % discography.length].textColor);
      break;
    }
  }
}

const albumContainer = document.getElementById("albumContainer");

// Display albums
function displayAlbums(sortedAlbums) {
  albumContainer.innerHTML = ""; // Clears display

  // Go through each album and append
  for (var i = 0; i < sortedAlbums.length; i++) {
    var album = sortedAlbums[i];
    var div = document.createElement("div"); // Create a new <div> element
    div.style.margin = "10px 0"; // Margin for spacing

    // Set the text content
    div.textContent = album.name + " (" + album.date + ") - " + album.streams + "M streams";

    // Append to the albumContainer
    albumContainer.appendChild(div);
  }
}

// Show all albums initially
displayAlbums(discography);

// Conditional function based on dropdown
function handleSort(option) {
  if (option === 'date-asc') {
    sortAlbums('asc');
  } else if (option === 'date-desc') {
    sortAlbums('desc');
  } else if (option === 'stream-asc') {
    sortStreams('asc');
  } else if (option === 'stream-desc') {
    sortStreams('desc');
  }
}

// Function to sort albums (date)
function sortAlbums(order) {
  const sortedAlbums = [...discography].sort((a, b) => {
    return order === 'asc' ? a.date - b.date : b.date - a.date;
  });
  displayAlbums(sortedAlbums);
}

// Function to sort albums (streams)
function sortStreams(order) {
  const sortedStreams = [...discography].sort((a, b) => {
    return order === 'asc' ? a.streams - b.streams : b.streams - a.streams;
  });
  displayAlbums(sortedStreams);
}