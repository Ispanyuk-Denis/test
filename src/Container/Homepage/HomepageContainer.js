import React, { useContext, useEffect, useState } from "react";
import { SpotContext } from "../../context/Spot";
import useCoins from "../../hooks/useCoins";
import { HomePage } from "./Homepage";

export function HomepageContainer() {
    const { getSpotData, spots } = useContext(SpotContext);
    const [exchanges, setExchanges] = useState([]);
    const [uniqueCoins, setUniqueCoins] = useCoins(spots);
    const isDecrease = (value) => {
        return value < 1;
    };
    useEffect(() => {
        if (Object.keys(spots).length) {
            setExchanges(Object.keys(spots));
        }
    }, [spots]);
    return (
        <HomePage
            getSpotData={getSpotData}
            uniqueCoins={uniqueCoins}
            exchanges={exchanges}
            getSortSpread={() => {}}
            isDecrease={isDecrease}
        />
    );
}
