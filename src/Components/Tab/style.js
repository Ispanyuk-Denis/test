import styled from 'styled-components'

export const TabContainer = styled.div`
    width: 100%;
`

export const TabNav = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    margin-top: 20px;
    padding: 0;
`
export const TabItem = styled.li`
    padding: 10px 15px;
    cursor: pointer;
    border: 1px solid #111222;
    border-radius: 10px;
    margin-left: 10px;
`
export const TabLink = styled.a`
    font-size: 20px;
    text-decoration: none;
    color: inherit;
`
export const TabContent = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width: 1150px){
        overflow: scroll;
        width: auto;
        align-items: flex-start;
    }
`