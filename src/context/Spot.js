import axios from "axios";
import React, { useState } from "react";

export const SpotContext = React.createContext();

export default function SpotContextApp({ children }) {
    const [spots, setSpots] = useState({});
    const spotData = {};

    const getSpotData = async () => {
        const { data:binance } = await axios.get("https://api.cryptorank.io/v0/exchanges/binance/tickers");
        spotData.binance = {
            data: binance.reduce((acc, item) => {
                acc[item["symbol"]] = {
                    bid: item["bid"],
                    ask: item["ask"],
                    usdVolume: item["usdVolume"].toFixed(0),
                };
                return acc
            }, {}),
            count: binance.length
        };
        const { data:huobi } = await axios.get("https://api.cryptorank.io/v0/exchanges/huobipro/tickers");
        spotData.huobi = {
            data: huobi.reduce((acc, item) => {
                acc[item["symbol"]] = {
                    bid: item["bid"],
                    ask: item["ask"],
                    usdVolume: item["usdVolume"].toFixed(0),
                };
                return acc
            }, {}),
            count: huobi.length
        };
        setSpots(spotData);
    }

    return (
        <SpotContext.Provider
            value={{
                spots,
                getSpotData: getSpotData,
            }}
        >
            {children}
        </SpotContext.Provider>
    );
}
