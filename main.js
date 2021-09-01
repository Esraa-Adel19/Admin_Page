//Start Setting Box

//Toggle-Spin-Class On Icon//
document.querySelector(".toggle-settings .fa-bars").onclick = function () {

//Toggle Class For Open//
document.querySelector(".settings-box").classList.toggle("open");  

};
//End Setting Box


new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct'],
      datasets: [{ 
          data: [86,114,106,106,107,111,133,221,783,2478],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [282,350,411,502,635,809,947,1402,3700,5267],
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: [168,170,178,190,203,276,408,547,675,734],
          label: "Europe",
          borderColor: "#3cba9f",
          fill: false
        }, { 
          data: [40,20,10,16,24,38,74,167,508,784],
          label: "Latin America",
          borderColor: "#e8c3b9",
          fill: false
        }, { 
          data: [6,3,2,2,7,26,82,172,312,433],
          label: "North America",
          borderColor: "#c45850",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Sales: 1 Jan,2014 - 30 Oct,2014'
      }
    }
  });

//SparkBar Chart "sparkbar must be ID in HTML"
/* 
  anychart.onDocumentReady(function () {
    var stage = anychart.graphics.create("sparkbar");
    // create charts
    chart1 = anychart.sparkline();
    
    // create data for both charts
    chart1.data([500,-100,340,200,-90,80,-70]);
  
    // set charts dimensions and postition
    chart1.bounds(0, 0, 300, 40);
    chart1.seriesType("win-loss");
  
    // set container id for the charts
    chart1.container(stage);
    // initiate chart drawing
    chart1.draw(); 
  });
*/

new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["IE", "Chrome", "FireFox", "Safari", "Opera"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }
    ]
  },
  options: {
    title: {
      display: true,
    }
  }
});