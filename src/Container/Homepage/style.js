import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const SpreadStyled = styled.td`
    color: ${({isDecrease}) => isDecrease ? "green" : "red"};
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
    padding: 5px 10px;
`