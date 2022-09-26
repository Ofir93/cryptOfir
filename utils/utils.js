import { asyncAwaitFetchData } from './get.js'
import { rememberChecked } from './toggles.js'

async function jsonAll(responses) {
  const promises = []
  for (const response of responses) {
    if (response.status === 'fulfilled') {
      promises.push(response.value.json())
    } else {
      console.error(response.status)
      console.error(response.reason)
    }
  }
  return await Promise.allSettled(promises)
}

async function generateFetch(method, url, data = null) {
  const fetchObj = {
    method,
  }

  if (method === 'POST') {
    fetchObj.headers = {
      'Content-Type': 'application/json; charset=utf-8',
    }
    if (data) {
      fetchObj.body = JSON.stringify(data)
    }
  }

  return await fetch(url, fetchObj)
}

async function initDataToHtml(data, location) {
  try {
    let counter = 0
    setTimeout(() => {
      location.html('')
      for (const item of data) {
        location.append(`<div class="col">
    <div class="card text-start justify-content-between">
        <div id="label">
            <div class="card-body ps-4">
                <h5 class="card-title mb-3">${item.symbol}</h5>
                <h6 class="card-subtitle mb-3 text-muted">${item.name}</h6>
                <a type="button" timeStemp=1 id=${item.id} class="btn btn-card btn-success" data-bs-toggle="collapse"
                    data-bs-target="#cardText${counter}" aria-expanded="false"
                    aria-controls="cardText${counter}">More Info</a>
                <div class="collapse" id=cardText${counter} >
                    <div class="spinner-border text-success" role="status">
                  </div>
                    
                </div>
            </div>
        </div>
        <div class="switchContainer pt-3 pe-2">
            <label class="switch">
                <input type="checkbox" class="checkbox">
                <span class="slider round"></span>
            </label>
            <img class="" src="">
        </div>
    </div>
</div>`)
        counter++
      }

      $('.btn-card').on('click', function (event) {
        genarateMoreInfo(event)
      })

      $('.checkbox').on('click', function (event) {
        const symbol = $(this)
          .closest('.switchContainer')
          .prev('#label')
          .children('.card-body')
          .children('h5')
          .text()
        rememberChecked(event, symbol)
      })
    }, 1500)
  } catch (error) {
    console.log(error)
  }
}

async function genarateMoreInfo(event) {
  const timeStemp = new Date().getTime()
  const eventTime = $(event.target).attr('timeStemp')
  const numberTime = parseInt(eventTime)

  if (timeStemp > numberTime + 120000) {
    $(event.target).attr('timeStemp', timeStemp)
    const requestId = $(event.target).attr('id')
    const moreInfoTarget = $(event.target).next('div').find('.spinner-border')
    const imgLocation = $(event.target)
      .parentsUntil('.label')
      .siblings('.switchContainer')
      .children('img')

    const data = await asyncAwaitFetchData(requestId)

    imgLocation.attr({ class: 'coinImg', src: data.image.small })

    setTimeout(() => {
      moreInfoTarget.parent()
        .append(`<p>USD: ${data.market_data.current_price.usd} $ </p>
  <p>EUR: ${data.market_data.current_price.eur} € </p>
  <p>ILS: ${data.market_data.current_price.ils} \u20AA</p>`)

      moreInfoTarget.remove()
    }, 1000)
  }

  return
}

export { generateFetch, jsonAll, initDataToHtml }
