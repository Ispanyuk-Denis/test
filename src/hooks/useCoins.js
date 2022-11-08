import { useMemo, useState } from "react";

const getSameCoins = (data, minExchange, leftover) => {
    const minExchangePairs = Object.keys(data[minExchange].data);
    const leftoverPairs = Object.keys(data[leftover[0]].data);
    const pairs = minExchangePairs.filter((pair) => {
        return leftoverPairs.find((pair2) => pair2 === pair)
    })
    return pairs
}

const getSpread = (data, pairs) => {
    const result = {};
    const keys = Object.keys(data);
    console.log("data", data)
    pairs.map((pair) => {
        const value1 = data[keys[0]][pair]; 
        const value2 = data[keys[1]][pair]; 
        if( value1 < value2){
            return result[pair] = (((value1/value2)-1)*100).toFixed(3)
        }else{
            return result[pair] = (((value2/value1)-1)*100).toFixed(3)
        }
    })
    return result
}

const getCoins = (data) => {
    if(!Object.keys(data).length) return [];
    const dataKeys = Object.keys(data);
    const arrOfCoinsLength = dataKeys.map((exchange, index) => data[exchange].count);
    const minCoinsLength = Math.min.apply(Math, arrOfCoinsLength);
    const minExchange = dataKeys.find((exchange) => data[exchange].count === minCoinsLength);
    const leftover = [dataKeys.join('').split(minExchange).join('')];
    const exchanges = {
        [minExchange]: data[minExchange].data,
        [leftover[0]]: data[leftover[0]].data
    }
    const pairs = getSameCoins(data, minExchange, leftover);
    const spread = getSpread(exchanges, pairs);
    const result = pairs.map((pair) => ({
        coin: pair,
        binance: exchanges[leftover[0]][pair],
        huobi: exchanges[minExchange][pair],
        spread: spread[pair]
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