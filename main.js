const $smileys = document.querySelectorAll('.smiley');
const shareFeelings = document.querySelector('#enter-mood-picker');
const moodLeadText = document.querySelector('#mood-lead');
const userMoodContainer = document.querySelector('#user-mood-container');
const userMoodSpan = document.querySelector('#user-mood');

function enterFeelings(e) {
  e.preventDefault();
  moodLeadText.classList.remove('fadeInUp');
  moodLeadText.classList.add('animated', 'fadeOutRight');
  shareFeelings.classList.add('hide');
  setInterval(() => {
    $smileys.forEach(function(item){
      item.classList.remove('hide'), item.classList.add('fadeInLeft')
    });
    moodLeadText.classList.add('hide');
    userMoodContainer.classList.remove('hide');
  }, 1000)
};

shareFeelings.addEventListener('click', enterFeelings)

let userMood = [];

const userMedianMood = arr => arr.reduce((a,b) => a + b, 0) / userMood.length;

[...$smileys].forEach($smiley => $smiley.addEventListener('click', function(){
  userMood.push($smiley.dataset.mood);
  userMood = userMood.map(Number);
  userMoodSpan.innerHTML = userMedianMood(userMood).toFixed(1);
}));