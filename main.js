const shareFeelings = document.querySelector('#enter-mood-picker');
const firstSmileyFace = document.querySelector('#first-mood-smiley');
const moodLeadText = document.querySelector('#mood-lead');

let userMood = 0;

const moodRating = {
  happy: 5,
  glad: 4,
  content: 3,
  sad: 2,
  depressed: 1
};

function enterFeelings(e) {
  e.preventDefault();
  moodLeadText.classList.remove('fadeInUp');
  moodLeadText.classList.add('animated', 'fadeOutRight');
  shareFeelings.classList.add('hide');
  setInterval(() => {
    moodLeadText.classList.add('hide');
    firstSmileyFace.classList.remove('hide');
    firstSmileyFace.classList.add('fadeInLeft');
  }, 1000)
};

function moodGlad() {
  userMood += moodRating.glad;
  console.log(userMood);
}

shareFeelings.addEventListener('click', enterFeelings)

firstSmileyFace.addEventListener('click', moodGlad)