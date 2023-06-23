// Total Spent Default

export const lineChartDataCosts = [
  {
    name: "Total Payed",
    data: [1833, 3666, 5499, 7332, 9165, 10998, 12831, 14664, 16497, 18330, 20163, 21996, 23829, 25662, 27495, 29328, 31161, 32994, 34827, 36660, 38493, 40326, 42159, 43992],
  },
  {
    name: "Remaining Balance",
    data: [41833, 39666, 37500, 35333, 33166, 31000, 28833, 26666, 24500, 22333, 20166, 18000, 15833, 13666, 11500, 9333, 7166, 5000, 2833, 666, 0, 0, 0, 0],
  },
  {
    name: "Interest Earned",
    data: [167, 333, 500, 667, 833, 1000, 1167, 1333, 1500, 1667, 1833, 2000, 2167, 2333, 2500, 2667, 2833, 3000, 3167, 3333, 3500, 3667, 3833, 4000],
  },
];


export const lineChartOptionsCosts = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#4318FF",
    },
  },
  colors: ["#4318FF", "#39B8FF", "#00FF00"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#7551FF",
    strokeWidth: 1,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    type: "line",
  },
  xaxis: {
    type: "numeric",
    categories: ["OCT", "NOV", "DEC", "JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "OCT", "NOV"],
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      color: ["#7551FF", "#39B8FF",  "#00FF00"],
      opacity: 0.5,
    },
  },
  color: ["#7551FF", "#39B8FF", "#00FF00"],
};
