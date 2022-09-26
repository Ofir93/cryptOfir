import { showLive } from './views.js'

let checkCounter = 0
let checkedArr = []

function rememberChecked(event, symbol) {
  event.target.checked
    ? (checkedArr.push(symbol), checkCounter++)
    : (checkCounter--,
      (checkedArr = checkedArr.filter((name) => name !== symbol)))
  let exequted = false

  if (checkCounter > 5) {
    if (!exequted) {
      $('body').append(`<div class="backdrop container-fluid">
      <div class="box">
      <img src="./photos/funnyy.jpg" class="imgF">
        <div class="box-header">
          <h2 class="title">You can choose up to Five crypto coins</h2>
          <h5>Please uncheck one and continue</h5>
          </div>
          <div class="container">
              <div class="toggleCard card text-start justify-content-between mb-3 ps-3">
                  <p>${checkedArr[0]}</p>
                  <label class="switch">
                      <input type="checkbox" class="checkboxCon" checked>
                      <span class="slider round"></span>
                  </label>
              </div>
              <div class="toggleCard card text-start justify-content-between mb-3 ps-3">
                  <p>${checkedArr[1]}</p>
                  <label class="switch">
                      <input type="checkbox" class="checkboxCon" checked>
                      <span class="slider round"></span>
                  </label>
              </div>
              <div class="toggleCard card text-start justify-content-between mb-3 ps-3">
                  <p>${checkedArr[2]}</p>
                  <label class="switch">
                      <input type="checkbox" class="checkboxCon" checked>
                      <span class="slider round"></span>
                  </label>
              </div>
              <div class="toggleCard card text-start justify-content-between mb-3 ps-3">
                  <p>${checkedArr[3]}</p>
                  <label class="switch">
                      <input type="checkbox" class="checkboxCon" checked>
                      <span class="slider round"></span>
                  </label>
              </div>
              <div class="toggleCard card text-start justify-content-between mb-3 ps-3">
                  <p>${checkedArr[4]}</p>
                  <label class="switch">
                      <input type="checkbox" class="checkboxCon" checked>
                      <span class="slider round"></span>
                  </label>
              </div>
              <div class="toggleCard card text-start justify-content-between mb-3 ps-3">
                  <p>${checkedArr[5]}</p>
                  <label class="switch">
                      <input type="checkbox" class="checkboxCon" checked>
                      <span class="slider round"></span>
                  </label>
              </div>
          </div>
          <div class="button-wrap">
              <button class="button small close btn btn-warning">Cancel</button>
              <button class="button gradient small btn btn-success" id="submitCoins">Continue!</button>
          </div>
      </div>
  </div>`)
      exequted = true

      $('.close').click(function () {
        event.target.checked = false
        checkedArr.splice(5, 1)
        closeBackdrop()
      })

      $('#submitCoins').click(() => {
        const allChecked = $('.checkboxCon')
        allChecked.each(function () {
          if (!this.checked) {
            const unToggle = $(this).parent().prev().text()
            $('h5').each((i, element) => {
              if ($(element).text() === unToggle) {
                $(element)
                  .closest('#label')
                  .next('.switchContainer')
                  .find('.checkbox')
                  .prop('checked', false)
              }
            })

            checkedArr.splice(this.index, 1)
          }
        })
        if (checkedArr.length != 5) {
          alert('Please select Five coins and try again')
          return
        }
        console.log(checkedArr)
        showLive()
        closeBackdrop()
      })

      $('.backdrop, .box').animate({ opacity: '.90' }, 300, 'linear')
      $('.box').animate({ opacity: '1.00' }, 300, 'linear')
      $('.backdrop, .box').css('display', 'block')
      $('body').css('overflow', 'hidden')
    }
    return
  }
}

function closeBackdrop() {
  $('.backdrop, .box').animate({ opacity: '0' }, 300, 'linear', function () {
    $('.backdrop, .box').css('display', 'none')
    $('.backdrop').remove()
    $('body').css('overflow', 'auto')
  })
}

export { rememberChecked, checkedArr }
