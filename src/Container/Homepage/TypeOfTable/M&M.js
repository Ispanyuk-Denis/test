import React from "react";
import * as Styled from "../style";
export const MakerAndMaker = ({
    uniqueCoins,
    exchanges,
    getSortSpread,
    isDecrease,
    rowIndexClicked,
    handlerRowClicked,
}) => {
    return (
        <>
            <h1>Maker & Maker</h1>
            <Styled.Table>
                <thead>
                    <tr>
                        <Styled.Cell>Pair</Styled.Cell>
                        {exchanges.map((index) => (
                            <>
                                <Styled.Cell key={'Exchange' + index}>Exchange</Styled.Cell>
                                <Styled.Cell key={'ASK' + index}>ASK</Styled.Cell>
                                <Styled.Cell key={'BID' + index}>BID</Styled.Cell>
                                <Styled.Cell key={'VolumeUSD' + index}>Volume USD</Styled.Cell>
                            </>
                        ))}
                        <Styled.Cell onClick={() => getSortSpread("spread", "makerMaker")}>Spread</Styled.Cell>
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
                                <Styled.CellAsk binance={item.spread.makerMaker.binance}>{item.binance.ask}</Styled.CellAsk>
                                <Styled.CellBid huobi={item.spread.makerMaker.huobi}>{item.binance.bid}</Styled.CellBid>
                                <Styled.CellUsd>{item.binance.usdVolume}</Styled.CellUsd>
                                <Styled.Cell>Huobi</Styled.Cell>
                                <Styled.CellAsk huobi={item.spread.makerMaker.huobi}>{item.huobi.ask}</Styled.CellAsk>
                                <Styled.CellBid binance={item.spread.makerMaker.binance}>{item.huobi.bid}</Styled.CellBid>
                                <Styled.CellUsd>{item.huobi.usdVolume}</Styled.CellUsd>
                                <Styled.SpreadStyled isDecrease={isDecrease(item.spread.makerMaker.value)}>
                                    {item.spread.makerMaker.value}
                                </Styled.SpreadStyled>
                            </Styled.TableRow>
                        ))}
                </tbody>
            </Styled.Table>
        </>
    );
};
