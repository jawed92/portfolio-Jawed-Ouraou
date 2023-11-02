// ANIMATION TEXT BANNER	
let title = document.getElementById("text-banner");
let i = 0;
let dataText = ["Bonjour !" ,"Je suis Jawed Ouraou" ,"développeur front-end"];

function typeWriter(currentText, line , j, finish) {

 if (j < currentText.length) {
   line.innerHTML += currentText[j];
 
   // wait for a while and call this function again for next character
   setTimeout(function() {
     typeWriter(currentText, line , j + 1)
     }, 40);
   }
 if(j == currentText.length) {
   let lineText = document.getElementsByClassName("h1-content")[i];
   lineText.classList.add("no-after");
   i ++;
   setTimeout(function() {
     StartTextAnimation(i)
   }, 100);
   
 }
}
 
function StartTextAnimation(i) {

 if(i < dataText.length) {
   let line = document.createElement("h1");
   line.classList.add('h1-content');
   title.appendChild(line);
   let currentText = dataText[i];
   let j = 0;
   typeWriter(currentText ,line, j)
 }
}	

StartTextAnimation(i);

