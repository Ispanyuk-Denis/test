import React from "react";
import { Button } from "../../Components";
import * as Styled from "./style"

export function HomePage({ getSpotData, uniqueCoins, exchanges, getSortSpread, isDecrease, rowIndexClicked, handlerRowClicked }) {
    return (
        <Styled.Container>
            <Button onClick={getSpotData}>Get Data</Button>

            {exchanges.length ? <Styled.Table>
              <thead>
                <tr>
                    <Styled.Cell>&nbsp;</Styled.Cell>
                    {exchanges.map((exchange, index) => (
                        <Styled.Cell key={index}>{exchange}</Styled.Cell>
                    ))}
                    <Styled.Cell onClick={() => getSortSpread("spread")}>Spread</Styled.Cell>
                </tr>
              </thead>
              <tbody>
                {
                  uniqueCoins.length && uniqueCoins.map((item, index) => (<Styled.TableRow
                    isActive={rowIndexClicked === index} 
                    key={index}
                    onClick={handlerRowClicked(index)} 
                  >
                    <Styled.Cell>
                      {item.coin}
                    </Styled.Cell>
                    <Styled.Cell>
                      {item.binance}
                    </Styled.Cell>
                    <Styled.Cell>
                      {item.huobi}
                    </Styled.Cell>
                    <Styled.SpreadStyled isDecrease={isDecrease(item.spread)}>
                      {item.spread}
                    </Styled.SpreadStyled>
                  </Styled.TableRow>))
                }
              </tbody>
            </Styled.Table> : null}
        </Styled.Container>
    );
}
