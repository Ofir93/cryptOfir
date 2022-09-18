import { asyncAwaitFetchData } from './utils/get.js'
import { initDataToHtml } from './utils/utils.js'

initDataToHtml(await asyncAwaitFetchData('list', 100),$('#cardContainer'))

// $('.btn-card').on('click', function (e) {console.log(e);})