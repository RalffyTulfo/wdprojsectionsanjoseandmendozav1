const disco10 = {
  Name: "APT",
  image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/Apt.jpg?v=1734829795018",
  color: "#f2688c",
  textColor: "#291b17"
}
const disco9 = {
  Name: "Die With A Smile",
  image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/DieSmile.jpg?v=1734829826264",
  color: "#2f88b5",
  textColor: "#f1ede9"
}
const disco8 = {
  Name: "An Evening With Silk Sonic",
  image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/SilkSonic.png?v=1734779491655",
  color: "#cd9b64",
  textColor: "#6d4238"
}
const disco7 = {
  Name: "Blow",
  image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/Blow.jpg?v=1734829799060",
  color: "#fafafa",
  textColor: "#291b17"
}
const disco6 = {
  Name: "Please Me",
  image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/PleaseMe.png?v=1734829836651",
  color: "#2f2355",
  textColor: "#f1ede9"
}
const disco5 = {
  Name: "Wake Up In The Sky",
  image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/WakeUpSky.jpg?v=1734829845944",
  color: "#0a0605",
  textColor: "#f1ede9"
}
const disco4 = {
  name: "24k Magic",
  image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/24kMagic.jpg?v=1734779468894",
  color: "#ba282a",
  textColor: "#f1ede9"
}
const disco3 = {
  name: "Unorthodox Jukebox",
  image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/UnorthoJuke.jpg?v=1734779496578",
  color: "#d9ceb9",
  textColor: "#921f22"
}
const disco2 = {
  name: "It Will Rain",
  image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/ItWillRain.jpg?v=1734829854447",
  color: "#c4bcaf",
  textColor: "#291b17"
}
const disco1 = {
  name: "Doo Wops & Hooligans",
  image: "https://cdn.glitch.global/28cd22da-8213-4d82-b974-08837fa87097/DooWops.jpg?v=1734779476447",
  color: "#fbf0c4",
  textColor: "#291b17"
}

function changeColor(color) {
  document.body.style.backgroundColor = color;
}

function returnDisco(){
var imgElement = document.getElementById('discoPrimary');
imgElement.src = (imgElement.src === img1)? img2 : img1;
}