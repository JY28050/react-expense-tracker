import React from 'react'

import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues)

    return(
        <div className='chart'>
            {props.dataPoints.map(dataPoint => <ChartBar 
            key={dataPoint.label}
            value={dataPoint.value} 
            maxValue={totalMaximum} 
            label={dataPoint.label}/>)}
        </div>
    )
};

export default Chart;


//Goal to create as many chartbars as we have data points, so we use map. 

// barFillHeight = Math.round((props.value / props.maxValue) * 100)      <-This will give us % value from 0 to 100 for how much the bar will be filled, and I'm rounding to the nearest integer. 