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
        return value < -1;
    };
    const sortValues = (param) => {
        const cloneValues = [...uniqueCoins];
        cloneValues.sort((a,b) => Number(a[param]) - Number(b[param]));
        setUniqueCoins(cloneValues);
    };
    const handlerRowClicked = (rowIndex) => (event) => {
        if (rowIndexClicked !== rowIndex) {
          setRowIndexClicked(rowIndex);
        } else {
          setRowIndexClicked(null); // set clicked row to null if same row is selected
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
