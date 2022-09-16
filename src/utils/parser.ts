import * as cheerio from 'cheerio'
import axios from 'axios'

const url = 'https://myfin.by/currency/cb-rf'

export const getData = async () => {
    const array: string[][] = []
    const response = await axios.get(url)

    const $ = cheerio.load(response.data)

    $('tr.row.body').each((n, i) => {
        const arr: string[] = []
        $(i).children().each((e, x) => {
            if (e === 2) {
                arr.push($(x).text().split(' ')[1])
            } else {
                arr.push($(x).text())
            }
        })
        array.push(arr)
    })
    return array
}

export const getCurrency = async (currency: string) => {

    if (!currency) {
        throw new Error('data is not defined')
    }
    const array: string[][] = []
    const response = await axios.get(url + '/' + currency)

    const $ = cheerio.load(response.data)

    $('tr.row.body').each((n, i) => {
        const arr: string[] = []
        $(i).children().each((e, x) => {
            arr.push($(x).text())
        })
        array.push(arr)
    })
    return array
}