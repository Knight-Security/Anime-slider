const pictures = Array.from(document.getElementsByClassName("pic"));
const backwardButton = document.getElementById("backward");
const forwardButton = document.getElementById("forward");
// all anime names
const animeName=[];
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
  if (counter >= pictures.length) {
    counter = 0;
  }
  slideImage();
});
backwardButton.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    
    counter = pictures.length - 1;
  }
  slideImage();
});