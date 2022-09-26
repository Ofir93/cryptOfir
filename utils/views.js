import { buildAbout } from './about.js'
import { checkedArr } from './toggles.js'
import { renderLiveReports } from './liveReports.js'

const parallax = $('.parallax')
const cardContainer = $('#cardContainer')
const liveContainer = $('#chartContainer')

function showHome() {
  closeAnimation($('.about'))
  openAnimation(cardContainer, '0.9')
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

  closeAnimation(cardContainer)
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
  $('body').append(`
  <div class="backdrop container-fluid">
      <div class="box">
        <div class="box-header">
          <h2 class="title">${missing.toUpperCase()}, NOT FOUND</h2>
        </div>
          <div class="button-wrap">
              <button class="button gradient small btn btn-success" id="submitCoins">Continue!</button>
          </div>
      </div>
  </div>`)
  $('#submitCoins').click(() => {
    $('.backdrop, .box').animate({ opacity: '0' }, 300, 'linear', function () {
      $('.backdrop, .box').css('display', 'none')
      $('.backdrop').remove()
      $('body').css('overflow', 'auto')
    })
  })

  $('.backdrop, .box').animate({ opacity: '.90' }, 300, 'linear')
  $('.box').animate({ opacity: '1.00' }, 300, 'linear')
  $('.backdrop, .box').css('display', 'block')
  $('body').css('overflow', 'hidden')

  return
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

export { showHome, showLive, showAbout, showAlert }
