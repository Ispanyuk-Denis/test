import React from "react";

export function HomePage({ getSpotData, uniqueCoins, exchanges, getSortSpread }) {
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
                    <td>
                      {item.spread}
                    </td>
                  </tr>))
                }
              </tbody>
            </table> : null}
        </div>
    );
}
