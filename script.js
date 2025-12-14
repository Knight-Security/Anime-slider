const pictures = Array.from(document.getElementsByClassName("pic"));
const backwardButton = document.getElementById("backward");
const forwardButton = document.getElementById("forward");
const animeName=document.getElementById("text");
// all anime names
const Name=["The Misfit of Demon King Academy","Demon Slayer","Jujutsu Kaisen","Lord of Mysteries","One Punch Man","Mashle: Magic and Muscles","Fullmetal Alchemist","How a Realist Hero Rebuilt the Kingdom"];
// all anime summary
const animeSummary=[];
// all anime rating 
const animeRating=[];
// all anime No of Episodes
const animeEpisodes=[];
let counter = 0;
pictures.forEach((picture, index) => {
  picture.style.left = `${index * 100}%`;
});


const slideImage = () => {
  pictures.forEach((picture) => {
    picture.style.transform = `translateX(-${counter * 100}%)`;
  });
};

forwardButton.addEventListener("click", () => {
  counter++;
  animeName.innerText=Name[counter];
  if (counter >= pictures.length) {
    counter = 0;
    animeName.innerText=Name[counter];
  }
  
  slideImage();
});
backwardButton.addEventListener("click", () => {
  counter--;
  animeName.innerText=Name[counter];
  if (counter < 0) {
    counter = pictures.length - 1;
    animeName.innerText=Name[counter];
  }
  slideImage();
});