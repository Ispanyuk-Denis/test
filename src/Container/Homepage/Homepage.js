import React from "react";
import { Button, Tab } from "../../Components";
import * as Styled from "./style";
import { MakerAndMaker } from "./TypeOfTable/M&M";
import { TakerAndMaker } from "./TypeOfTable/T&M";

export function HomePage({
    getSpotData,
    uniqueCoins,
    exchanges,
    getSortSpread,
    isDecrease,
    rowIndexClicked,
    handlerRowClicked,
}) {
    return (
        <Styled.Container>
            <Button onClick={getSpotData}>Get Data</Button>
            {exchanges.length ? (
                <>
                    <Tab>
                        <Tab.TabPane tab={"Maker&Maker"}>
                            <MakerAndMaker
                                uniqueCoins={uniqueCoins}
                                exchanges={exchanges}
                                getSortSpread={getSortSpread}
                                isDecrease={isDecrease}
                                rowIndexClicked={rowIndexClicked}
                                handlerRowClicked={handlerRowClicked}
                            />
                        </Tab.TabPane>
                        <Tab.TabPane tab={"Taker&Maker"}>
                            <TakerAndMaker
                                uniqueCoins={uniqueCoins}
                                exchanges={exchanges}
                                getSortSpread={getSortSpread}
                                isDecrease={isDecrease}
                                rowIndexClicked={rowIndexClicked}
                                handlerRowClicked={handlerRowClicked}
                            />
                        </Tab.TabPane>
                    </Tab>
                </>
            ) : null}
        </Styled.Container>
    );
}
