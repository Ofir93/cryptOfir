import { asyncAwaitFetchData } from './utils/get.js'
import { initDataToHtml } from './utils/utils.js'
import { renderSkelletons } from './utils/loading.js'
import { showHome, showLive, showAbout } from './utils/views.js'

const cardContainer = $('#cardContainer')
renderSkelletons(cardContainer)
initDataToHtml(await asyncAwaitFetchData('list', 100), cardContainer)

$('#cryptOfir, #home').on('click', showHome)
$('#live').on('click', showLive)
$('#about').on('click', showAbout)


const searchInput = $('#search')[0]
$(searchInput).on('keyup', function () {
  const elements = $('.coinCard')
  const valueUp = this.value.toUpperCase()
  $.each(elements, function (key, value){
    let symbol = $(elements[key]).find('h5').html()
    let name = $(elements[key]).find('h6').html()


    if (
      symbol.toUpperCase().indexOf(valueUp) > -1 ||
      name.toUpperCase().indexOf(valueUp) > -1
    ) {
      $(elements[key]).parent().attr('style', 'display = ""')
    } else {
      $(elements[key]).parent().attr('style', 'display : none')
    }
  })
  
})
