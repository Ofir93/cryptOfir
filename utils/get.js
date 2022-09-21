import { jsonAll, generateFetch, initDataToHtml } from './utils.js'

export async function asyncAwaitFetchData(items, num) {
  console.log('Request is sending now')
  // const div = $('#cardContainer')
  // div.html('')

  const cryptoArr = []

  try {
    const data = await generateFetch(
      'GET',
      `https://api.coingecko.com/api/v3/coins/${items}`
    )
    const dataJson = await data.json()
    // console.log(dataJson);
    // const dataRes = await Promise.allSettled(dataJson)
    // const dataJsonRes = await jsonAll(dataRes)
    if (num) {
      for (let i = 0; i < num; i++) {
        cryptoArr.push(dataJson[i])
      }
    } else {
      return dataJson
    }
    // console.log(cryptoArr);
    // setTimeout(() => {div.html('')
    // initDataToHtml(cryptoArr, div)
    // },2000)
    // const promises = []
    // for (const store of storesJson) {
    //   storesArr.push(store)
    //   promises.push(
    //     generateFetch(
    //       'POST',
    //       'http://localhost:3000/bulk-departments',
    //       store.departments
    //     )
    //   )
    // }
    // const departments = await Promise.allSettled(promises)
    // const departmentsJson = await jsonAll(departments)
    // promises.splice(0, promises.length)

    // for (const key in departmentsJson) {
    //   if (departmentsJson[key].status === 'fulfilled') {
    //     const department = departmentsJson[key].value
    //     storesArr[key].departments = department
    //     // console.log(department);
    //     for (const key in department) {
    //       // console.log(department[key])
    //       promises.push(
    //         generateFetch(
    //           'POST',
    //           'http://localhost:3000/bulk-products',
    //           department[key].products
    //         )
    //       )
    //     }
    //   } else {
    //     console.log(departmentsJson[key].status)
    //     console.log(departmentsJson[key].reason)
    //   }
    // }
    // const products = await Promise.allSettled(promises)
    // const productsJson = await jsonAll(products)
    // let s = 0
    // let i = 0
    // for (const key in productsJson) {
    //   if (productsJson[key].status === 'fulfilled') {
    //     const product = productsJson[key].value
    //     storesArr[s].departments[i].products = product
    //     if(i == storesArr[s].departments.length - 1) {
    //       i = 0
    //       s++
    //     } else {
    //       i++
    //     }
    // } else {
    //     console.log(productsJson[key].status)
    //     console.log(productsJson[key].reason)
    //   }
    // }
    // console.log(storesArr);
    // getDataToHTML(storesArr, div)
    return cryptoArr
  } catch (error) {
    console.log(error)
  }
}
