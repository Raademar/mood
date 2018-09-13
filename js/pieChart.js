
import Chart from 'chart.js';

const data = JSON.parse(localStorage.getItem('userentry'));
let ctx = document.getElementById("pieChart");

let moodArray = [];
let dateArray = [];
let noteArray = [];

data.forEach(function(item){
  moodArray.push(item.usermood);
  dateArray.push(item.date);
  noteArray.push(item.note);
});

// FIX THIS SO THE PIE CHART DISPLAYS PROPERLY THE SUM OF ALL THE ENTERED MOODS FROM EACH TYPE OF MOOD.
// const moods = moodArray;
// for(mood in moods){
//   let sumMood = moods.filter(x => x === mood).length;
//   console.log(sumMood);
// };

let pieChart = new Chart(ctx, {
  type: 'pie',
  data: {
      labels: ['Great', 'Good', 'Okey', 'Sad', 'Depressed'],
      datasets: [{
          label: [],
          data: moodArray,
          backgroundColor: [
            'rgba(6, 146, 6, 1)', 
            'rgba(100, 255, 100, 1)', 
            'rgba(255, 255, 0, 1)', 
            'rgba(255, 135, 15, 1)', 
            'rgba(225, 11, 11, 1)',
          ],
          borderColor: 'white', 
          borderWidth: 5,
      }]
  },
  options: {
      title: {
        display: true,
        text: 'Pie Chart'
      },
      hover: {
        mode: 'index'
      },
      scales: {
      },
      elements: {
        line: {
            tension: 0, // disables bezier curves
        }
    }
  }
});

export function pieChart(){};
