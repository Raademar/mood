const $smileys = document.querySelectorAll('.smiley');
const feelingsTextArea = document.querySelector('#text-area-feelings')
const shareFeelings = document.querySelector('#enter-mood-picker');
const moodLeadText = document.querySelector('#mood-lead');
const userMoodContainer = document.querySelector('#user-mood-container');
const userMoodSpan = document.querySelector('#user-mood');
const moodNoteTextarea = document.querySelector('#mood-note');
const submitFeeligns = document.querySelector('#submit-feelings');

function enterFeelings(e) {
  e.preventDefault();
  setInterval(() => {
    $smileys.forEach(function(item){
      item.classList.remove('hide'), item.classList.add('fadeInLeft')
    });
    feelingsTextArea.classList.remove('hide');
    feelingsTextArea.classList.add('fadeInLeft');
    userMoodContainer.classList.remove('hide');
  }, 200)
};

function setLocalStorage(userMoodEntry, userMoodNote){
  localStorage.setItem('Date', JSON.stringify(curDate));
  localStorage.setItem('User Mood', userMoodEntry);
  localStorage.setItem('Note', userMoodNote);
};

const curDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');

let pickedMood = 0;
let moodNote = '';
let userMood = [];

const userMedianMood = arr => arr.reduce((a,b) => a + b, 0) / userMood.length;

shareFeelings.addEventListener('click', enterFeelings);


[...$smileys].forEach($smiley => $smiley.addEventListener('click', function(){
  event.target.classList.toggle('pickedMood');
  pickedMood = parseInt($smiley.dataset.mood)
}));


submitFeeligns.addEventListener('click', function(){
  moodNote = JSON.stringify(moodNoteTextarea.value);
  setLocalStorage(pickedMood, moodNote);
  toggleModal();
  toggleSuccessMessage();
  setTimeout(() => {
    toggleSuccessMessage();
  }, 3000)
});

const modal = document.querySelector('.modal');
const trigger = document.querySelector('.trigger');
const closeButton = document.querySelector('.close-button');
const successModal = document.querySelector('.success-modal');

function toggleModal(){
  modal.classList.toggle('show-modal');
}

function toggleSuccessMessage(){
  successModal.classList.toggle('show-modal-success');
}

function windowOnClick(event) {
  if(event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);