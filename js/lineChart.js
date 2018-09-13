
import Chart from 'chart.js';

const data = JSON.parse(localStorage.getItem('userentry'));
let ctx = document.getElementById("lineChart");

let moodArray = [];
let dateArray = [];
let noteArray = [];

data.forEach(function(item){
  moodArray.push(item.usermood);
  dateArray.push(item.date);
  noteArray.push(item.note);
});

let myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: dateArray,
      datasets: [{
          label: [],
          data: moodArray,
          backgroundColor: 'rgba(255, 99, 132, 0.8)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1
      }]
  },
  options: {
      title: {
        display: true,
        text: 'Line Chart'
      },
      legend: {
          labels: {
              fontColor: '#000'
          }
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              },
          }],
      },
      elements: {
        line: {
            tension: 0, // disables bezier curves
        }
    }
  }
});

export function myChart(){};
