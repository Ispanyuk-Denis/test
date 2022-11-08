import { useEffect, useState } from "react";

const findMinIndexOfArr = (data, keys) => {
    let minIndex = 0;
    for(let i = 1; i < keys.length; i++){
        const exchange1 = keys[i-1];
        const exchange2 = keys[i];
        if(data[exchange1].length > data[exchange2].length){
            minIndex = i;
        }
    }
    return minIndex
}

const getCoins = (data) => {
    if(!Object.keys(data).length) return [];
    const dataKeys = Object.keys(data);
    const minIndex = findMinIndexOfArr(data, dataKeys);
    const lowestExchange = dataKeys.splice(minIndex, 1);

    const huobiExchange = data[lowestExchange].filter((item) => {
        return data[dataKeys].find((item2) => item["symbol"] === item2["symbol"]);
    })
    huobiExchange.sort((a,b) => a["symbol"] < b["symbol"]);
    const binanceExchange = data[dataKeys].filter((item) => {
        return huobiExchange.find((item2) => item["symbol"] === item2["symbol"]);
    })
    binanceExchange.sort((a,b) => a["symbol"] < b["symbol"]);
    const spread = {};
    binanceExchange.map((coin, index) => {
        if(coin["close"] < huobiExchange[index]["close"]){
            spread[coin["symbol"]]=(((coin["close"]/huobiExchange[index]["close"])-1)*100).toFixed(2)
        }else{
            spread[coin["symbol"]]=(((huobiExchange[index]["close"]/coin["close"])-1)*100).toFixed(2)
        }
    })
    console.log("binanceExchange", binanceExchange);
    console.log("huobiExchange", huobiExchange);
    const result = huobiExchange.map((item, index) => ({
        coin: item["symbol"],
        binance: binanceExchange[index]["close"],
        huobi: item["close"],
        spread: spread[item["symbol"]]
    }))
    return result
}

export default function useCoins (data) {
    const [uniqueCoins, setUniqueCoins] = useState([]);
    useEffect(() => {
        if(!uniqueCoins.length){
            setUniqueCoins(getCoins(data));
        }
    }, [data])

    return [uniqueCoins, setUniqueCoins]
}