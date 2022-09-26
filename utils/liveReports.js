import { checkedArr } from './toggles.js'
import { showAlert } from './views.js'

function renderLiveReports() {
  var dataPoints = []

  var options = {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Crypto Coins Live Reports:',
    },
    subtitles: [
      {
        text: 'Click Legend to Hide or Unhide Data Series',
      },
    ],
    axisX: {
      title: 'Time',
      valueFormatString: 'HH:mm:ss',
    },
    axisY: {
      title: 'USD',
      titleFontColor: '#4F81BC',
      lineColor: '#4F81BC',
      labelFontColor: '#4F81BC',
      tickColor: '#4F81BC',
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
      itemclick: toggleDataSeries,
    },
    data: [],
  }
  $('#chartContainer').CanvasJSChart(options)
  updateData()

  var newDataCount = 6

  function addData(data) {
    console.log(data)

    let coinCount = 0

    if (newDataCount != 1) {
      $.each(checkedArr, function (key, value) {
        let index = $.inArray(value.toUpperCase(), Object.keys(data))
        if (index === -1) {
          showAlert(value)
        }
      })

      $.each(data, function (key, value) {
        options.data.push({
          type: 'spline',
          name: key,
          showInLegend: true,
          yValueFormatString: '$#,###.#',
          dataPoints: [
            {
              x: new Date(),
              y: value.USD,
            },
          ],
        })

        coinCount++
      })
    } else {
      dataPoints.shift()
      $.each(data, function (key, value) {
        options.data[coinCount].dataPoints.push({
          x: new Date(),
          y: value.USD,
        })
        coinCount++
      })
    }

    newDataCount = 1

    if ($('#chartContainer').html()) {
      $('#chartContainer').CanvasJSChart().render()
      setTimeout(updateData, 2000)
    }
  }

  function updateData() {
    $.getJSON(
      `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${checkedArr[0]},${checkedArr[1]},${checkedArr[2]},${checkedArr[3]},${checkedArr[4]},&tsyms=USD`,
      addData
    )
  }
}

function toggleDataSeries(e) {
  if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
    e.dataSeries.visible = false
  } else {
    e.dataSeries.visible = true
  }
  e.chart.render()
}

export { renderLiveReports }
