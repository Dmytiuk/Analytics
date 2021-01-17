var ctx = document.getElementById('Chart6').getContext('2d');
var myChart6 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['54-55', '45-54', '35-44', '21-87', '32-23', '90-21'],
        datasets: [{
            label: '# of Votes',
            data: [5, 2, 17, 8, 12, 7],
            fill: false,
            backgroundColor: [
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1))',
                'rgba(239, 42, 130, 1)'
            ],
            borderColor: [
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1))',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1))'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
      },
        scales: {
            yAxes: [{
              display: false,
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
          }],
          xAxes: [{
            display: false,
              gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
          }]
        }
    }
});
var ctx = document.getElementById('Chart2').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['54-55', '45-54', '35-44', '21-87', '32-23', '90-21'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 8, 2, 7],
            backgroundColor: [
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1))',
                'rgba(239, 42, 130, 1)'
            ],
            borderColor: [
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1))',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1))'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
          yAxes: [{
            display: false,
              ticks: {
                  beginAtZero: true
              },
              gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
        }],
        xAxes: [{
            display: false,
            gridLines: {
            color: "rgba(0, 0, 0, 0)",
        }
        }]
      }
    }
});


var ctx = document.getElementById('Chart1').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['54-55', '45-54', '35-44', '21-87', '32-23', '90-21'],
        datasets: [{
            label: '# of Votes',
            data: [5, 2, 20, 14, 8, 15],
                fill: false,
            backgroundColor: [
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1))',
                'rgba(239, 42, 130, 1)'
            ],
            borderColor: [
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1))',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1))'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
      },
        scales: {
            yAxes: [{
              display: false,
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
          }],
          xAxes: [{
            display: false,
              gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
          }]
        }
    }
});
var ctx = document.getElementById('Chart5').getContext('2d');
var myChart5 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['54-55', '45-54', '35-44', '21-87', '32-23', '90-21'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 8, 2, 7],
                fill: false,
            backgroundColor: [
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1))',
                'rgba(239, 42, 130, 1)'
            ],
            borderColor: [
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1))',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1))'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
      },
        scales: {
            yAxes: [{
              display: false,
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
          }],
          xAxes: [{
            display: false,
              gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
          }]
        }
    }
});
var ctx = document.getElementById('Chart7').getContext('2d');
var myChart7 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['54-55', '45-54', '35-44', '21-87', '32-23', '90-21'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 8, 2, 7],
            backgroundColor: [
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1))',
                'rgba(239, 42, 130, 1)'
            ],
            borderColor: [
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1))',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1))'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
      },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
          }],
          xAxes: [{
            display: false,
              gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
          }]
        }
    }
});

var ctx = document.getElementById('Chart8').getContext('2d');
var myChart8 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['54-55', '45-54', '35-44', '21-87', '32-23', '90-21'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 8, 2, 7],
                fill: false,
            backgroundColor: [
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1))',
                'rgba(239, 42, 130, 1)'
            ],
            borderColor: [
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1))',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1))'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
      },
        scales: {
            yAxes: [{
              display: false,
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
          }],
          xAxes: [{
            display: false,
              gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
          }]
        }
    }
});
var ctx = document.getElementById('Chart9').getContext('2d');
var myChart9 = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['54-55', '45-54', '35-44', '21-87', '32-23', '90-21'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 8, 2, 7],
                fill: false,
            backgroundColor: [
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1))',
                'rgba(239, 42, 130, 1)'
            ],
            borderColor: [
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1)',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1))',
                'rgba(0, 136, 240, 1)',
                'rgba(239, 42, 130, 1))'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
      },
        scales: {
            yAxes: [{
              display: false,
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
          }],
          xAxes: [{
            display: false,
              gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
          }]
        }
    }
});
var marksCanvas = document.getElementById("Chart3");

var marksData = {
  labels: ["65", "75", "70", "80", "60", "80"],
  datasets: [{
    label: "Data1",
    backgroundColor: "rgba(0, 136, 240, 1)",
    data: [65, 75, 70, 80, 60, 80],
    fill: false,
    borderColor: "rgba(0, 136, 240, .6)",
    borderWidth: "1.5"
  }, {
    label: "Data2",
    backgroundColor: "rgba(239, 42, 130, 1)",
    data: [54, 65, 60, 70, 70, 75],
    fill: false,
    borderColor: "rgba(239, 42, 130, .6)",
    borderWidth: "1.5"
  }]
};

var radarChart = new Chart(marksCanvas, {
  type: 'radar',
  data: marksData,
  options: {
  legend: {
    display: false
  },
}
});
var marksCanvas = document.getElementById("Chart4");

var marksData = {
  labels: ["65", "75", "70", "80", "60", "80"],
  datasets: [{
    label: "Data1",
    backgroundColor: "rgba(0, 136, 240, 1)",
    data: [65, 75, 70, 80, 60, 80],
    fill: false,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: "3"
  }, {
    label: "Data2",
    backgroundColor: "rgba(239, 42, 130, 1)",
    data: [54, 70, 70, 75],
    fill: false,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: "3"
  }, {
    label: "Data3",
    backgroundColor: "rgba(23, 39, 85, 1)",
    data: [10, 15, 110, 75],
    fill: false,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: "3"
  }
    ]
};

var radarChart = new Chart(marksCanvas, {
  type: 'doughnut',
  data: marksData,
  options: {
  legend: {
    display: false
  },
}
});
var marksCanvas = document.getElementById("Chart10");

var marksData = {
  labels: ["65", "75", "70", "80", "60", "80"],
  datasets: [{
    label: "Data1",
    backgroundColor: "rgba(0, 136, 240, 1)",
    data: [65, 75, 70, 80, 60, 80],
    fill: false,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: "3"
  }, {
    label: "Data2",
    backgroundColor: "rgba(239, 42, 130, 1)",
    data: [54, 70, 70, 75],
    fill: false,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: "3"
  }, {
    label: "Data3",
    backgroundColor: "rgba(23, 39, 85, 1)",
    data: [10, 15, 110, 75],
    fill: false,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: "3"
  }
    ]
};

var radarChart = new Chart(marksCanvas, {
  type: 'doughnut',
  data: marksData,
  options: {
  legend: {
    display: false
  },
}
});
