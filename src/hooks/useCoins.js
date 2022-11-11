import { useMemo, useState } from "react";

const getSameCoins = (data, minExchange, leftover) => {
    const minExchangePairs = Object.keys(data[minExchange].data);
    const leftoverPairs = Object.keys(data[leftover[0]].data);
    const pairs = minExchangePairs.filter((pair) => {
        return leftoverPairs.find((pair2) => pair2 === pair)
    })
    return pairs
}

const getMakerSpread = (data, pairs) => {
    const result = {};
    const keys = Object.keys(data);
    pairs.map((pair) => {
        const askValue1 = data[keys[0]][pair]['ask']; 
        const askValue2 = data[keys[1]][pair]['ask']; 
        const bidValue1 = data[keys[0]][pair]['bid'];
        const bidValue2 = data[keys[1]][pair]['bid'];
        if( askValue1 < askValue2){
            return result[pair] = {
                value: (((bidValue2/askValue1)-1)*100).toFixed(3),
                [keys[0]]: true,
                [keys[1]]: false,
            }
        }else{
            return result[pair] = {
                value: (((bidValue1/askValue2)-1)*100).toFixed(3),
                [keys[1]]: true,
                [keys[0]]: false,
            }
        }
    })
    return result
}

const getTakerSpread = (data, pairs) => {
    const result = {};
    const keys = Object.keys(data);
    pairs.map((pair) => {
        const bidValue1 = data[keys[0]][pair]['bid'];
        const bidValue2 = data[keys[1]][pair]['bid'];
        if( bidValue1 < bidValue2){
            return result[pair] = {
                value: (((bidValue2/bidValue1)-1)*100).toFixed(3),
                [keys[0]]: true,
                [keys[1]]: false,
            }
        }else{
            return result[pair] = {
                value: (((bidValue1/bidValue2)-1)*100).toFixed(3),
                [keys[0]]: true,
                [keys[1]]: false,
            }
        }
    })
    return result
}

const getCoins = (data) => {
    if(!Object.keys(data).length) return [];
    const dataKeys = Object.keys(data);
    const arrOfCoinsLength = dataKeys.map((exchange) => data[exchange].count);
    const minCoinsLength = Math.min.apply(Math, arrOfCoinsLength);
    const minExchange = dataKeys.find((exchange) => data[exchange].count === minCoinsLength);
    const leftover = [dataKeys.join('').split(minExchange).join('')];
    const exchanges = {
        [minExchange]: data[minExchange].data,
        [leftover[0]]: data[leftover[0]].data
    }
    const pairs = getSameCoins(data, minExchange, leftover);
    const spreadMakerMaker = getMakerSpread(exchanges, pairs);
    const spreadTakerMaker = getTakerSpread(exchanges, pairs);
    const result = pairs.map((pair) => ({
        coin: pair,
        binance: {
            ask: exchanges[leftover[0]][pair]['ask'],
            bid: exchanges[leftover[0]][pair]['bid'],
            usdVolume: exchanges[leftover[0]][pair]['usdVolume'],
        },
        huobi: {
            ask: exchanges[minExchange][pair]['ask'],
            bid: exchanges[minExchange][pair]['bid'],
            usdVolume: exchanges[minExchange][pair]['usdVolume'],
        },
        spread: {
            makerMaker: spreadMakerMaker[pair],
            takerMaker: spreadTakerMaker[pair]
        }
    }))
    return result
}

export default function useCoins (data) {
    const [uniqueCoins, setUniqueCoins] = useState([]);
    useMemo(() => {
        if(data){
            const result = getCoins(data);
            setUniqueCoins(result)
        }
    }, [data])
    return [uniqueCoins, setUniqueCoins, getCoins]
}