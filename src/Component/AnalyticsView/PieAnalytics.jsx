import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieAnalytics = ({ input }) => {
  const pieOptions = {
    chart: {
      type: 'pie',
      width:400,
      height:400,
      backgroundColor: '#a9a9a9',
    },
    title: {
        text: `<span style="text-align: center;">Open and Close Invoices</span>`, // Place the name in between the chart title using HTML and CSS
        useHTML: true, // Enable HTML rendering in the chart title
        style: {
            color: 'white',
          },
    },
    plotOptions: {
        pie: {
          colors: ['#8fd163','#CCCCCC'], // Grey and green colors
        },
      },
    series: [
      {
        name: 'Percentage',
        data: [
          {
            name: '100%',
            y: input ? 100 : 0,
          },
          {
            name: '',
            y: input ? 0 : 100,
          },
        ],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={pieOptions} />
    </div>
  );
};

export default PieAnalytics;
