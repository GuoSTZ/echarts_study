import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

interface RadarChartProps {

}

const RadarChart = (props: RadarChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null!);
  let myChart: any = null;
  const options = {
    title: {
        text: "测试表格-react-hook"
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
  }

  function renderChart() {
    const chart = echarts.getInstanceByDom(chartRef.current)
    if (chart) {
      myChart = chart
    } else {
      myChart = echarts.init(chartRef.current)
    }
    myChart.setOption(options)
  }

  useEffect(() => {
      renderChart()
      return () => {
        myChart && myChart.dispose()
      }
  })
  return (
    <div className="RadarView">
      <div style={{width: "400px", height: "400px"}} ref={chartRef} />
    </div>
  )
}

export default RadarChart;