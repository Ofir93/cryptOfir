import { asyncAwaitFetchData } from './utils/get.js'
import { initDataToHtml } from './utils/utils.js'
import { renderSkelletons } from './utils/loading.js'
// import { showHome, showLive, showAbout } from './utils/views.js'

const cardContainer = $('#cardContainer')
renderSkelletons(cardContainer)
initDataToHtml(await asyncAwaitFetchData('list', 100), cardContainer)

// $('#cryptOfir'), $('#home').on('click', showHome())
// $('live').on('click', showLive())
// $('about').on('click', showAbout())

// $('#search')[0].on('keyup', filter())

const searchInput = $('#search')[0]
//
$(searchInput).on('keyup', function () {
  const elements = $('.card')
  for (const element of elements) {
    let symbol = $(element).find('h5').html()
    let name = $(element).find('h6').html()
    if (
      symbol.toUpperCase().indexOf(this.value.toUpperCase()) > -1 ||
      name.toUpperCase().indexOf(this.value.toUpperCase()) > -1
    ) {
      $(element).parent().attr('style', 'display = ""')
    } else {
      $(element).parent().attr('style', 'display : none')
    }
  }
})
//
