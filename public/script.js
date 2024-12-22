const discography = [
  {
    name: "Doo Wops & Hooligans",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/DooWops.jpg?v=1734779476447",
    color: '#fbf0c4',
    textColor: '#291b17'
  },
  {
    name: "It Will Rain",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/ItWillRain.jpg?v=1734829854447",
    color: '#c4bcaf',
    textColor: '#291b17'
  },
  {
    name: "Unorthodox Jukebox",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/UnorthoJuke.jpg?v=1734779496578",
    color: '#d9ceb9',
    textColor: '#921f22'
  },
  {
    name: "24k Magic",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/24kMagic.jpg?v=1734779468894",
    color: '#ba282a',
    textColor: '#f1ede9'
  },
  {
    name: "Wake Up In The Sky",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/WakeUpSky.jpg?v=1734829845944",
    color: '#0a0605',
    textColor: '#f1ede9'
  },
  {
    name: "Please Me",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/PleaseMe.png?v=1734829836651",
    color: '#2f2355',
    textColor: '#f1ede9'
  },
  {
    name: "Blow",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/Blow.jpg?v=1734829799060",
    color: '#fafafa',
    textColor: '#291b17'
  },
  {
    name: "An Evening With Silk Sonic",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/SilkSonic.png?v=1734779491655",
    color: '#cd9b64',
    textColor: '#6d4238'
  },
  {
    name: "Die With A Smile",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/DieSmile.jpg?v=1734829826264",
    color: '#2f88b5',
    textColor: '#f1ede9'
  },
  {
    name: "APT",
    image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/Apt.jpg?v=1734829795018",
    color: '#f2688c',
    textColor: '#291b17'
  }
];

function changeColor(color) {
  document.body.style.backgroundColor = color;
}

function returnDisco(){
var imgElement1 = document.getElementById('discoBack');
var imgElement2 = document.getElementById('discoPrimary');
var imgElement3 = document.getElementById('discoGo');
  
for (let i = 0; i<discography.length; i++) { 
     if (discography[i].image == imgElement2.src) {
      imgElement1.src = discography[(i + 2) % discography.length].image;
      imgElement2.src = discography[(i + 1) % discography.length].image;
      imgElement3.src = discography[i].image;
       
      changeColor(discography.colordiscography[(i + 1) % discography.length]);
      break;
     }
  }
}

function goDisco(){
var imgElement1 = document.getElementById('discoBack');
var imgElement2 = document.getElementById('discoPrimary');
var imgElement3 = document.getElementById('discoGo');
  
for (let i = 0; i<discography.length; i++) { 
     if (discography[i].image == imgElement2.src) {
       
      imgElement1.src = discography[i].image;
      imgElement2.src = discography[(i - 1 + discography.length) % discography.length].image;
      imgElement3.src = discography[(i - 2 + discography.length) % discography.length].image;
       
       changeColor(discography[(i - 1 + discography.length) % discography.length].color);
      break;
     }
  }
}