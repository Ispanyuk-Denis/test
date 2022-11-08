import React from 'react'
import * as Styled from './style'

export const Button = ({children, onClick}) => {
  return (
    <Styled.Button onClick={onClick}>
        {children}
    </Styled.Button>
  );
};
