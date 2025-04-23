// Async & Await
// não pode usar o await sem o async
const endpoint = 'https://api.coingecko.com/api/v3/exchange_rates?id=3124234234&name=P'

async function getCoinData() {
    try {
        const data = await fetch(endpoint)
        const json = await data.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}

getCoinData()