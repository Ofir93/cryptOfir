import { generateFetch } from './utils.js'

export async function asyncAwaitFetchData(items, num) {

  const cryptoArr = []

  try {
    const data = await generateFetch(
      'GET',
      `https://api.coingecko.com/api/v3/coins/${items}`
    )
    const dataJson = await data.json()
    if (num) {
      for (let i = 0; i < num; i++) {
        cryptoArr.push(dataJson[i])
      }
    } else {
      return dataJson
    }
    return cryptoArr
  } catch (error) {
    console.log(error)
  }
}
