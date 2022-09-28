import { buildAbout } from './about.js'
import { checkedArr, clearArr } from './toggles.js'
import { renderLiveReports } from './liveReports.js'

const parallax = $('.parallax')
const cardContainer = $('#cardContainer')
const liveContainer = $('#chartContainer')
let stopLIve = false

function showHome() {
  closeAnimation($('.about'))

  $.each(cardContainer, function (key, value) {
    cardContainer.find('.checkbox').prop('checked', false)
  })

  clearArr()
  openAnimation(cardContainer, '0.9')
  liveContainer.html('')
  stopLIve = true
  parallax.css('height', '185vh')

  $('.bg_img').each((index, img) => {
    if (index) {
      $(img).css('display', 'inherit')
    }
  })
}

function showLive() {
  if (checkedArr.length != 5) {
    alert('Please select Five coins and try again')
    return
  }

  closeAnimation(cardContainer)
  closeAnimation($('.about'))
  stopLIve = false
  renderLiveReports()
  parallax.css('height', '110vh')
  $('.bg_img').each((index, img) => {
    if (index) {
      $(img).css('display', 'none')
    }
  })
}

let exequtAbout = false

function showAbout() {
  if (!exequtAbout) {
    buildAbout(parallax)
    exequtAbout = true
  }
  $.each(cardContainer, function (key, value) {
    cardContainer.find('.checkbox').prop('checked', false)
  })

  clearArr()

  closeAnimation(cardContainer)
  liveContainer.html('')
  stopLIve = true
  openAnimation($('.about'), '1')
  parallax.css('height', '110vh')
  $('.bg_img').each((index, img) => {
    if (index) {
      $(img).css('display', 'none')
    }
  })
  return
}

function showAlert(missing) {
  if ($('.backD').length == 0) {
    $('body').append(`
  <div class="backdrop backD container-fluid">
      <div class="box boxD">
        <div class="box-header">
          <h2 class="title">${missing.toUpperCase()}, NOT FOUND</h2>
        </div>
          <div class="button-wrap">
              <button class="button gradient small btn btn-success closeAlert">Continue!</button>
          </div>
      </div>
  </div>`)
  } else {
    $('.backdrop').append(`
<div class="box boxD">
  <div class="box-header">
    <h2 class="title">${missing.toUpperCase()}, NOT FOUND</h2>
  </div>
  <div class="button-wrap">
      <button class="button gradient small btn btn-success closeAlert">Continue!</button>
  </div>
</div>`)
  }

  $(`.closeAlert`).click((e) => {
    let box = $(e).closest('.box')
    box.css('display', 'none')
    box.remove()
    $('body').css('overflow', 'auto')
    if ($('.box')) {
      $(`.backD`).remove()
    }
  })

  $(`.backD, .boxD`).animate({ opacity: '.90' }, 300, 'linear')
  $(`.boxD`).animate({ opacity: '1.00' }, 300, 'linear')
  $(`.backD, .boxD`).css('display', 'block')
  $('body').css('overflow', 'hidden')
}

function closeAnimation(element) {
  element.animate({ opacity: '0' }, 300, 'linear', function () {
    element.css('display', 'none')
  })
}

function openAnimation(element, opath) {
  element.animate({ opacity: opath }, 300, 'linear', function () {
    element.css('display', '')
    if ((element = liveContainer)) {
      liveContainer.html('')
    }
  })
}

export { showHome, showLive, showAbout, showAlert, stopLIve }
