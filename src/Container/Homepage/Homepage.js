import React from "react";
import * as Styled from "./style"

export function HomePage({ getSpotData, uniqueCoins, exchanges, getSortSpread, isDecrease }) {
    return (
        <div>
            <button onClick={getSpotData}>Get Data</button>

            {exchanges.length ? <table>
              <thead>
                <tr>
                    <td>&nbsp;</td>
                    {exchanges.map((exchange, index) => (
                        <td key={index}>{exchange}</td>
                    ))}
                    <td onClick={getSortSpread}>Spread</td>
                </tr>
              </thead>
              <tbody>
                {
                  uniqueCoins.length && uniqueCoins.map((item, index) => (<tr key={index}>
                    <td>
                      {item.coin}
                    </td>
                    <td>
                      {item.binance}
                    </td>
                    <td>
                      {item.huobi}
                    </td>
                    <Styled.SpreadStyled isDecrease={isDecrease(item.spread)}>
                      {item.spread}
                    </Styled.SpreadStyled>
                  </tr>))
                }
              </tbody>
            </table> : null}
        </div>
    );
}
