import styled from 'styled-components'

export const SpreadStyled = styled.td`
    color: ${({isDecrease}) => isDecrease ? "red" : "green"};
`