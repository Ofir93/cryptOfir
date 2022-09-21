let checkCounter = 0
let checkedArr = []

function rememberChecked(event, id) {
  event.target.checked ? checkCounter++ : checkCounter--
  let exequted = false
  checkedArr.push(id)
  console.log(checkedArr)
  if (checkCounter > 5) {
    if (!exequted) {
      $('body').append(`<div class="backdrop container-fluid">
    <div class="box">
        <h1 class="title">You can choose up to Five crypto coins</h1>
        <h4>Please uncheck one and continue</h4>
        <div class="container">
            <p>${checkedArr[0]}</p> 
            <label class="switch">
                <input type="checkbox" class="checkbox" checked>
                <span class="slider round"></span>
            </label>
            <p>${checkedArr[1]}</p>
            <label class="switch">
                <input type="checkbox" class="checkbox" checked>
                <span class="slider round"></span>
            </label>
            <p>${checkedArr[2]}</p>
            <label class="switch">
                <input type="checkbox" class="checkbox" checked>
                <span class="slider round"></span>
            </label>
            <p>${checkedArr[3]}</p>
            <label class="switch">
                <input type="checkbox" class="checkbox" checked>
                <span class="slider round"></span>
            </label>
            <p>${checkedArr[4]}</p>
            <label class="switch">
                <input type="checkbox" class="checkbox" checked>
                <span class="slider round"></span>
            </label>
            <p>${checkedArr[5]}</p>
            <label class="switch">
                <input type="checkbox" class="checkbox" checked>
                <span class="slider round"></span>
            </label>
    </div>
    <div class="button-wrap close">
        <button class="button small close">Cancel</button>
        <button class="button gradient small">Submit!</button>
    </div>
</div>
</div>`)
      exequted = true
      $('.close').click(function () {
        $('.backdrop, .box').animate(
          { opacity: '0' },
          300,
          'linear',
          function () {
            $('.backdrop, .box').css('display', 'none')
            event.target.checked = false
            $('.backdrop').remove()
            checkedArr.splice(0,3)
          }
        )
      })
    }
    $('.backdrop, .box').animate({ opacity: '.90' }, 300, 'linear')
    $('.box').animate({ opacity: '1.00' }, 300, 'linear')
    $('.backdrop, .box').css('display', 'block')
  }
}

export { rememberChecked }
