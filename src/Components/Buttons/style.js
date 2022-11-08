import styled from 'styled-components'

export const Button = styled.button`
    outline: none;
    border: none;
    padding: 10px 25px;
    border-radius: 10px;
    background-color: #8b00ff;
    color: #fff;
    font-size: 18px;
    margin: 10px 0;
    cursor: pointer;
    transition: background-color .2s linear;
    &:hover{
        background-color: #55009c;
    }
`