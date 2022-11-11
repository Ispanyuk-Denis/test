import React from "react";
import * as Styled from "../style";

export const TakerAndMaker = ({
    uniqueCoins,
    exchanges,
    getSortSpread,
    isDecrease,
    rowIndexClicked,
    handlerRowClicked,
}) => {
    return (
        <>
            <h1>Taker & Maker</h1>
            <Styled.Table>
                <thead>
                    <tr>
                        <Styled.Cell>Pair</Styled.Cell>
                        {exchanges.map((index) => (
                            <>
                                <Styled.Cell key={`Exchange${index}`}>Exchange</Styled.Cell>
                                <Styled.Cell key={`ASK${index}`}>ASK</Styled.Cell>
                                <Styled.Cell key={`BID${index}`}>BID</Styled.Cell>
                                <Styled.Cell key={`Volume${index}`}>Volume USD</Styled.Cell>
                            </>
                        ))}
                        <Styled.Cell onClick={() => getSortSpread("spread", "takerMaker")}>Spread</Styled.Cell>
                    </tr>
                </thead>
                <tbody>
                    {uniqueCoins.length &&
                        uniqueCoins.map((item, index) => (
                            <Styled.TableRow
                                isActive={rowIndexClicked === index}
                                key={index}
                                onClick={handlerRowClicked(index)}
                            >
                                <Styled.Cell>{item.coin}</Styled.Cell>
                                <Styled.Cell>Binance</Styled.Cell>
                                <Styled.Cell>{item.binance.ask}</Styled.Cell>
                                <Styled.CellTMBid binance={item.spread.makerMaker.binance}>{item.binance.bid}</Styled.CellTMBid>
                                <Styled.CellUsd>{item.binance.usdVolume}</Styled.CellUsd>
                                <Styled.Cell>Huobi</Styled.Cell>
                                <Styled.Cell>{item.huobi.ask}</Styled.Cell>
                                <Styled.CellTMBid huobi={item.spread.makerMaker.huobi}>{item.huobi.bid}</Styled.CellTMBid>
                                <Styled.CellUsd>{item.huobi.usdVolume}</Styled.CellUsd>
                                <Styled.SpreadStyled isDecrease={isDecrease(item.spread.takerMaker.value)}>
                                    {item.spread.takerMaker.value}
                                </Styled.SpreadStyled>
                            </Styled.TableRow>
                        ))}
                </tbody>
            </Styled.Table>
        </>
    );
};
