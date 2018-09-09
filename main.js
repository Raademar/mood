const $smileys = document.querySelectorAll('.smiley');
const feelingsTextArea = document.querySelector('#text-area-feelings')
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
    feelingsTextArea.classList.remove('hide');
    feelingsTextArea.classList.add('fadeInLeft');
    moodLeadText.classList.add('hide');
    userMoodContainer.classList.remove('hide');
  }, 1000)
};

shareFeelings.addEventListener('click', enterFeelings)

function setLocalStorage(){
  localStorage.setItem('Todays Mood:', JSON.stringify(userMood));
  localStorage.setItem('Median Mood:', JSON.stringify(userMoodSpan.innerHTML));
};

let userMood = [];

const userMedianMood = arr => arr.reduce((a,b) => a + b, 0) / userMood.length;

[...$smileys].forEach($smiley => $smiley.addEventListener('click', function(){
  userMood.push($smiley.dataset.mood);
  userMood = userMood.map(Number);
  userMoodSpan.innerHTML = userMedianMood(userMood).toFixed(1);
  setLocalStorage();
}));