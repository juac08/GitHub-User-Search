
import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent =({data})=>{
  const chartConfigs = {
    type: "column3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Most Papular Languages",
        yAxisName:'stars',
        xAxisName:'Repos',
        yAxisNameFontSize:'16px',
        xAxisNameFontSize:'16px'
      },

      data
    }
  };
  
  return <ReactFC {...chartConfigs} />;

}

export default ChartComponent;

