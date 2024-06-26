import React from "react";
import "./Chart.scss";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoint.map((cur) => cur.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className='chart'>
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
