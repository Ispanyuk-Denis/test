import axios from "axios";
import React, { useState } from "react";

export const SpotContext = React.createContext();

export default function SpotContextApp({ children }) {
    const [spots, setSpots] = useState({});
    const spotData = {};

    const getSpotData = async () => {
        const { data:huobi } = await axios.get("https://api.cryptorank.io/v0/exchanges/huobipro/tickers");
        spotData.huobi = huobi;
        const { data:binance } = await axios.get("https://api.cryptorank.io/v0/exchanges/binance/tickers");
        spotData.binance = binance;
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
