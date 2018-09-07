const shareFeelings = document.querySelector('#enter-mood-picker');
const firstSmileyFace = document.querySelector('#first-mood-smiley');
const secondSmileyFace = document.querySelector('#second-mood-smiley');
const thirdSmileyFace = document.querySelector('#third-mood-smiley');
const fourthSmileyFace = document.querySelector('#fourth-mood-smiley');
const fifthSmileyFace = document.querySelector('#fifth-mood-smiley');
const moodLeadText = document.querySelector('#mood-lead');
const userMoodContainer = document.querySelector('#user-mood-container');
const userMoodSpan = document.querySelector('#user-mood');

function enterFeelings(e) {
  e.preventDefault();
  moodLeadText.classList.remove('fadeInUp');
  moodLeadText.classList.add('animated', 'fadeOutRight');
  shareFeelings.classList.add('hide');
  setInterval(() => {
    smilies.forEach(function(item){
      item.classList.remove('hide'), item.classList.add('fadeInLeft')
    });
    moodLeadText.classList.add('hide');
    userMoodContainer.classList.remove('hide');
  }, 1000)
};

const userMood = [];
let userMedianMood = 0;
const smilies = [firstSmileyFace, secondSmileyFace, thirdSmileyFace, fourthSmileyFace, fifthSmileyFace];

const moodRating = {
  happy: 5,
  glad: 5,
  content: 3,
  sad: 2,
  depressed: 1
};

function moodHappy() {
  userMood.push(moodRating.happy);
}
function moodGlad() {
  userMood.push(moodRating.glad);
}
function moodContent() {
  userMood.push(moodRating.content);
}
function moodSad() {
  userMood.push(moodRating.sad);
}
function moodDepressed() {
  userMood.push(moodRating.depressed);
}

function userMedianMoodCalc() {
  if(userMood.length >= 0) {
    userMedianMood = userMood.reduce(
      ( accumulator, currentValue ) => accumulator + currentValue,
      0 
    ) / userMood.length;
  }
  userMoodSpan.innerHTML = userMedianMood.toFixed(1);
}

shareFeelings.addEventListener('click', enterFeelings)

firstSmileyFace.addEventListener('click', function(){
  moodHappy();
  userMedianMoodCalc();
});
secondSmileyFace.addEventListener('click', function(){
  moodGlad();
  userMedianMoodCalc();
});
thirdSmileyFace.addEventListener('click', function(){
  moodContent();
  userMedianMoodCalc();
});
fourthSmileyFace.addEventListener('click', function(){
  moodSad();
  userMedianMoodCalc();
});
fifthSmileyFace.addEventListener('click', function(){
  moodDepressed();
  userMedianMoodCalc();
});