import { asyncAwaitFetchData } from './get.js'

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
    // const cryptoArr = []

    // for (let i = 0; i < 100; i++) {
    //   cryptoArr.push(data[i])
    // }
    // console.log(cryptoArr)
    // setTimeout(() => {
    //   initDataToHtml(cryptoArr, div)
    // }, 2000)

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
                <a type="button" timeStemp=1 id=${item.id} class="btn btn-card btn-primary" data-bs-toggle="collapse"
                    data-bs-target="#cardText${counter}" aria-expanded="false"
                    aria-controls="cardText${counter}">More Info</a>
                <div class="collapse" id=cardText${counter} >
                    <p class="card-text">${item.id}Some quick example text to build on the card title and make up the
                        bulk
                        of the
                        card's content.
                    </p>
                </div>
            </div>
        </div>
        <div class="switchContainer pt-3 pe-2">
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>
            <img class="coinImg" src="">
        </div>
    </div>
</div>`)
      counter++
    }
  
    $('.btn-card').on('click', function (event) { genarateMoreInfo(event) })
    },2000)
  } catch (error) {
    console.log(error)
  }
}

async function genarateMoreInfo(event) {
  const timeStemp = new Date().getTime()
  const eventTime = $(event.target).attr('timeStemp')
  const numberTime = parseInt(eventTime)

  if(timeStemp > numberTime + 120000){
  $(event.target).attr('timeStemp', timeStemp)
  const requestId = $(event.target).attr('id')
  const moreInfoTarget = $(event.target).next('div').find('p')
  const cardNum = $(event.target).next('div').attr('id')
  const imgLocation = $(event.target).parentsUntil('.label').siblings('.switchContainer').children('.coinImg')

  const data = await asyncAwaitFetchData(requestId)

  imgLocation.attr('src', data.image.small)

  moreInfoTarget.text('')

  moreInfoTarget.parent().append(`<p>USD: ${data.market_data.current_price.usd}$ </p>
  <p>EUR: ${data.market_data.current_price.eur} € </p>
  <p>ILS: ${data.market_data.current_price.ils} \u20AA</p>`)
  }

  return
}

export { generateFetch, jsonAll, initDataToHtml }
