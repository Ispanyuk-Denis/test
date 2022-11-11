import React, { useContext, useEffect, useState } from "react";
import { SpotContext } from "../../context/Spot";
import useCoins from "../../hooks/useCoins";
import { HomePage } from "./Homepage";

export function HomepageContainer() {
    const [exchanges, setExchanges] = useState([]);
    const [rowIndexClicked, setRowIndexClicked] = useState(null);

    const { getSpotData, spots } = useContext(SpotContext);
    const [uniqueCoins, setUniqueCoins] = useCoins(spots);
    const isDecrease = (value) => {
        return value > 0;
    };
    const sortValues = (param, value) => {
        const cloneValues = [...uniqueCoins];
        cloneValues.sort((a,b) => Number(b[param][value].value) - Number(a[param][value].value));
        console.log(cloneValues)
        setUniqueCoins(cloneValues);
    };
    const handlerRowClicked = (rowIndex) => (event) => {
        if (rowIndexClicked !== rowIndex) {
          setRowIndexClicked(rowIndex);
        } else {
          setRowIndexClicked(null); 
        }
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
            getSortSpread={sortValues}
            isDecrease={isDecrease}
            handlerRowClicked={handlerRowClicked}
            rowIndexClicked={rowIndexClicked}
        />
    );
}
