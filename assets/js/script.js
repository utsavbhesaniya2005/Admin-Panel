var options = {
  series: [
    {
      data: [54, 63, 60, 65, 60, 68, 60]
    },
  ],
  chart: {
    height: 270,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#922c88'],
  // dataLabels: {
  //   enabled: true,
  // },
  stroke: {
    curve: 'smooth'
  },
  // grid: {
  //   borderColor: '#e7e7e7',
  //   row: {
  //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
  //     opacity: 0.5
  //   },
  // },
  markers: {
    size: 6,
    colors: '#922c88',
    strokeColors: '#922c88',
    strokeWidth: 2,
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisTicks: {
      show: false,
    },
    tickPlacement: 'between',
  },
  yaxis: {
    min: 50,
    max: 70,
    stepSize: 5,
  },
  legend: {
    show: false
  }
};

var chart = new ApexCharts(document.querySelector("#salesChart"), options);
chart.render();


// Product Chart
var options = {
  series: [15, 25, 20],
  chart: {
    height: 310,
    type: 'donut',
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    fillSeriesColor: false,
  },
  labels: ["Cakes", "Cupcakes", "Desserts"],
  colors: ['#E9D3E5', '#CDD2E7', '#E3CAE0'],
  stroke: {
    show: true,
    colors: ['#98128c', '#4556ac', '#98128c'],
    width: 2,
  },
  legend: {
    show: true,
    position: 'bottom',
    fontSize: '15px',
    fontWeight: 300,
    fontFamily: 'Nunito, sans-sarif',
    labels: {
      colors: '#3a3a3a',
    },
    markers: {
      width: 20,
      height: 20,
      strokeWidth: 1,
      strokeColor: ['#98128c', '#4556ac', '#98128c'],
      radius: 18,
    },
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        height: 200,  
      },
    },
  }]
};

var chart = new ApexCharts(document.querySelector("#productCategory"), options);
chart.render();