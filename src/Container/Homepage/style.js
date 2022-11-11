import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const SpreadStyled = styled.td`
    color: ${({isDecrease}) => isDecrease ? "green" : "red"};
    padding:10px;
`

export const TableRow = styled.tr`
    background-color: ${({isActive}) => isActive ? "#63854444" : "transparent"};
`  

export const Table = styled.table`
    border-spacing: 0;
    border: 1px solid #111222;
    border-radius: 5px;
`

export const Cell = styled.td`
    padding:10px;
`

export const CellUsd = styled.td`
    padding:10px;
    text-align: right;
`
export const CellAsk = styled.td`
    background-color: ${({binance, huobi}) => {
        if(binance){
            return `#d5f8d5`;
        }
        if(huobi){
            return `#d5f8d5`;
        }
        return 'transparent'
    }};
    padding:10px;
`
export const CellBid = styled.td`
background-color: ${({binance, huobi}) => {
    if(huobi){
        return `#ffd4d4`;
    }
    if(binance){
        return `#ffd4d4`;
    }
    return 'transparent'
}};
    padding:10px;
`
export const CellTMBid = styled.td`
background-color: ${({binance, huobi}) => {
    if(binance){
        return `#d5f8d5`;
    }
    if(huobi){
        return `#d5f8d5`;
    }
    return '#ffd4d4'
}};
    padding:10px;
`